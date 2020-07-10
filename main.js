// TODO: position item dans une semaine ?
// TODO: load from template
// TODO: infobulle/popup avec liste des semaines où l'élément est utilisé ?
// TODO: espace blanc au début d'une ligne ?
// TODO: gestion des erreurs dans la source ?
// TODO: Bouton ajouter jour férié / vacances
// TODO: Si lors de l'ajout d'une semaine, pas de date de début, la demander !
// TODO: commentaires ou titre chapitre ?

var Themes, Timeline, currentTheme, currentChapter, debut, lastWeek, lines, pSource, Holidays, WeekHolidays;

var firstLoad = true;

var Options = {
	colorItemByTheme: false
}

var Utils = {

	getDate: function (date) {
		// Transforme un timestamp en date au format jj/mm
		return date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth() + 1).toString().padStart(2, '0');
	},
	downloadText: function (filename, txt) {
		// Lance le téléchargement d'un fichier texte
		let el = document.createElement('a');
		el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt));
		el.setAttribute('download', filename);

		el.style.display = 'none';
		document.body.appendChild(el);

		el.click();

		document.body.removeChild(el);
	},
	openText: function (file, f) {
		// Retourne le contenu d'un fichier choisi par l'utilisateur
		let reader = new FileReader();

		reader.onload = function () {
			f(reader.result);
		}

		reader.readAsText(file);
	}

}

////////////////////////////////////
// ETAPE 1 : ANALYSE DU PROGRAMME //
////////////////////////////////////

Source.load();

///////////////////////////////////////
// ETAPE 2 : CREATION DE L'INTERFACE //
///////////////////////////////////////


UI.create();

UI.createItemsSortable();

firstLoad = false;
