var exampleShared = {
start2020: '@ 01/09/2020',
zoneA2020: `% 2 % 18/10/2020
% 11/11/2020
% 2 % 20/12/2020
% 2 % 07/02/2021
% 2 % 11/04/2021
% 05/04/2021
% 01/05/2021
% 08/05/2021
% 13/05/2021
% 14/05/2021
% 15/05/2021
% 24/05/2021`,
zoneB2020: `% 2 % 18/10/2020
% 11/11/2020
% 2 % 20/12/2020
% 2 % 21/02/2021
% 2 % 25/04/2021
% 05/04/2021
% 01/05/2021
% 08/05/2021
% 13/05/2021
% 14/05/2021
% 15/05/2021
% 24/05/2021`,
zoneC2020: `% 2 % 18/10/2020
% 11/11/2020
% 2 % 20/12/2020
% 2 % 14/02/2021
% 2 % 18/04/2021
% 05/04/2021
% 01/05/2021
% 08/05/2021
% 13/05/2021
% 14/05/2021
% 15/05/2021
% 24/05/2021`,
start2019: '@ 02/09/2019',
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
	'Zone A 2020': `${exampleShared.start2020}
${exampleShared.zoneA2020}
`,
	'Zone B 2020': `${exampleShared.start2020}
${exampleShared.zoneB2020}
`,
	'Zone C 2020': `${exampleShared.start2020}
${exampleShared.zoneC2020}
`,
	'Mathématiques Terminale Techno (hors STD2A)': `${exampleShared.start2020}
# Automatismes
= Proportions et pourcentages
- calculer, appliquer, exprimer une proportion sous différentes formes (décimale, fractionnaire, pourcentage)
- calculer la proportion d'une proportion
= Évolutions et variations
- passer d'une formulation additive (« augmenter de 5 % », respectivement « diminuer de 5 % ») à une formulation multiplicative (« multiplier par 1,05 », respectivement « multiplier par 0,95 »)
- appliquer un taux d'évolution pour calculer une valeur finale ou initiale
- calculer un taux d'évolution, l'exprimer en pourcentage
- interpréter un indice de base 100 ; calculer un indice ; calculer le taux d'évolution entre deux valeurs
- calculer le taux d'évolution équivalent à plusieurs évolutions successives
- calculer un taux d'évolution réciproque 
- reconnaître une situation contextualisée se modélisant par une suite géométrique dont on identifie la raison
= Calcul numérique et algébrique
- effectuer des opérations et des comparaisons entre des fractions simples
- effectuer des opérations sur les puissances
- passer d'une écriture d'un nombre à une autre (décimale, fractionnaire, scientifique)
- estimer un ordre de grandeur
- effectuer des conversions d'unités
- résoudre une équation ou une inéquation du premier degré, une équation du type : x² = a
- déterminer le signe d'une expression du premier degré, d'une expression factorisée du second degré 
- isoler une variable dans une égalité ou une inégalité qui en comporte plusieurs sur des exemples internes aux mathématiques ou issus des autres disciplines 
- effectuer une application numérique d'une formule (notamment pour les formules utilisées dans les autres disciplines) 
- développer, factoriser, réduire une expression algébrique simple 
- calculer la dérivée d'une fonction polynomiale de degré inférieur ou égal à 3
- calculer le coefficient directeur de la tangente en un point à une courbe à l'aide de la dérivée
= Fonctions et représentations
- déterminer graphiquement des images et des antécédents 
- résoudre graphiquement une équation, une inéquation du type : ƒ(x) = k, ƒ(x) < k
- déterminer le signe d'une expression factorisée du second degré à l'aide d'une image mentale de la courbe représentative de la fonction correspondante
- déterminer graphiquement le signe d'une fonction ou son tableau de variations 
- exploiter une équation de courbe (appartenance d'un point, calcul de coordonnées) 
- tracer une droite donnée par son équation réduite ou par un point et son coefficient directeur 
- lire graphiquement l'équation réduite d'une droite 
- déterminer l'équation réduite d'une droite à partir des coordonnées de deux de ses points 
- déterminer graphiquement le coefficient directeur d'une tangente à une courbe
= Représentations graphiques de données chiffrées :
- lire un graphique, un histogramme, un diagramme en barres ou circulaire, un diagramme en boîte ou toute autre représentation (repérer l'origine du repère, les unités de graduations ou les échelles...) 
- passer du graphique aux données et vice versa
# Analyse
= Suites numériques
Suites arithmétiques :
- moyenne arithmétique de deux nombres 
- expression en fonction de n du terme de rang n
- somme des n premiers termes d'une suite arithmétique ; notation 𝚺
Suites géométriques à termes positifs :
- moyenne géométrique de deux nombres positifs 
- expression en fonction de n du terme de rang n
- somme des n premiers termes d'une suite géométrique ; notation 𝚺
Capacités attendues :
- Prouver que trois nombres sont (ou ne sont pas) les termes consécutifs d'une suite arithmétique ou géométrique
- Déterminer la raison d'une suite arithmétique ou géométrique modélisant une évolution
- Exprimer en fonction de n le terme général d'une suite arithmétique ou géométrique
- Calculer la somme des n premiers termes d'une suite arithmétique ou géométrique
- Reconnaître une situation relevant du calcul d'une somme de termes consécutifs d'une suite arithmétique ou géométrique
Situations algorithmiques
- Écrire en langage Python une fonction qui calcule la somme des n premiers carrés, des n premiers cubes ou des n premiers inverses ; établir le lien entre l'écriture de la somme à l'aide du symbole 𝚺, et les composantes de l'algorithme (initialisation, sortie de boucle, accumulateur, compteur)
= Fonctions exponentielles
Les fonctions x → a^x (a > 0) comme modèle continu d'évolution relative constante
- définition de la fonction x → a^x pour x positif comme prolongement à des valeurs non entières positives de la suite géométrique (a^n) ; extension à R- en posant a^-x=1/a^x
- sens de variation selon les valeurs de a
- allure de la courbe représentative selon les valeurs de a
- propriétés algébriques : a^(x+y) = a^x×a^y ; a^(nx) = (a^x)^n pour n entier relatif 
- cas particulier de l'exposant pour calculer un taux d'évolution moyen équivalent à n évolutions successives.
Capacités attendues
- Connaître et utiliser le sens de variation des fonctions de la forme x → ka^x, selon le signe de k et les valeurs de a
- Connaître les propriétés algébriques des fonctions exponentielles et les utiliser pour transformer des écritures numériques ou littérales
- Calculer le taux d'évolution moyen équivalent à des évolutions successives
Situations algorithmiques
- Intercaler entre deux points déjà construits un troisième point ayant pour abscisse (respectivement pour ordonnée) la moyenne arithmétique (respectivement géométrique) des abscisses (respectivement des ordonnées) des deux points initiaux.
= Fonction logarithme décimal
- Définition du logarithme décimal de b pour b > 0 comme l'unique solution de l'équation 10^x = b ; notation log
- Sens de variation
- Propriétés algébriques : log(ab) = log(a) + log(b), log(a^n) = nlog(a) et, pour n entier naturel, a et b réels strictement positifs
Capacités attendues
- Utiliser le logarithme décimal pour résoudre une équation du type a^x = b ou x^a^ = b d'inconnue x réelle, une inéquation du type a^x < b ou x^a < b d'inconnue x réelle ou du type a^n < b d'inconnue n entier naturel
- Utiliser les propriétés algébriques de la fonction logarithme décimal pour transformer des expressions numériques ou littérales
= Fonction inverse
- Comportement de la fonction inverse aux bornes de son ensemble de définition.
- Dérivée et sens de variation.
- Courbe représentative ; asymptotes.
Capacités attendues
- Étudier et représenter des fonctions obtenues par combinaisons linéaires de la fonction inverse et de fonctions polynomiales de degré au maximum 3.
# Statistique et probabilités
= Séries statistiques à deux variables quantitatives
- Nuage de points associé à une série statistique à deux variables quantitatives
- Ajustement affine.
Capacités attendues
- Représenter un nuage de points
- Déterminer et utiliser un ajustement affine pour interpoler ou extrapoler des valeurs inconnues
- Représenter un nuage de points en effectuant un changement de variable donné (par exemple u^2, 1/t, 1/√n, log(y), ...) afin de conjecturer une relation de linéarité entre de nouvelles variables
Situations algorithmiques
- Automatiser le calcul de 𝚺(yi ‑ (axi+b))^2.
- Rechercher un couple (a,b) minimisant cette expression parmi un ensemble fini de couples proposés par les élèves ou générés par balayage, tirage aléatoire...
= Probabilités conditionnelles
- Conditionnement par un événement de probabilité non nulle
- Indépendance de deux événements de probabilités non nulles
- Formule des probabilités totales pour une partition de l'univers
Capacités attendues
- Construire un arbre de probabilités associé à une situation aléatoire donnée
- Interpréter les pondérations de chaque branche d'un arbre en termes de probabilités, et notamment de probabilités conditionnelles
- Faire le lien entre la définition des probabilités conditionnelles et la multiplication des probabilités des branches du chemin correspondant
- Utiliser un arbre de probabilités pour calculer des probabilités
- Calculer la probabilité d'un événement connaissant ses probabilités conditionnelles relatives à une partition de l'univers
= Variables aléatoires discrètes finies
- Espérance d'une variable aléatoire discrète
- Loi binomiale B(n,p) ; espérance
- Coefficients binomiaux  ; triangle de Pascal
Capacités attendues
- Calculer l'espérance d'une variable aléatoire discrète dans des cas simples et l'interpréter
- Calculer des coefficients binomiaux à l'aide du triangle de Pascal pour n<=10
- Reconnaître une situation relevant de la loi binomiale et en identifier le couple de paramètres.
Lorsque la variable aléatoire X suit une loi binomiale :
- interpréter l'événement {X = k} sur un arbre de probabilité 
- calculer les probabilités des événements {X = 0}, {X = 1}, {X = n}, {X = n - 1} et de ceux qui s'en déduisent par réunion 
- calculer la probabilité de l'événement {X = k} à l'aide des coefficients binomiaux
Situations algorithmiques
- Générer un triangle de Pascal de taille n donnée.
- Représenter par un diagramme en bâtons la loi de probabilité d'une loi binomiale (n,p). Faire le lien avec l'histogramme des fréquences observées des 1 lors de la simulation de N échantillons de taille n d'une loi de Bernoulli de paramètre p faite en classe de première.
- Calculer l'espérance 𝚺xipi d'une variable aléatoire suivant une loi de probabilité donnée ; cas particulier d'une variable aléatoire suivant la loi binomiale B(n,p)
- Représenter graphiquement l'espérance de lois binomiales B(n,p) à p fixé et n variable, à n fixé et p variable puis faire le lien avec l'expression admise de l'espérance
# Algorithmique et programmation
= Variables
- utiliser un générateur de nombres aléatoires entre 0 et 1 pour simuler une loi de Bernoulli de paramètre p
- utiliser la notion de compteur
- utiliser le principe d'accumulateur pour calculer une somme, un produit
= Fonctions
- identifier les entrées et les sorties d'une fonction
- structurer un programme en ayant recours aux fonctions
= Listes
- générer une liste (en extension, par ajouts successifs, en compréhension) - manipuler des éléments d'une liste (ajouter, supprimer...) et leurs indices
- itérer sur les éléments d'une liste
= Sélection de données
- traiter un fichier contenant des données réelles pour en extraire de l'information et l'analyser - réaliser un tableau croisé de données sur deux critères à partir de données brutes.`,
	'Zone C 2019': `${exampleShared.start2019}
${exampleShared.holiday2019}
`,
	'Mathématiquees 2nd 2019': `${exampleShared.start2019}
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
Approfondissements
- Démontrer que les hauteurs d’un triangle sont concourantes.
- Expression de l’aire d’un triangle : 1/2𝑎𝑏 sin 𝐶.
- Formule d’Al-Kashi.
- Le point de concours des médiatrices est le centre du cercle circonscrit.
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
- Écrire des fonctions renvoyant le résultat numérique d’une expérience aléatoire, d’une répétition d’expériences aléatoires indépendantes.`,
	'Mathématiquees 1spé 2019': `${exampleShared.start}
# Algèbre
= Suites numériques, modèles discrets
Contenus
- Exemples de modes de génération d’une suite : explicite un = ƒ(n), par une relation de récurrence un+1 = ƒ(un), par un algorithme, par des motifs géométriques. Notations : u(n), un, (u(n)), (un).
- Suites arithmétiques : exemples, définition, calcul du terme général. Lien avec l’étude d’évolutions successives à accroissements constants. Lien avec les fonctions affines. Calcul de 1 + 2 + … + n.
- Suites géométriques : exemples, définition, calcul du terme général. Lien avec l’étude d’évolutions successives à taux constant. Lien avec la fonction exponentielle. Calcul de 1 + q + … + q^n.
- Sens de variation d’une suite.
- Sur des exemples, introduction intuitive de la notion de limite, finie ou infinie, d’une suite.
Capacités attendues
- Dans le cadre de l’étude d’une suite, utiliser le registre de la langue naturelle, le registre algébrique, le registre graphique, et passer de l’un à l’autre.
- Proposer, modéliser une situation permettant de générer une suite de nombres. Déterminer une relation explicite ou une relation de récurrence pour une suite définie par un motif géométrique, par une question de dénombrement.
- Calculer des termes d’une suite définie explicitement, par récurrence ou par un algorithme.
- Pour une suite arithmétique ou géométrique, calculer le terme général, la somme de termes consécutifs, déterminer le sens de variation.
- Modéliser un phénomène discret à croissance linéaire par une suite arithmétique, un phénomène discret à croissance exponentielle par une suite géométrique.
- Conjecturer, dans des cas simples, la limite éventuelle d’une suite.
Démonstrations
- Calcul du terme général d’une suite arithmétique, d’une suite géométrique.
- Calcul de 1 + 2 + … + n.
- Calcul de 1 + q + … + q^n.
Exemples d’algorithme
- Calcul de termes d’une suite, de sommes de termes, de seuil.
- Calcul de factorielle.
- Liste des premiers termes d’une suite : suites de Syracuse, suite de Fibonacci.
= Équations, fonctions polynômes du second degré
Contenus
- Fonction polynôme du second degré donnée sous forme factorisée. Racines, signe, expression de la somme et du produit des racines.
- Forme canonique d’une fonction polynôme du second degré. Discriminant. Factorisation éventuelle. Résolution d’une équation du second degré. Signe.
Capacités attendues
- Étudier le signe d’une fonction polynôme du second degré donnée sous forme factorisée.
- Déterminer les fonctions polynômes du second degré s’annulant en deux nombres réels distincts.
- Factoriser une fonction polynôme du second degré, en diversifiant les stratégies : racine évidente, détection des racines par leur somme et leur produit, identité remarquable, application des formules générales.
- Choisir une forme adaptée (développée réduite, canonique, factorisée) d’une fonction polynôme du second degré dans le cadre de la résolution d’un problème (équation, inéquation, optimisation, variations).
Démonstration
- Résolution de l’équation du second degré.
# Analyse
= Dérivation
Contenus
Point de vue local
- Taux de variation. Sécantes à la courbe représentative d’une fonction en un point donné.
- Nombre dérivé d’une fonction en un point, comme limite du taux de variation. Notation ƒ’(a).
- Tangente à la courbe représentative d’une fonction en un point, comme « limite des sécantes ». Pente. Équation : la tangente à la courbe représentative de ƒ au point d’abscisse a est la droite d’équation y = ƒ(a) + ƒ’(a)(x - a).
Point de vue global
- Fonction dérivable sur un intervalle. Fonction dérivée.
- Fonction dérivée des fonctions carré, cube, inverse, racine carrée.
- Opérations sur les fonctions dérivables : somme, produit, inverse, quotient, fonction dérivée de x ↦ g(ax + b)
- Pour n dans Z, fonction dérivée de la fonction x ↦ x^n.
- Fonction valeur absolue : courbe représentative, étude de la dérivabilité en 0.
Capacités attendues
- Calculer un taux de variation, la pente d’une sécante.
- Interpréter le nombre dérivé en contexte : pente d’une tangente, vitesse instantanée, coût marginal…
- Déterminer graphiquement un nombre dérivé par la pente de la tangente. Construire la tangente en un point à une courbe représentative connaissant le nombre dérivé.
- Déterminer l’équation de la tangente en un point à la courbe représentative d’une fonction.
- À partir de la définition, calculer le nombre dérivé en un point ou la fonction dérivée de la fonction carré, de la fonction inverse.
- Dans des cas simples, calculer une fonction dérivée en utilisant les propriétés des opérations sur les fonctions dérivables.
Démonstrations
- Équation de la tangente en un point à une courbe représentative.
- La fonction racine carrée n’est pas dérivable en 0.
- Fonction dérivée de la fonction carrée, de la fonction inverse.
- Fonction dérivée d’un produit.
Exemple d’algorithme
- Écrire la liste des coefficients directeurs des sécantes pour un pas donné.
= Variations et courbes représentatives des fonctions
Contenus
- Lien entre le sens de variation d’une fonction dérivable sur un intervalle et signe de sa fonction dérivée ; caractérisation des fonctions constantes.
- Nombre dérivé en un extremum, tangente à la courbe représentative.
Capacités attendues
- Étudier les variations d’une fonction. Déterminer les extremums.
- Résoudre un problème d’optimisation.
- Exploiter les variations d’une fonction pour établir une inégalité. Étudier la position relative de deux courbes représentatives.
- Étudier, en lien avec la dérivation, une fonction polynôme du second degré : variations, extremum, allure selon le signe du coefficient de x².
Exemple d’algorithme
- Méthode de Newton, en se limitant à des cas favorables.
= Fonction exponentielle
Contenus
- Définition de la fonction exponentielle, comme unique fonction dérivable sur R vérifiant ƒ’ = ƒ et ƒ(0) = 1. L’existence et l’unicité sont admises. Notation exp(x).
- Pour tous réels x et y, exp(x + y) = exp(x) exp(y) et exp(x) exp(-x) = 1. Nombre e. Notation e^x.
- Pour tout réel a, la suite (ena) est une suite géométrique.
- Signe, sens de variation et courbe représentative de la fonction exponentielle.
Capacités attendues
- Transformer une expression en utilisant les propriétés algébriques de la fonction exponentielle.
- Pour une valeur numérique strictement positive de k, représenter graphiquement les fonctions t ↦ e^(-kt) et t ↦ e^(kt).
- Modéliser une situation par une croissance, une décroissance exponentielle (par exemple évolution d’un capital à taux fixe, décroissance radioactive).
Exemple d’algorithme
- Construction de l’exponentielle par la méthode d’Euler. Détermination d’une valeur approchée de e à l’aide de la suite (1+1/n)^n.
= Fonctions trigonométriques
Contenus
- Cercle trigonométrique. Longueur d’arc. Radian.
- Enroulement de la droite sur le cercle trigonométrique. Image d’un nombre réel.
- Cosinus et sinus d’un nombre réel. Lien avec le sinus et le cosinus dans un triangle rectangle. Valeurs remarquables.
- Fonctions cosinus et sinus. Parité, périodicité. Courbes représentatives.
Capacités attendues
- Placer un point sur le cercle trigonométrique.
- Lier la représentation graphique des fonctions cosinus et sinus et le cercle trigonométrique.
- Traduire graphiquement la parité et la périodicité des fonctions trigonométriques.
- Par lecture du cercle trigonométrique, déterminer, pour des valeurs remarquables de x, les cosinus et sinus d’angles associés à x.
Démonstration
- Calcul de sin(π/4), cos(π/3), sin(π/3).
Exemple d’algorithme
- Approximation de π par la méthode d’Archimède
# Géométrie
= Calcul vectoriel et produit scalaire
Contenus
- Produit scalaire à partir de la projection orthogonale et de la formule avec le cosinus. Caractérisation de l’orthogonalité.
- Bilinéarité, symétrie. En base orthonormée, expression du produit scalaire et de la norme, critère d’orthogonalité.
- Développement de ||→u+→v||². Formule d’Al-Kashi.
- Transformation de l’expression →MA→MB.
Capacités attendues
- Utiliser le produit scalaire pour démontrer une orthogonalité, pour calculer un angle, une longueur dans le plan ou dans l’espace.
- En vue de la résolution d’un problème, calculer le produit scalaire de deux vecteurs en choisissant une méthode adaptée (en utilisant la projection orthogonale, à l’aide des coordonnées, à l’aide des normes et d’un angle, à l’aide de normes).
- Utiliser le produit scalaire pour résoudre un problème géométrique.
Démonstrations
- Formule d’Al-Kashi (démonstration avec le produit scalaire).
- Ensemble des points M tels que →MA→MB = 0 (démonstration avec le produit scalaire)
= Géométrie repérée
Dans cette section, le plan est rapporté à un repère orthonormé.
Contenus
- Vecteur normal à une droite. Le vecteur de coordonnées (a,b) est normal à la droite d’équation ax + by + c =0. Le vecteur (-b,a) en est un vecteur directeur.
- Équation de cercle.
- Parabole représentative d’une fonction polynôme du second degré. Axe de symétrie, sommet.
Capacités attendues
- Déterminer une équation cartésienne d’une droite connaissant un point et un vecteur normal.
- Déterminer les coordonnées du projeté orthogonal d’un point sur une droite.
- Déterminer et utiliser l’équation d’un cercle donné par son centre et son rayon.
- Reconnaître une équation de cercle, déterminer centre et rayon.
- Déterminer l’axe de symétrie et le sommet d’une parabole d’équation y = ax² + bx + c.
- Utiliser un repère pour étudier une configuration.
# Probabilités et statistiques
= Probabilités conditionnelles et indépendance
Contenus
- Probabilité conditionnelle d’un événement B sachant un événement A de probabilité non nulle. Notation PA(B). Indépendance de deux événements.
- Arbres pondérés et calcul de probabilités : règle du produit, de la somme.
- Partition de l’univers (systèmes complets d’événements). Formule des probabilités totales.
- Succession de deux épreuves indépendantes. Représentation par un arbre ou un tableau.
Capacités attendues
- Construire un arbre pondéré ou un tableau en lien avec une situation donnée. Passer du registre de la langue naturelle au registre symbolique et inversement.
- Utiliser un arbre pondéré ou un tableau pour calculer une probabilité.
- Calculer des probabilités conditionnelles lorsque les événements sont présentés sous forme de tableau croisé d’effectifs (tirage au sort avec équiprobabilité d’un individu dans une population).
- Dans des cas simples, calculer une probabilité à l’aide de la formule des probabilités totales.
- Distinguer en situation PA(B) et PB(A), par exemple dans des situations de type « faux positifs ».
- Représenter une répétition de deux épreuves indépendantes par un arbre ou un tableau.
Exemple d’algorithme
- Méthode de Monte-Carlo : estimation de l’aire sous la parabole, estimation du nombre π.
= Variables aléatoires réelles
Le programme ne considère que des univers finis et des variables aléatoires réelles.
Contenus
- Variable aléatoire réelle : modélisation du résultat numérique d’une expérience aléatoire ; formalisation comme fonction définie sur l’univers et à valeurs réelles.
- Loi d’une variable aléatoire.
- Espérance, variance, écart type d’une variable aléatoire.
Capacités attendues
- Interpréter en situation et utiliser les notations {X = a}, {X ⩽ a}, P(X = a), P(X ⩽ a). Passer du registre de la langue naturelle au registre symbolique et inversement.
- Modéliser une situation à l’aide d’une variable aléatoire.
- Déterminer la loi de probabilité d’une variable aléatoire.
- Calculer une espérance, une variance, un écart type.
- Utiliser la notion d’espérance dans une résolution de problème (mise pour un jeu équitable…).
Exemples d’algorithmes
- Algorithme renvoyant l’espérance, la variance ou l‘écart type d’une variable aléatoire.
- Fréquence d’apparition des lettres d’un texte donné, en français, en anglais.
Expérimentations
- Simuler une variable aléatoire avec Python.
- Lire, comprendre et écrire une fonction Python renvoyant la moyenne d’un échantillon de taille n d’une variable aléatoire.
- Étudier sur des exemples la distance entre la moyenne d’un échantillon simulé de taille n d’une variable aléatoire et l’espérance de cette variable aléatoire.
- Simuler, avec Python ou un tableur, N échantillons de taille n d’une variable aléatoire, d’espérance μ et d’écart type σ. Si m désigne la moyenne d’un échantillon, calculer la proportion des cas où l’écart entre m et μ est inférieur ou égal à 2σ / n .
# Algorithmique et programmation
= Notion de liste
Capacités attendues
- Générer une liste (en extension, par ajouts successifs ou en compréhension).
- Manipuler des éléments d’une liste (ajouter, supprimer…) et leurs indices.
- Parcourir une liste.
- Itérer sur les éléments d’une liste.`
}

var pSource = examples['Mathématiquees 2nd 2019'];
