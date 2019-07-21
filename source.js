const DSTSHIFT = 1000 * 60 * 60 * 4; // décallage de 4h pour éviter l'influence des changements d'heure
// Remarque : avant l'ajout du DSTSHIFT, on soustrayait 1ms à la date de fin afin que le jour de fin de période soit distinct de jour de début de la période suivante.
// On soustrait maintenant à la place deux fois DSTSHIFT ce qui permet d'abord de compensé l'ajout du DSTSHIFT au début, d'éviter l'influence du changement d'heure.
// La soustraction de 1ms est devenu inutile donc on ne l'effectue plus


var Source = {
	updateTimelineItems: function (j, diff) {

		// Permet de mettre à jour dans la source la {{semaine}} de début des items de la timeline j après modifications des périodes

		// Il faut ensuite mettre à jour le textarea


		Timeline[j].items.forEach(function (i) {
			let line = lines[i];
			let m = line.match(/{{([0-9,]+)}}\s*$/);
			if (m) {
				let week = m[1].split(',');
				week.forEach(function (w, k) {
					if (w == Timeline[j].s - diff) { // si le numéro de semaine correspond à l'ancienne valeur et doit être mis à jour
						week[k] = Timeline[j].s;
					}
				});
				week.sort();
				lines[i] = line.replace(/{{([0-9,]+)}}\s*$/, '{{' + week.join(',') + '}}');
			} else {
				lines[i] += '{{' + Timeline[j].s + '}}';
			}
		});
	},
	updateItemAdded: function (i, s)  {
		let line = lines[i];
		let m = line.match(/{{([0-9,]+)}}\s*$/);
		if (m) {
			let week = m[1].split(',');
			if (week.indexOf(s.toString()) != -1) {
				return false;
			}
			week.push(s);
			week.sort();
			lines[i] = line.replace(/{{([0-9,]+)}}\s*$/, '{{' + week.join(',') + '}}');
		} else {
			lines[i] += '{{' + s + '}}';
		}
		return true;
	},
	updateItemMoved: function (l, o, n) { // l = line, o = oldIndex, n = newIndex
		let line = lines[l];
		let m = line.match(/{{([0-9,]+)}}\s*$/);
		let week = m[1].split(',');
		if (week.indexOf(Timeline[n].s.toString()) != -1) { // l'item est déjà présent dans la nouvelle période
			week.splice(week.indexOf(Timeline[o].s.toString()), 1);
			week.sort();
			lines[l] = line.replace(/{{([0-9,]+)}}\s*$/, '{{' + week.join(',') + '}}');
			return false;
		}
		week[week.indexOf(Timeline[o].s.toString())] = Timeline[n].s;
		week.sort();
		lines[l] = line.replace(/{{([0-9,]+)}}\s*$/, '{{' + week.join(',') + '}}');

		return true;
	},
	removeItem: function (i, l) {
		let line = lines[l];
		let m = line.match(/{{([0-9,]+)}}\s*$/);
		let week = m[1].split(',');
		week.splice(week.indexOf(Timeline[i].s.toString()), 1);
		if (week.length) {
			week.sort();
			lines[l] = line.replace(/{{([0-9,]+)}}\s*$/, '{{' + week.join(',') + '}}');
			return true;
		} else {
			lines[l] = line.replace(/{{([0-9,]+)}}\s*$/, '');
			return false;
		}
	},
	updateLastWeek: function () {
		lastWeek = Timeline[Timeline.length - 1].s + Timeline[Timeline.length - 1].duration - 1;
		if (lines[lines.length - 1].match(/^\s*{{([0-9]+)}}\s*$/)) {
			lines[lines.length - 1] = lines[lines.length - 1].replace(/^\s*{{([0-9]+)}}\s*$/, '{{' + lastWeek + '}}');
		} else {
			lines.push("{{" + lastWeek + "}}");
		}
	},
	save: function () {
		pSource = lines.join('\n');
		$("#programme textarea").val(pSource);
	},
	load: function () {
		Themes = [/*{
			name:'',			// Thème
			Chapters:[{
			name:'',		// Chapitre
			Items: [{		// Items
			name: ''
			}]
			}]
			}*/
		];

		Timeline = [/*{
			s: 1,
			duration: 5,
			items: [3,5]
			},{
			s: 5,
			duration: 2,
			items: [7]
			}*/

			/*
		{
			s:,
			items: [],
			duration:
			}
			 */

		];

		Holidays = [
			/*
			58664654, 65465456465, ...
			 */
		];

		WeekHolidays = [
			/*{
			time: 12345,
			duration: 2
			}
			 */
		];

		currentTheme = -1;
		currentChapter = -1;
		debut = new Date();
		lastWeek = false;

		lines = pSource.trim().split(/[\r\n]+/);

		// need to add a fail safe in case item added before Chapter !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		// failsafe line change
		// mettre les items parsés dans un array ?
		// duration last week

		lines.forEach(function (line, i) {
			if (line[0] == '@') { // début d'année
				let d = line.substr(line[1] == ' ' ? 2 : 1);
				let m = d.match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{1,4})/);
				if (m) {
					debut = new Date(m[2] + "/" + m[1] + "/" + m[3]);
				} else {
					debut = new Date(d);
					if (debut == "Invalid Date") {
						debut = new Date();
					}
				}
				debut.setTime(debut.getTime() + DSTSHIFT);
			} else if (line[0] == '#') { // Thème
				Themes.push({
					name: line.substr(line[1] == ' ' ? 2 : 1),
					Chapters: []
				});
				currentTheme++;
				currentChapter = -1;
			} else if (line[0] == '=') { // Chapitre
				if (currentTheme == -1) {
					Themes.push({
						name: '',
						Chapters: []
					});
					currentTheme++;
					currentChapter = -1;
				}
				Themes[currentTheme].Chapters.push({
					name: line.substr(line[1] == ' ' ? 2 : 1),
					Items: []// Items
				});
				currentChapter++;
			} else if (line[0] == '-') { // Items
				if (currentTheme == -1) {
					Themes.push({
						name: '',
						Chapters: []
					});
					currentTheme++;
					currentChapter = -1;
				}
				if (currentChapter == -1) {
					Themes[currentTheme].Chapters.push({
						name: line.substr(line[1] == ' ' ? 2 : 1),
						Items: []// Items
					});
					currentChapter++;
				}
				let m = line.match(/{{([0-9,]+)}}\s*$/);
				if (m) {
					var week = m[1];
				} else {
					var week = false;
				}
				Themes[currentTheme].Chapters[currentChapter].Items.push({
					name: line.substr(line[1] == ' ' ? 2 : 1).slice(0, m ? -m[0].length : undefined), // null ne fonctionne pas, il faut à tout pris undefined
					line: i
					//week: week
				});
				if (week) {
					week = week.split(',');
					week.forEach(function (w) {
						w = parseInt(w);
						var timeline = Timeline.find(v => v.s == w); // Timeline est un tableau d'objet, find renvoie ici une référence et non pas une valeur
						if (!timeline) {
							var timeline = {
								s: w,
								duration: 1,
								items: []
							};
							Timeline.push(timeline);
						}
						timeline.items.push(i);
					});
				}
			} else if (i == lines.length - 1 && (m = line.match(/^\s*{{([0-9]+)}}\s*$/))) {
				lastWeek = m[1];
			} else if (line[0] == '%') { // Vacances
				let d = line.substr(line[1] == ' ' ? 2 : 1);
				let m = d.match(/(?:([0-9]+)\s%\s)?([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{1,4})/);
				let vd;
				if (m) {
					if (m[1]) {
						vd = new Date(m[3] + "/" + m[2] + "/" + m[4]);
						WeekHolidays.push({
							time: vd.getTime(),
							duration: parseInt(m[1])
						});
					} else {
						vd = new Date(m[3] + "/" + m[2] + "/" + m[4]);
						Holidays.push(vd.getTime());
					}
				}
				/* else {
				vd = new Date(d);
				if(debut == "Invalid Date") {
				// vd = new Date();
				return;
				}
				}*/
			} else { // simple text
				if (currentTheme == -1) {
					Themes.push({
						name: '',
						Chapters: []
					});
					currentTheme++;
					currentChapter = -1;
				}
				if (currentChapter == -1) {
					Themes[currentTheme].Chapters.push({
						name: line.substr(line[1] == ' ' ? 2 : 1),
						Items: []// Items
					});
					currentChapter++;
				}
				Themes[currentTheme].Chapters[currentChapter].Items.push({
					name: line,
					text: true
				});
			}
		});

		Timeline.sort((a, b) => a.s - b.s); // on trie la progression par ordre chronologique


		if (Timeline.length) {
			if (lastWeek === false) {
				lastWeek = Timeline[Timeline.length - 1].s;
			} else {
				if (lastWeek < Timeline[Timeline.length - 1].s) {
					lastWeek = Timeline[Timeline.length - 1].s;
					lines[lines.length - 1] = lines[lines.length - 1].replace(/^\s*{{([0-9]+)}}\s*$/, '{{' + lastWeek + '}}'); // TODO: Use source lib ?
				}
			}
			Timeline[Timeline.length - 1].duration = lastWeek - Timeline[Timeline.length - 1].s + 1;

		}

		Timeline.forEach(function (timeline, i) {
			if (i < Timeline.length - 1) {
				timeline.duration = Timeline[i + 1].s - timeline.s;
			}
		});

	}
}
