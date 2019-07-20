var UI = {
	updateDate: function(i) {
		let block = $("#timeline>div").eq(i);
		let start = new Date();
		let end = new Date();
		start.setTime(debut.getTime()+1000*60*60*24*7*(Timeline[i].s-1));
		end.setTime(debut.getTime()+1000*60*60*24*7*((Timeline[i].s-1)+Timeline[i].duration) - 2 * DSTSHIFT);
		block.find('h3>span:eq(0)').text(Utils.getDate(start) + ' → ' + Utils.getDate(end));
	},
	updateDuration: function(i) {
		let block = $("#timeline>div").eq(i);
		block.find('.weekMenu span:eq(0)').text((Timeline[i].duration > 1 ? Timeline[i].duration + ' semaines' : '1 semaine'));
	},
	updateWeek: function(i) {
		let block = $("#timeline>div").eq(i);
		block.find('.weeknumber span:eq(0)').text(Timeline[i].s);
		block.find('.weeknumber span:eq(1)').text(Timeline[i].s+Timeline[i].duration - 1);
	},
	updateHolidays: function(i) {
		let block = $("#timeline>div").eq(i);
		let start = debut.getTime()+1000*60*60*24*7*(Timeline[i].s-1);
		let end = debut.getTime()+1000*60*60*24*7*((Timeline[i].s-1)+Timeline[i].duration) - 2 * DSTSHIFT ;
		block.find('.holydays').remove();
		Holidays.forEach(function(h){
			if(start <= h && h <= end) {
				let d = new Date();
				d.setTime(h);
				block.find('.items').prepend('<span class="holydays">' + d.toLocaleDateString('default',{weekday:'long', day:'2-digit',month:'long'}) + '</span>');
			}
		});
	},
	updateWeekHolidays: function() {
		let shiftWeekHolidays = 0;
		if(WeekHolidays.length) {
			Timeline.forEach(function(timeline, i){
				let block = $("#timeline>div").eq(i);
				block.find('.weekholydays').remove();
				let start = debut.getTime()+1000*60*60*24*7*(Timeline[i].s-1) + shiftWeekHolidays;
				let end = debut.getTime()+1000*60*60*24*7*((Timeline[i].s-1)+Timeline[i].duration)  - 2 * DSTSHIFT + shiftWeekHolidays;
				WeekHolidays.forEach(function(h){
					if(start < h.time && h.time < end) {
						shiftWeekHolidays += h.duration*1000*60*60*24*7;
						end += h.duration*1000*60*60*24*7;
						block.find('.items').prepend('<span class="weekholydays">' + new Date(h.time).toLocaleDateString('default',{day:'2-digit',month:'long'}) + ' → ' + new Date(h.time+h.duration*1000*60*60*24*7).toLocaleDateString('default',{day:'2-digit',month:'long'}) + ' (' + h.duration + (h.duration > 1 ? ' semaines' : ' semaine') +  ')</span>');
					}
				});
				block.find('h3>span:eq(0)').text(Utils.getDate(new Date(start)) + ' → ' + Utils.getDate(new Date(end)));
			});	
		}
	},
	createTimelineBlock: function(timeline) {
		var block = $("<div />").html(`
		<h3 class="ui-state-active ui-corner-top">
			<span></span>
			<span class="weekMenu">
				<span></span> 
				<span class="ui-accordion-header-icon ui-icon ui-icon-plusthick"></span> 
				<span class="ui-accordion-header-icon ui-icon ui-icon-minusthick"></span>
			</span>
		</h3>
		<div class="contenu ui-widget-content">
			<div class="weeknumber">
				<span></span>
				<span></span>
			</div>
			<div class="items"></div>
		</div>
		`);
		var start = new Date();
		var end = new Date();
		start.setTime(debut.getTime()+1000*60*60*24*7*(timeline.s-1));
		end.setTime(debut.getTime()+1000*60*60*24*7*((timeline.s-1)+timeline.duration) - 2 * DSTSHIFT);
		block.find('h3>span:eq(0)').text(Utils.getDate(start) + ' → ' + Utils.getDate(end));
		block.find('.weekMenu span:eq(0)').text((timeline.duration > 1 ? timeline.duration + ' semaines' : '1 semaine'));
		if(timeline.duration == 1) {
			block.find('.weekMenu span:eq(2)').css('opacity','0.25');
		}
		block.find('.weeknumber span:eq(0)').text(timeline.s);
		block.find('.weeknumber span:eq(1)').text(timeline.s+timeline.duration - 1);
		timeline.items.forEach(function(l){
			var m = lines[l].match(/{{([0-9,]+)}}\s*$/);
			var spanItem = $('<span/>').attr({
				'class':'item',
				line: l
			}).text(lines[l].substr(lines[l][1]==' ' ? 2 : 1).slice(0, m ? -m[0].length : undefined));
			block.find('.items').append(spanItem);
			$('#programme .item[line=' + l + ']').addClass('item-used');
		});
		block.insertBefore($('.tools'));
		UI.updateHolidays(block.index());
	},
	create: function() {
		
		////////////////////////////////////////////////////////////////////////////////
		// Création de l'accordion contenant le éléments du programme (partie droite) //
		////////////////////////////////////////////////////////////////////////////////

		$("#programme").empty();
		
		$("#programme").append(`
		<h3>Source</h3>
		<div>
			<textarea></textarea><br />
			<button>Télécharger</button>
			<button>Ouvrir</button>
			<input type="file" accept=".txt" class="ouvrir" />
			<select><option>Ouvrir un modèle ...</option></select>
		</div>
		`);
		
		$("#programme textarea").val(pSource).blur(function(){
			pSource = $(this).val();
			Source.load();
			UI.create();
		});
		$("#programme button:eq(0)").button().click(function(){
			Utils.downloadText('profgramme.txt', pSource.replace(/([^\r])\n/g,'$1\n')); // On rajoute \r pour windows si il n'y est pas
		});
		$("#programme button:eq(1)").button().click(function(){
			$('#programme input.ouvrir').change(function(){
				let files = $('.ouvrir')[0].files;
				if(files.length) {
					Utils.openText(files[0], function(r){
						$("#programme textarea").val(r);
						pSource = r;
						Source.load();
						UI.create();
					});
				}				
			}).click();
			
		});
		
		let selectExample = $("#programme select")[0];
		
		for(let v in examples) {
			let op = document.createElement('option');
			op.textContent = v;
			selectExample.appendChild(op);
		};
		
		$("#programme select").selectmenu({
			change: function(){
				pSource = examples[$(this).val()];
				$("#programme textarea").val(pSource);
				Source.load();
				UI.create();
			}
		});
		
		Themes.forEach(function(theme, i) {
			theme.Chapters.forEach(function(chapter) {
				var title = $('<h3/>').text(chapter.name);
				var btheme = $('<b/>').text(theme.name).css('color','hsl(' + parseInt(i/Themes.length*360) + ',50%,50%)');
				title.prepend(btheme);
				$("#programme").append(title);
				var divitems = $('<div />');
				chapter.Items.forEach(function(item) {
					var spanitem = $('<span />').text(item.name);
					if (!item.text) {
						spanitem.addClass('item');
						spanitem.attr('line', item.line);
					} else {
						spanitem.css('font-weight', 'bold');
					}
					divitems.append(spanitem).append('<br />');
				});
				$("#programme").append(divitems);
			});
		});
		
		$("#programme .item").hover(function(){
			$('#timeline .item[line='+$(this).attr('line')+']').addClass('item-hover');
		},function(){
			$('#timeline .item[line='+$(this).attr('line')+']').removeClass('item-hover');
		});		

		
		if(firstLoad) {
			$("#programme").accordion({
				collapsible: true,
				heightStyle: 'content'
			});
		} else {
			$("#programme").accordion('option', 'animate', false).accordion('refresh').accordion('option', 'animate', {}); // on désactive les animations le temps d'actualiser l'accordion
		}
		
		$("#programme span.item").draggable({
			helper: function(e,item){									// fix width issue
				return $(this).clone().width($(this).width()).attr('data-newelement','1');
			},
			cursorAt:{		// fix append first issue
				top:0,
				left:0
			},
			revert:'invalid',
			connectToSortable:'.items'
		});

		////////////////////////////////////////////////////////////////////
		// Création du sortable contenant la progresssion (partie gauche) //
		////////////////////////////////////////////////////////////////////

		$("#timeline").empty();

		$("<div />").html(`
			<h3 class="ui-state-active ui-corner-top">Outils</h3>
			<div class="contenu ui-widget-content">
				<button class="ajouter">Ajouter une semaine</button> 
				<button class="supprimer">Supprimer la dernière semaine</button>
				<div class='deletearea'>Supprimer un élément (glissez déposer ici)</div>
			</div>
		`).addClass('tools').appendTo($('#timeline'));
			
		$('.tools button.ajouter').button().click(function(){
			let timeline = {
				s: Timeline.length ? Timeline[Timeline.length - 1].s + Timeline[Timeline.length - 1].duration : 1,
				duration: 1,
				items: []
			}
			Timeline.push(timeline);
			Source.updateLastWeek();
			Source.save();
			UI.createTimelineBlock(timeline);
			UI.createItemsSortable();
		});	

		$('.tools button.supprimer').button().click(function(){
			if(Timeline.length) {
				Timeline[Timeline.length - 1].items.forEach(function(i){
					Source.removeItem(Timeline.length - 1, i);
				});	
				Timeline.pop();
				Source.updateLastWeek();
				Source.save();
				$("#timeline>div:nth-last-child(2)").remove();
			}
		});

		Timeline.forEach(function(timeline, i){
			UI.createTimelineBlock(timeline);
		});
		
		UI.updateWeekHolidays();

		UI.createItemsSortable();
			
		$('.deletearea').sortable({
			over: function(e, ui){
				$(this).css('background','red');
			},
			out: function(e, ui){
				$(this).css('background', '');
			},
			receive: function(e, ui) {
				let oldIndex = parseInt($(ui.item).attr('data-oldindex'));
				Timeline[oldIndex].items.slice(Timeline[oldIndex].items.indexOf(parseInt($(ui.item).attr('line'))), 1);
				if(!Source.removeItem(oldIndex, parseInt($(ui.item).attr('line')))) { // si l'item n'est plus utilisé
					$('#programme .item[line='+parseInt($(ui.item).attr('line'))+']').removeClass('item-used');
				}
				Source.save();
				$(ui.item).remove();
			}
		});		
		
		if(firstLoad) {
		
			UI.firstLoad();
			
		}
	},
	firstLoad: function() {
		// Appuis sur le bouton (+) du nombre de semaines

		$("#timeline").on("click", ".weekMenu span:nth-child(2)", function(){
			var block = $(this).closest('h3').parent();
			// var i = block.parent().children().index(block);
			var i = block.index();

			if (Timeline[i].duration==1) {
				block.find('.weekMenu span:eq(2)').css('opacity','');
			}
			
			Timeline[i].duration++;
			
			UI.updateDate(i);
			UI.updateWeek(i);
			UI.updateDuration(i);
			UI.updateHolidays(i);


			for(var j = i + 1 ; j < Timeline.length ; j++) {
				Timeline[j].s++;
				
				UI.updateDate(j);
				UI.updateWeek(j);
				UI.updateHolidays(j);
				
				
				// On met à jour les {{semaines}} dans la source
				
				Source.updateTimelineItems(j, 1);
				
				
			}
			
			Source.updateLastWeek();
			
			Source.save();
				
			UI.updateWeekHolidays();
			
			
			
		});

		// Appuis sur le bouton (-) du nombre de semaines

		$("#timeline").on("click", ".weekMenu span:nth-child(3)", function(){
			var block = $(this).closest('h3').parent();
			var i = block.index();
			if (Timeline[i].duration>1) {

				Timeline[i].duration--;
				
				if (Timeline[i].duration == 1) {
					block.find('.weekMenu span:eq(2)').css('opacity','0.25');
				}
				
				UI.updateDate(i);
				UI.updateWeek(i);
				UI.updateDuration(i);
				UI.updateHolidays(i);
				

				
				
				// if(Timeline.length > i + 1) { 
				
				for(var j = i + 1 ; j < Timeline.length ; j++) {
					
					Timeline[j].s--;
					
					UI.updateDate(j);
					UI.updateWeek(j);
					UI.updateHolidays(j);

					// On met à jour les {{semaines}} dans la source

					Source.updateTimelineItems(j, -1);

				}
				
				Source.updateLastWeek();
				
				Source.save();
				
				UI.updateWeekHolidays();
				
			}
			
		});

		$("#timeline").sortable({
			axis:'y',
			items:'>*:not(:last)',
			cancel:'.items, .weekMenu .ui-icon', // or handle
			revert: 100,
			start: function(e, ui) {
				$(this).attr('data-oldindex', ui.item.index());
			},
			update: function(e, ui) {
				var oldIndex = parseInt($(this).attr('data-oldindex'));
				var newIndex = ui.item.index();	
				$(this).attr('data-oldindex','');
				
				/*
					Si on décalle dans le passé un bloc, on décalle vers le futur tous les blocs entre le début et l'arrivée d'autant que la durée du bloc décallé
					Si on décalle dans le futur un bloc, on décalle vers le passé tous les blocs entre le début et l'arrivée d'autant que la durée du bloc décallé
				*/
				

				// On déplace dans l'array le bloc déplacé
				Timeline.splice(newIndex, 0, Timeline.splice(oldIndex, 1)[0]);
				
				
				if (newIndex < oldIndex) {
					
					// On met à jour la semaine de départ du bloc déplacé
					Timeline[newIndex].s = Timeline[newIndex+1].s;
					
					UI.updateDate(newIndex);
					UI.updateWeek(newIndex);
					UI.updateHolidays(i);
					
					// On met à jour la semaine de départ des blocs intermédiaires
					for(let i = newIndex + 1 ; i <= oldIndex ; i++) {
						Timeline[i].s += Timeline[newIndex].duration;
						UI.updateDate(i);
						UI.updateWeek(i);
						UI.updateHolidays(i);
					}

				} else {
								
					// On met à jour la semaine de départ des blocs intermédiaires
					for(let i = newIndex - 1 ; i >= oldIndex ; i--) {
						Timeline[i].s -= Timeline[newIndex].duration;
						UI.updateDate(i);
						UI.updateWeek(i);
						UI.updateHolidays(i);
					}
					
					// On met à jour la semaine de départ du bloc déplacé
					Timeline[newIndex].s = Timeline[newIndex-1].s + Timeline[newIndex-1].duration;
					
					UI.updateDate(newIndex);
					UI.updateWeek(newIndex);
					UI.updateHolidays(i);
					
				}
				
					
			
			}
		});

	},
	createItemsSortable: function() {
		$(".items").sortable({
			axis:'y',
			items:'>.item',
			revert: 100,
			connectWith: '.items, .deletearea',
			receive: function(e,ui) { 
				/*if(ui.sender.parents('#programme').length) { // ajout d'un élément depuis le programme (panel de droite)
					$('#programme .item[line='+$(ui.item).attr('line')+']').addClass('item-used');
					Timeline[$(this).parent().parent().index()].items.push(parseInt($(ui.item).attr('line')));
				}*/
			},
			start: function(e, ui) {
				$(ui.item).attr('data-oldindex', $(ui.item).parent().parent().parent().index()); // will not be deleted if sorting cancelled but it's not an issue
			},
			update: function(e, ui) {
				if(!$(ui.item).parent().hasClass('deletearea')) {
					let l = parseInt($(ui.item).attr('line'));
					if(ui.item.attr('data-newelement')) { // ajout d'un élément depuis le programme (panel de droite)
						$(ui.item).attr('data-newelement','');
						$('#programme .item[line='+l+']').addClass('item-used');
						if(Source.updateItemAdded(l, Timeline[$(this).parent().parent().index()].s)) { // renvoi false si item est déjà présent
							Timeline[$(this).parent().parent().index()].items.push(l);
							Source.save();
						} else {
							$(ui.item).remove();
						}
					} else { // déplacement d'un élément
						var oldIndex = parseInt($(ui.item).attr('data-oldindex'));
						if(!isNaN(oldIndex)) {
							let newIndex = $(ui.item).parent().parent().parent().index();
							if(oldIndex != newIndex) {
								Timeline[oldIndex].items.splice(Timeline[oldIndex].items.indexOf(l), 1);		// On enlève l'item de l'ancienne timeline
								if(Source.updateItemMoved(l, oldIndex, newIndex)) {	// On met à jours la semaine de début dans la source
									Timeline[newIndex].items.push(l);	// On ajoute l'item dans la nouvelle timeline
								} else {
									$(ui.item).remove();	// on supprime l'item en cas de doublon
								}
								Source.save();								
							}
						} else {
							// On ne fait rien : il s'agit d'un simple "echo" lors du déplacement d'une semaine à l'autre
						}
					}
					$(ui.item).attr('data-oldindex','');
				}
			}
		});
	}
}