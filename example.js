var exampleShared = {
start: '@ 02/09/2019',
holiday2019: `% 2 % 20/10/2019
% 11/11/2019
% 2 % 22/12/2019
% 2 % 09/02/2020
% 2 % 05/04/2020
% 13/04/2020
% 01/05/2020
% 08/05/2020
% 21/05/2020
% 22/05/2020
% 23/05/2020
% 01/07/2020`
}

var examples = {
	'Zone C 2019': `${exampleShared.start}
${exampleShared.holiday2019}
`,
	'Mathématiquees 2nd 2019': `${exampleShared.start}
#Nombres et calculs
=Manipuler les nombres réels
Connaissances
- Ensemble ℝ des nombres réels, droite numérique.
- Intervalles de ℝ. Notations +∞ et −∞.
- Notation |𝑎|. Distance entre deux nombres réels.
- Représentation de l’intervalle [𝑎 − 𝑟, 𝑎 + 𝑟] puis caractérisation par la condition |𝑥 − 𝑎| ≤ 𝑟.
- Ensemble 𝔻 des nombres décimaux. Encadrement décimal d’un nombre réel à 10−𝑛 près.
- Ensemble ℚ des nombres rationnels. Nombres irrationnels ; exemples fournis par la géométrie, par exemple √2 et π.
Capacités associées
- Associer à chaque point de la droite graduée un unique nombre réel et réciproquement.
- Représenter un intervalle de la droite numérique. Déterminer si un nombre réel appartient à un intervalle donné.
- Donner un encadrement d’un nombre réel par des décimaux, d’amplitude donnée.
- Dans le cadre de la résolution de problèmes, arrondir en donnant le nombre de chiffres significatifs adapté à la situation étudiée.
Démonstrations
- Le nombre rationnel 1/3 n’est pas décimal.
- Le nombre réel √2 est irrationnel.
=Utiliser les notions de multiple, diviseur et de nombre premier
Connaissances
- Notations ℕ et ℤ.
- Définition des notions de multiple, de diviseur, de nombre pair, de nombre impair.
Capacités associées
- Modéliser et résoudre des problèmes mobilisant les notions de multiple, de diviseur, de nombre pair, de nombre impair, de nombre premier.
- Présenter les résultats fractionnaires sous forme irréductible.
Démonstrations
- Pour une valeur numérique de 𝑎, la somme de deux multiples de 𝑎 est multiple de 𝑎.
- Le carré d’un nombre impair est impair.
Exemples d’algorithme
- Déterminer si un entier naturel 𝑎 est multiple d’un entier naturel 𝑏.
- Pour des entiers 𝑎 et 𝑏 donnés, déterminer le plus grand multiple de 𝑎 inférieur ou égal à 𝑏.
- Déterminer si un entier naturel est premier.
=Utiliser le calcul littéral
Connaissances
- Règles de calcul sur les puissances entières relatives, sur les racines carrées. Relation √𝑎² = |𝑎|.
- Identités 𝑎² − 𝑏² = (𝑎 − 𝑏)(𝑎 + 𝑏), (𝑎 + 𝑏)² = 𝑎² + 2𝑎𝑏 + 𝑏² et (𝑎 − 𝑏)² = 𝑎² − 2𝑎𝑏 + 𝑏², à connaître dans les deux sens.
- Exemples simples de calcul sur des expressions algébriques, en particulier sur des expressions fractionnaires.
- Somme d’inégalités. Produit d’une inégalité par un réel positif, négatif, en liaison avec le sens de variation d’une fonction affine.
- Ensemble des solutions d’une équation, d’une inéquation.
Capacités associées
- Effectuer des calculs numériques ou littéraux mettant en jeu des puissances, des racines carrées, des écritures fractionnaires.
- Sur des cas simples de relations entre variables (par exemple 𝑈 = 𝑅𝐼, 𝑑 = 𝑣𝑡, 𝑆 = 𝜋𝑟², 𝑉 = 𝑎𝑏𝑐, 𝑉 = 𝜋𝑟²h), exprimer une variable en fonction des autres. Cas d’une relation du premier degré 𝑎𝑥 + 𝑏𝑦 = 𝑐.
- Choisir la forme la plus adaptée (factorisée, développée réduite) d’une expression en vue de la résolution d’un problème.
- Comparer deux quantités en utilisant leur différence, ou leur quotient dans le cas positif.
- Modéliser un problème par une inéquation.
- Résoudre une inéquation du premier degré.
Démonstrations
- Quels que soient les réels positifs 𝑎, 𝑏 on a √𝑎𝑏 = √a√𝑏.
- Si 𝑎 et 𝑏 sont des réels strictement positifs, √𝑎 + 𝑏 < √𝑎 + √𝑏
- Pour 𝑎 et 𝑏 réels positifs, illustration géométrique de l’égalité 𝑎² + 2𝑎𝑏 + 𝑏² = (𝑎 + 𝑏)²
Exemple d’algorithme
- Déterminer la première puissance d’un nombre positif donné supérieure ou inférieure à une valeur donnée.
Approfondissements
- Développement de (𝑎 + 𝑏 + 𝑐)²
- Développement de (𝑎 + 𝑏)³
- Inégalité entre moyennes géométrique et arithmétique de deux réels strictement positifs
# Géométrie
=Manipuler les vecteurs du plan
Connaissances
- Vecteur 𝑀𝑀′ associé à la translation qui transforme 𝑀 en 𝑀′. Direction, sens et norme.
- Égalité de deux vecteurs. Notation ->u. Vecteur nul.
- Somme de deux vecteurs en lien avec l’enchaînement des translations. Relation de Chasles.
- Base orthonormée. Coordonnées d’un vecteur. Expression de la norme d’un vecteur.
- Expression des coordonnées de ->AB en fonction de celles de 𝐴 et de 𝐵.
- Produit d’un vecteur par un nombre réel. Colinéarité de deux vecteurs.
- Déterminant de deux vecteurs dans une base orthonormée, critère de colinéarité. Application à l’alignement, au parallélisme.
Capacités associées
- Représenter géométriquement des vecteurs.
- Construire géométriquement la somme de deux vecteurs.
- Représenter un vecteur dont on connaît les coordonnées. Lire les coordonnées d’un vecteur.
- Calculer les coordonnées d’une somme de vecteurs, d’un produit d’un vecteur par un nombre réel.
- Calculer la distance entre deux points. Calculer les coordonnées du milieu d’un segment.
- Caractériser alignement et parallélisme par la colinéarité de vecteurs.
- Résoudre des problèmes en utilisant la représentation la plus adaptée des vecteurs.
Démonstration
- Deux vecteurs sont colinéaires si et seulement si leur déterminant est nul.
Approfondissement
- Définition vectorielle des homothéties.
=Résoudre des problèmes de géométrie
Connaissances
- Cercle circonscrit à un triangle. Cas du triangle rectangle.
- Projeté orthogonal d’un point sur une droite.
Capacités associées
- Résoudre des problèmes de géométrie plane sur des figures simples ou complexes (triangles, quadrilatères, cercles).
- Calculer des longueurs, des angles, des aires et des volumes. Veiller à mobiliser les connaissances du collège, notamment la trigonométrie.
- Traiter de problèmes d’optimisation.
Démonstrations
- Le projeté orthogonal du point 𝑀 sur une droite ∆ est le point de la droite ∆ le plus proche du point 𝑀.
- Relation trigonométrique cos²(𝛼) + sin²(𝛼) = 1 dans un triangle rectangle.
- Le point de concours des médiatrices est le centre du cercle circonscrit.
Approfondissements
- Démontrer que les hauteurs d’un triangle sont concourantes.
- Expression de l’aire d’un triangle : 1/2𝑎𝑏 sin 𝐶.
- Formule d’Al-Kashi.
=Représenter et caractériser les droites du plan
Dans cette section, le plan est muni d’un repère orthonormé.
Connaissances
- Vecteur directeur d’une droite.
- Application du déterminant aux équations de droite : équation cartésienne, équation réduite.
- Pente (ou coefficient directeur) d’une droite non parallèle à l’axe des ordonnées.
Capacités associées
- Déterminer une équation de droite à partir de deux points, un point et un vecteur directeur ou un point et la pente.
- Déterminer la pente ou un vecteur directeur d’une droite donnée par une équation ou une représentation graphique.
- Tracer une droite connaissant son équation cartésienne ou réduite.
- Établir que trois points sont alignés ou non.
- Déterminer si deux droites sont parallèles ou sécantes.
- Résoudre un système de deux équations linéaires à deux inconnues, déterminer le point d’intersection de deux droites sécantes.
Démonstration
- En utilisant le déterminant, établir la forme générale d’une équation de droite.
Exemples d’algorithme
- Étudier l’alignement de trois points dans le plan.
- Déterminer une équation de droite passant par deux points donnés.
Approfondissements
- Ensemble des points équidistants d’un point et de l’axe des abscisses.
- Représentation, sur des exemples, de parties du plan décrites par des inégalités sur les coordonnées
# Fonctions
=Fonctions de référence
Connaissances
- Fonctions carré, inverse, racine carrée, cube : définitions et courbes représentatives.
Capacités associées
- Pour deux nombres 𝑎 et 𝑏 donnés et une fonction de référence 𝑓, comparer 𝑓(𝑎) et 𝑓(𝑏) numériquement ou graphiquement.
- Pour les fonctions affines, carré, inverse, racine carrée et cube, résoudre graphiquement ou algébriquement une équation ou une inéquation du type 𝑓(𝑥) = 𝑘, 𝑓(𝑥) < 𝑘.
Démonstration
- Étudier la position relative des courbes d’équation 𝑦 = 𝑥, 𝑦 = 𝑥², 𝑦 = 𝑥³, pour 𝑥 ≥ 0.
=Fonctions, courbes représentatives
Connaissances
- Fonction à valeurs réelles définie sur un intervalle ou une réunion finie d’intervalles de R.
- Courbe représentative : la courbe d’équation 𝑦 = 𝑓(𝑥) est l’ensemble des points du plan dont les coordonnées (𝑥, 𝑦) vérifient 𝑦 = 𝑓(𝑥).
- Fonction paire, impaire. Traduction géométrique.
Capacités associées
- Exploiter l’équation 𝑦 = 𝑓(𝑥) d’une courbe : appartenance, calcul de coordonnées.
- Modéliser par des fonctions des situations issues des mathématiques, des autres disciplines.
- Résoudre une équation ou une inéquation du type 𝑓(𝑥) = 𝑘, 𝑓(𝑥) < 𝑘, en choisissant une méthode adaptée : graphique, algébrique, logicielle.
- Résoudre une équation, une inéquation produit ou quotient, à l’aide d’un tableau de signes.
- Résoudre graphiquement ou à l’aide d’un outil numérique une équation ou inéquation du type 𝑓(𝑥) = 𝑔(𝑥), 𝑓(𝑥) < 𝑔(𝑥).
- Étudier la parité d’une fonction sur des exemples.
=Variations et extremums
Connaissances
- Croissance, décroissance, monotonie d’une fonction définie sur un intervalle. Tableau de variations.
- Maximum, minimum d’une fonction sur un intervalle.
- Pour une fonction affine, interprétation du coefficient directeur comme taux d’accroissement, variations selon son signe.
- Variations des fonctions carré, inverse, racine carrée, cube.
Capacités associées
- Relier représentation graphique et tableau de variations.
- Déterminer graphiquement les extremums d’une fonction sur un intervalle.
- Exploiter un logiciel de géométrie dynamique ou de calcul formel, la calculatrice ou Python pour décrire les variations d’une fonction donnée par une formule.
- Relier sens de variation, signe et droite représentative d’une fonction affine.
Démonstration
- Variations des fonctions carré, inverse, racine carrée.
Exemples d’algorithme
- Pour une fonction dont le tableau de variations est donné, algorithmes d’approximation numérique d’un extremum (balayage, dichotomie).
- Algorithme de calcul approché de longueur d’une portion de courbe représentative de fonction.
Approfondissement
- Relier les courbes représentatives de la fonction racine carrée et de la fonction carré sur ℝ+.
# Statistique et probabilités
=Information chiffrée et statistique descriptive
Connaissances
- Proportion, pourcentage d’une sous-population dans une population.
- Ensembles de référence inclus les uns dans les autres : pourcentage de pourcentage.
- Évolution : variation absolue, variation relative.
- Évolutions successives, évolution réciproque : relation sur les coefficients multiplicateurs (produit, inverse).
- Indicateurs de tendance centrale d’une série statistique : moyenne pondérée.
- Linéarité de la moyenne.
- Indicateurs de dispersion : écart interquartile, écart type.
Capacités associées
- Exploiter la relation entre effectifs, proportions et pourcentages.
- Traiter des situations simples mettant en jeu des pourcentages de pourcentages.
- Exploiter la relation entre deux valeurs successives et leur taux d’évolution.
- Calculer le taux d’évolution global à partir des taux d’évolution successifs. Calculer un taux d’évolution réciproque.
- Décrire verbalement les différences entre deux séries statistiques, en s’appuyant sur des indicateurs ou sur des représentations graphiques données.
- Pour des données réelles ou issues d’une simulation, lire et comprendre une fonction écrite en Python renvoyant la moyenne 𝑚, l’écart type 𝑠, et la proportion d’éléments appartenant à [𝑚 − 2𝑠, 𝑚 + 2𝑠].
=Probabilités sur un ensemble fini
Connaissances
- Ensemble (univers) des issues. Évènements. Réunion, intersection, complémentaire.
- Loi (distribution) de probabilité. Probabilité d’un évènement : somme des probabilités des issues.
- Relation P(A ∪ B) + P(A ∩ B) = P(A) + P(B).
- Dénombrement à l’aide de tableaux et d’arbres.
Capacités associées
- Utiliser des modèles théoriques de référence (dé, pièce équilibrée, tirage au sort avec équiprobabilité dans une population) en comprenant que les probabilités sont définies a priori.
- Construire un modèle à partir de fréquences observées, en distinguant nettement modèle et réalité.
- Calculer des probabilités dans des cas simples : expérience aléatoire à deux ou trois épreuves.
=Échantillonnage
Connaissances
- Échantillon aléatoire de taille n pour une expérience à deux issues.
- Version vulgarisée de la loi des grands nombres : « Lorsque 𝑛 est grand, sauf exception, la fréquence observée est proche de la probabilité. »
- Principe de l’estimation d’une probabilité, ou d’une proportion dans une population, par une fréquence observée sur un échantillon.
Expérimentations
- Lire et comprendre une fonction Python renvoyant le nombre ou la fréquence de succès dans un échantillon de taille 𝑛 pour une expérience aléatoire à deux issues.
- Observer la loi des grands nombres à l’aide d’une simulation sur Python ou tableur.
- Simuler 𝑁 échantillons de taille 𝑛 d’une expérience aléatoire à deux issues. Si 𝑝 est la probabilité d’une issue et 𝑓 sa fréquence observée dans un échantillon, calculer la proportion des cas où l’écart entre 𝑝 et 𝑓 est inférieur ou égal à 1/√n
# Algorithmique et programmation
= Variables et instructions élémentaires
Connaissances
- Variables informatiques de type entier, flottant, chaîne de caractère.
- Affectation (notée ← en langage naturel).
- Séquence d’instructions.
- Instruction conditionnelle.
- Boucle bornée (for), boucle non bornée (while).
Capacités associées
- Choisir ou déterminer le type d’une variable (entier, flottant ou chaîne de caractères).
- Concevoir et écrire une instruction d’affectation, une séquence d’instructions, une instruction conditionnelle.
- Écrire une formule permettant un calcul combinant des variables.
- Programmer, dans des cas simples, une boucle bornée, une boucle non bornée.
- Dans des cas plus complexes : lire, comprendre, modifier ou compléter un algorithme ou un programme
= Notion de fonction
Connaissances
Fonctions à un ou plusieurs arguments.
- Fonction renvoyant un nombre aléatoire. Série statistique obtenue par la répétition de l’appel d’une telle fonction.
Capacités associées
- Écrire des fonctions simples ; lire, comprendre, modifier, compléter des fonctions plus complexes. Appeler une fonction.
- Lire et comprendre une fonction renvoyant une moyenne, un écart type. Aucune connaissance sur les listes n’est exigée.
- Écrire des fonctions renvoyant le résultat numérique d’une expérience aléatoire, d’une répétition d’expériences aléatoires indépendantes.`
}

var pSource = examples['Mathématiquees 2nd 2019'];