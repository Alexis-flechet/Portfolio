const projects = [
  {
    id: "groovapi",
    title: "GroovAPI",
    headline: "Peut-on gérer une scène comme une API ?",
    subject:
      "Développement d’une application web de gestion d’évenements musicaux avec une API",
    logo: "logo.png",
    tags: ["React", "PHP Symfony", "Node JS"],

    introduction: [
      {
        text: "En informatique et plus particulièrement en développement web, il est important de savoir partager des informations. Pour cela, nous pouvons utiliser des interfaces de programmation applicative (API). Le but ? Permettre à n’importe qui d’accéder à certains services d’une manière simple et contrôlée. Dans l’objectif de comprendre un maximum ce concept, nous avons décidé avec 2 camarades de créer l’application GroovAPI, un gestionnaire d’événements musicaux avec sa propre API.",
      },
    ],
    missions: [
      {
        text: "La réalisation de ce projet a été divisée en 2 parties. Une première application fullstack a été créée à l’aide de Symfony, un framework PHP spécialisé dans le backend. Son principal but est de mettre en place une API accessible par tout le monde, afin de partager des informations cruciales notamment sur les événements.",
        image: "schema.png",
        align: "right",
      },
      {
        text: "En tant qu’application fullstack, une partie frontend a également été nécessaire avec différentes pages présentant les artistes et événements. Cette fois-ci, l'application est basée sur React, une librairie JavaScript très utile pour du développement frontend (partie visuelle d’une application). Le but était de récupérer les données de la première application pour ensuite les afficher sur plusieurs pages, permettant l’affichage des artistes et des événements ainsi que leurs spécificités dans une interface agréable pour un utilisateur classique.",
      },
    ],
    explanation: [
      {
        text: "Pour compléter le projet, nous avons d’abord décidé de nous concentrer sur l’application Symfony, un choix judicieux, car la seconde application prendra appui sur celle-ci. Dans un premier temps, nous avons mis en place notre base de données à l’aide de doctrine, un ORM natif à Symfony.",
      },
      {
        text: "Une fois la base de données complètement configurée, nous avons créé les premières pages grâce à un moteur de template appelé Twig. Ces pages permettent l’affichage de toutes les informations nécessaires, comme une liste des événements prévus ou une page artiste où l’on retrouve son calendrier de participation.",
      },
      {
        text: "Une fois l’affichage en place, nous avons ajouté un système de gestion des utilisateurs avec des rôles attribués à chacun, offrant des permissions différentes afin de limiter l’accès à certaines pages ou d'ajouter des fonctionnalités personnalisées. Après quoi, nous avons décidé d’ajouter des entrées aux utilisateurs. Cela permet par exemple alors aux utilisateurs classiques de créer, modifier ou supprimer un événement, tandis que les administrateurs ont l’autorisation de contrôler certaines données inaccessibles.",
      },
      {
        text: "Finalement, une fois notre application fonctionnelle et agréable à utiliser, nous nous sommes penchés sur la partie API. Après avoir réfléchi aux données que l’on allait partager, nous avons créé une documentation, une étape nécessaire lors de la création d’un outil comme cela. Différentes données étaient alors renvoyées sous format JSON en fonction des entrées utilisateur. La partie fullStack en Symfony était alors terminée, il est temps de se concentrer sur la seconde.",
      },
      {
        text: "Cette fois-ci, l’application a été développée en React avec ViteJs, un moyen de se concentrer sur l’aspect visuel. En premier lieu, il a fallu récupérer les données de notre premier projet, ça tombe bien une API est accessible par tout le monde. Nous avons alors connecté nos deux applications afin d’extraire les données accessibles par l’API. Une fois les données récupérées, nous les avons traitées pour les intégrer dans des pages conçues pour afficher les informations pertinentes en fonction des entrées utilisateurs. Les deux projets sont alors terminés.",
      },
    ],
    conclusion: [
      {
        text: "Ce projet 2 en 1 a été très constructeur pour nous. En effet, nous avons dû mobiliser nos compétences en programmation web, mais surtout nous avons fait preuve de curiosité et rigueur pour chaque nouveau concept introduit. Nous avons respecté les besoins client tout en collaborant sérieusement en équipe nous permettant d’apprécier le travail que nous avons fourni. Personnellement, ce projet m’a offert un approfondissement de mes compétences de programmation ainsi qu’une appréciation encore plus grande du développement web.",
      },
    ],
  },

  {
    id: "noctowlsdream",
    title: "Noctowl's dream",
    headline: "L’insomnie peut-elle être vécue, comprise… et jouée ?",
    subject:
      "Développement d’un jeu vidéo de sensibiltation au sommeil chronique",
    logo: "logo.png",
    tags: ["Unity", "C#"],

    introduction: [
      {
        text: "Au cours de ma seconde année de BUT, j’ai participé à un projet annuel dont l’objectif était de concevoir un jeu vidéo mettant en lumière les handicaps et maladies chroniques, afin d’informer et sensibiliser le public. C’est alors, avec 4 autres camarades, nous avons décidé d’aborder le thème de l’insomnie chronique. Afin de mettre en évidence ce sujet, nous avons décidé de créer un rogue-like ou chaque partie dans le jeu représente une nouvelle tentative de s’endormir dans le monde réel.",
      },
    ],
    missions: [
      {
        text: "Ce projet étant un jeu vidéo, nous avons utilisé le moteur de jeu Unity. Il a pour avantage d’être gratuit, simple d’utilisation et chaque membre de l’équipe le connaissant bien, notamment grâce aux différents cours de notre formation. Nous avons alors programmé l’entière du jeu en C# tout en s’appuyant sur les différentes fonctionnalités proposées par l’interface du moteur. Afin de s’organiser le mieux possible, l’équipe s’est répartie en plusieurs groupes afin de séparer les taches et d'avoir pour chaque personne un rôle précis. De mon côté, j’étais développeur C# et développeur UI. C’est-à-dire que je devais m’occuper d’une partie de l’interface des menus du jeu, mais également m’occuper de certaines fonctionnalités, particulièrement la génération de terrain de manière procédurale.",
      },
    ],
    explanation: [
      {
        text: "Dans un premier temps, il a fallu faire beaucoup de recherche en équipe. En effet, nous étions d’accord sur le thème principal du jeu, mais il fallait avoir une première ligne directrice. Pour cela, nous avons organisé de nombreuses réunions, où entre lesquelles chacun faisait des recherches de son côté pour apporter leurs idées. Finalement, nous sommes arrivés à avoir une réelle description du jeu. Tout commence par le contexte, où nous sommes Owlie, un petit garçon sous forme de chouette qui souffre malheureusement d’insomnie chronique. Tous les soirs, il se bat pour réussir à s’endormir, pour cela, il entre dans un nouveau monde au moment de fermer les yeux. Il atterrit alors dans une grande salle dans les airs entourée par ds nuages, une ambiance similaire à un donjon est présente. Arrivent ensuite de nombreux monstres représentant ses peurs qu’il doit battre pour réussir à s'endormir. Au cours de son aventure, il va obtenir des pièces qu’il pourra par la suite échanger avec un marchand pour obtenir des sorts ou simplement devenir plus fort. Chaque mort représente en réalité un réveil, et même s'il ne garde rien de physique dans chaque monde, il devient plus fort grâce à sa connaissance de l'environnement.",
      },
      {
        text: "Le contexte est posé, les rôles sont fixés, il était alors temps de commencer le développement. J’ai alors débuté par le système d’interaction avec le marchand. Pour cela rein de plus simple, une fois que le joueur entre dans la zone d’interaction avec le marchand, il peut lui parler pour ouvrir le d'échange. Ce menu constituait ma mission principale en tant que développeur d’interface. J’ai repris des éléments d’affichage libres de droits qu’un camarade avait trouvé et j’ai alors développé le menu grâce au système qui était nouveau à l’époque, appelé Unity UI toolkit. Cet outil offre une possibilité de recréer des interfaces plus simplement en utilisant une structure similaire à l’HTML, mais tout en gardant un côté visuel interactif. Grâce à cela, j’ai pu mettre en place l’affichage du menu, où l’on retrouve d’un côté les améliorations du personnage et d’un autre côté, un choix en 3 sorts sélectionnés aléatoirement. Une fois l’interface visuelle validée, il fallait relier les actions à leurs fonctionnalités, j’ai alors pu utiliser les fonctionnalités développées par mes camarades pour qu’elles soient utilisables depuis le marchand. Le marchand était alors fini, place au système de génération de terrain.",
        image: "shop.png",
        align: "left",
      },
      {
        text: "Nous avons décidé lors de nos réunions d’avoir un terrain, sur lequel le personnage évolue, généré procéduralement. Nous avions pensé que faire ainsi permettait d’éviter toute redondance pour le joueur. J’ai alors pu développer cette fonctionnalité grâce aux textures créées par un autre camarade. En effet, il avait créé une texture d’herbe et une autre texture de gravier qui toutes deux pouvaient être répétée sans qu’il n'y ait de coupure dans la texture. En plus de cela, des transitions entre le gravier et l’herbe avaient été créées permettant également de ne pas générer des coupures brut qui pourrait donner une impression de quadrillage sur le sol. Grâce à ces éléments, je pouvais commencer la programmation. Dans un premier temps, plutôt que de placer les textures aléatoirement, il fallait créer une grille pouvant accueillir les différents éléments. Pour cela en fonction de différents paramètres comme la longueur et la largeur du terrain, une zone globale était délimitée. Ensuite, afin d’obtenir un résultat naturel, j’ai choisi d’avoir un sol en herbe sur lequel on trouve des régions de gravier. C’est alors qu’aléatoirement des textures de graviers sont placées sur le terrain. Le nombre de ces textures est défini préalablement et il permet de choisir le nombre de taches que l’on souhaite. Ensuite en fonction d’un autre paramètre, la taille, nous grandissons artificiellement les zones de gravier dans des directions aléatoires. Cela permet de créer des zones de tailles différentes et surtout avec des aspects différents. Finalement, un dernier calcul est effectué sur chaque cellule de la grille, les textures de transitions. Pour chaque élément, on regarde s'il s’agit d’une herbe et si c’est le cas, on regarde s'il a, parmi ses voisins du gravier. Si c’est le cas, la texture choisie est alors une de transition. Finalement, pour éviter à notre personnage de tomber, des barrières modélisées une nouvelle fois par un camarade, ont été automatiquement rajoutées aux abords du terrain ajoutant ainsi un visuel plus complet, mais également finalisant mon travail sur ce projet.",
        image: "terrain.png",
        align: "right",
      },
    ],
    conclusion: [
      {
        text: "Ce projet nous a fortement permis de développer nos compétences de programmation et notre connaissance d’Unity. Nous avons beaucoup apprécié travailler avec des méthodes d’organisation qui nous étaient nouvelles, mais surtout nous avons appris à travailler à des moments différents sans qu’aucun de nous ne se sente en retard ou perdu à propos de l'avancement du projet. Personnellement, j’ai beaucoup apprécié ce projet, j’ai beaucoup appris de la programmation procédurale et surtout, j’ai pu découvrir de nouveaux outils qui me serviront énormément dans le futur.",
      },
    ],
  },

  {
    id: "projetpaintball",
    title: "Projet Paintball",
    headline: "Le paintball peut-il devenir une forme d’art interactif ?",
    subject:
      "Développement d’un jeu de simulation de paintball en réalité virtuelle",
    logo: "/projects/project3.png",
    tags: ["VR", "Unity", "C#"],

    introduction: [
      {
        text: "Parmi les technologies les plus révolutionnaires des 20 dernières années, on retrouve la VR ou réalité virtuelle. En effet, il s’agit de recréer des environnements immersifs à travers différents capteurs. Le but est alors de tromper l’utilisateur en reproduisant artificiellement ses différents sens afin qu’il ait une impression de se retrouver physiquement présent dans un nouveau monde. Afin de recréer ces environnements interactifs, on peut notamment utiliser le moteur de jeu Unity. Le logiciel comprend une partie dédiée à la réalité virtuelle permettant notamment de gérer les différentes actions utilisateur. C’est alors en utilisant ce moteur que nous avons mis en place avec 6 autres camarades, un jeu pouvant exploiter au maximum la technologie et créé une expérience immersive. Le but final du projet était alors de créer un simulateur d paintball où l’utilisateur peur tirer des billes de peintures afin de remplir des statues qui lui sont présentées.",
        image: "/assets/images/groovapi-intro.png", // facultatif
        align: "left", // "left" | "right" (optionnel)
      },
    ],
    missions: [
      {
        text: "La réalisation de ce projet s’est alors exclusivement basée sur le moteur de jeu Unity avec la template VR. Mon rôle dans l’équipe était de créer le système entier de peinture. Pour cela, j’ai utilisé les Shaders, fonctionnalité implémentée de base sur Unity. L’objectif principal était de permettre un changement de couleur localisé sur la texture d’un objet, en suivant un motif prédéfini, afin d’obtenir un effet de peinture éclaboussée, similairement au jeu Splatoon de Nintendo.",
        image: "/assets/images/groovapi-api.png",
        align: "right",
      },
    ],
    explanation: [
      {
        text: "Tout commence alors, comme chaque projet par des recherches. Il fallait définir dans un premier temps, quelle technologie utiliser en fonction de l’effet souhaité. À ce moment-là, 3 manières différentes de peindre sont possibles, mais après un approfondissement de chacune, le choix a été fait de peindre à l’aide des UV Maps. Pour expliquer ce concept, il faut se concentrer sur la modélisation 3D. Chaque objet possède un modèle, correspondant aux sommets et arrêtes permettant de définir la structure globale. On ajoute par la suite, une texture à l’objet, permettant cette fois-ci de définir la partie visuelle. Cette texture est mise en place à l’aide d’une image qui à l’aide d’un procédé de cartographie UV peut se projeter sur l’objet final. Le but dans Unity sera alors d’interférer dans la mise en place de la cartographie pour rajouter des éléments permettent de simuler la peinture.",
      },
      {
        text: "Pour cela, on utilise les shaders d'Unity. Sauf qu’un problème est levé, les coordonnées dans le monde 3D d'Unity sont différentes des coordonnées 2D de la texture. La première étape de programmation consiste alors à retrouver un point sur la texture en fonction d’un point sur le modèle 3D. Finalement grâce à certaines fonctionnalités, déjà inclues dans les shaders, il est possible de connaître où peut atterrir une future balle de paintball sur la texture. Ensuite, afin de peindre la statue sans modifier la texture originelle. Pour cela, on utilise une Render Texture en plus de la texture originelle. Son but est de contenir toute la peinture pour ensuite recourir la statue avec cette peinture. On a alors la texture de base puis on ajoute toute la peinture qui recouvre. Maintenant que la statue possède un moyen d’afficher la peinture, place au système d’ajout de la peinture.",
        image: "/assets/images/groovapi-swagger.png",
        align: "left",
      },
      {
        text: "Il fallait alors mettre en place la peinture. Pour cela, une fois les coordonnées du point d’impact entre la bille et la statue enregistrées sur la texture originelle, on peut faire un cercle de couleur sur la render texture. Cela fonctionne bien, mais on obtient un autre problème, la peinture est mal répartie sur la statue. En effet, l’UV map des objets ne correspond pas à la vue de la statue, on peut par exemple avoir la partie de la texture correspondant au bras à côté de la texture du pied. Faire un simple cercle ne correspond alors pas au résultat attendu. Pour y remédier, il faut vérifier les pixels alentours afin de connaître leurs positions dans le monde 3D. Afin d’arriver à cela, il faut déterminer les zones de textures. Une fois chaque zone définie, on compare la position du point de contact avec celle de chaque zone, ensuite pour les zones potentiellement assez proches, on peut peindre. Afin de finalement obtenir le résultat le plus satisfaisant, d’autres calculs de positions sont pris en compte pour reproduire le plus fidèlement le motif de la texture. Afin de terminer le système de peinture, un dernier programme a été mis en place afin d’aléatoirement choisir la couleur, la taille et la définition de chaque bille. Ces derniers paramètre finalement définis permettent d’augmenter ce résultat de “chaos” souhaité et surtout rendre la peinture plus réelle.",
      },
      {
        text: "Finalement, dans le contexte du projet, un système de pourcentage de recouvrement de peinture était nécessaire. Un dernier script a donc été mis en place pour calculer la complétion de la statue. Pour cela dans un premier temps, la texture est analysée pour obtenir le nombre de pixels utilisé dans l’affichage de la texture originelle. Ensuite, à chaque ajout de peinture, on regarde combien de pixels ont été peint sur la render texture. Finalement, un seuil de 75 % a été fixé, et si la Statue est peinte à plus de 75 %, la statue est validée.",
      },
    ],
    conclusion: [
      {
        text: "Ce projet a été à la fois un défi et un accomplissement pour l’équipe. En effet, nous avons tous appris à manipuler une nouvelle technologie qui comprend encore plus de fonctionnalité qu’un simple jeu. De plus la répartition du projet à travers les différents rôles de chaque personne, nous a permis de travailler dans un cadre très similaire à un cadre professionnel.",
      },
      {
        text: "Personnellement, j’ai été très content d’avoir travaillé sur ce projet, j’ai pu développer encore plus mes compétences de développement en C#. J'ai également développé une connaissance plus avancée des shaders, du rôle du GPU, ou encore de la VR dans Unity. J’ai pu apprendre beaucoup de notions qui sont très utilisées dans le monde du développement.",
      },
    ],
  },
  /*
  {
    id: "quadtree",
    title: "Quadtree",
    headline:
      "Peut-on vraiment afficher plus vite… juste en pensant mieux la structure ?",
    subject:
      "Développement d’une application web de gestion d’évenements musicaux avec une API",
    logo: "/projects/project4.png",
    tags: ["C++", "Optimisation"],

    introduction: [
      {
        text: "GroovAPI est une plateforme dédiée à la gestion d’événements musicaux, conçue pour offrir une expérience utilisateur fluide et moderne.",
        image: "/assets/images/groovapi-intro.png", // facultatif
        align: "left", // "left" | "right" (optionnel)
      },
      {
        text: "Le projet a été réalisé dans un cadre scolaire avec une séparation claire entre le frontend React et le backend Symfony.",
        // pas d’image ici
      },
    ],
    missions: [
      {
        text: "Créer une API REST complète pour gérer les artistes, événements et utilisateurs avec Symfony.",
        image: "/assets/images/groovapi-api.png",
        align: "right",
      },
      {
        text: "Développer une interface publique pour la consultation et une interface privée pour la gestion.",
      },
    ],
    explanation: [
      {
        text: "L’interface React utilise React Router et TailwindCSS pour garantir une expérience utilisateur rapide et responsive.",
      },
      {
        text: "Le backend est documenté avec Swagger UI, et chaque route d’API est sécurisée selon les rôles utilisateurs.",
        image: "/assets/images/groovapi-swagger.png",
        align: "left",
      },
    ],
    conclusion: [
      {
        text: "GroovAPI démontre notre capacité à mener un projet fullstack complet avec séparation des responsabilités et bonnes pratiques d’architecture.",
      },
    ],
  },
*/
  {
    id: "humanbenchmark",
    title: "Human Benchmark",
    headline: "Un robot peut-il battre l’humain à son propre jeu ?",
    subject:
      "Automatisation de tests de perfomances cognitives du site HumanBenchmark",
    logo: "logo.png",
    tags: ["Python"],

    introduction: [
      {
        text: "Depuis longtemps, il est dit que les ordinateurs ont dépassé les humains. Et même si certaines personnes en ont développé une peur, cette supériorité reste théorique. Cependant, j’ai trouvé intéressant de montrer à quel point un ordinateur peut être efficace quand il s’agit de faire une action précise. Pour cela, le meilleur choix a été de faire des tests destinés à calculer les capacités d’un humain grâce au site HumanBenchmark.com. Ce site offre plusieurs tests censés pouvoir évaluer différentes capacités d’un humain pour ensuite obtenir un résultat, comparable au reste du monde.",
      },
    ],
    missions: [
      {
        text: "Ce projet va se concentrer sur les différents tests possibles. Principalement, j’ai pu créer 4 programmes pour 4 tests différents. On retrouve un test de réaction où il faut cliquer le plus rapidement possible après qu’une couleur soit affichée sur l’écran. Ensuite une séquence de touche similaire au jeu Simon où l’on doit mémoriser une séquence d’appuis pour ensuite la réécrire. Après quoi un autre test de mémoire, mais cette fois-ci avec un nombre qui devient de plus en plus compliqué. Finalement un test où l’on doit retenir des mots et dire si chaque mot est nouveau ou s’il est déjà apparu. Pour effectuer chacun des test, j’ai utilisé le langage Python à l’aide de différentes bibliothèques qui m’ont aidée pour visualiser les éléments présents sur mon écran, mais également simuler des pressions de touches par un ordinateur.",
        image: "tests.png",
        align: "right",
      },
    ],
    explanation: [
      {
        text: "Tout comme avec le test de réaction. Ce test est plutôt simple, quand on commence une couleur rouge est présente sur tous l’écran puis elle passe au vert et on doit cliquer le plus vite possible pour estimer le temps de réaction. Au niveau de la programmation, on retrouve également une mécanique plutôt simple. Dans un premier temps, il faut analyser la couleur d’un pixel présent sur l’écran donc ici un pixel qui changera de couleur. Par la suite, il suffit de faire une vérification de la couleur de ce pixel en continu jusqu’à qu’il voit la couleur verte. SI c’est le cas alors un click est simulé. Ce premier programme, c’est révélé être très efficace, en effet, mes résultats étaient aux alentours de 190 ms de temps de réaction. Cependant, le programme a obtenu des résultats proches de 40 ms, la différence est alors énorme.",
        image: "reaction.png",
        align: "left",
      },
      {
        text: "Ensuite place au test similaire au Simon. Dans ce jeu, 9 cases possibles peuvent s’allumer, chaque niveau ajoute une nouvelle case aléatoire jusqu’à une erreur. Afin de réaliser ce programme, j’ai déjà noté les coordonnées de 9 pixels coresspondant chacun à une case différente. Ensuite, on analyse à nouveau les changements de couleurs notés pour ensuite les stocker dans une liste. Après, afin de savoir quand la séquence est terminée et que l’on peut commencer à cliquer, il suffit d’attendre 3 secondes qu’aucune action n’ait eu lieu. Si c’est le cas alors un click est simulé dans l’ordre préenregistré pour ensuite recommencer à l’infini. Au niveau des résultats, j’ai personnellement eu une moyenne de 11 alors que ce programme n’avait aucune limite, il pouvait dépasser n’importe quel score sans aucun problème.",
      },
      {
        text: "Place au 3e test, celui de mémoire d’un nombre. Ce test est simple, on donne un nombre au joueur puis chaque niveau ajoute de la difficulté en créant un nouveau nombre encore plus grand. Afin de déterminer le nombre sur l’écran, nous pouvons utiliser une autre bibliothèque python. Cette bibliothèque permet de retranscrire le texte d’une image. Il suffit alors de faire une capture d’écran du nombre, obtenir les données puis les écrire dans la zone de texte. Une fois cette étape effectuée, il suffit d’appuyer sur la touche Entrée puis de recommencer. En termes de résultats, on s’approche de celui obtenu précédemment, c'est-à-dire, même si l’analyse de texte peut parfois faire des erreurs, la plupart du temps elle fonctionne et le score est proche de l'infini tandis que personnellement, j’ai obtenu une moyenne de seulement 9.",
      },
      {
        text: "Finalement, pour le 4e et dernier test, le test des mots. Ce test donne un mot à un joueur et à chaque tour, il doit dire si le mot est déjà apparu ou non. Ce programme sera très simple à mettre en place. On réutilise le système permettant de récupérer le texte que l’on a développé précédemment. On regarde si le mot est présent dans la liste. Si c’est le cas alors le robot appuie sur le bouton indiquant qu’il est déjà apparu. Sinon, le programme clique le bouton indiquant qu’il est nouveau, puis il stocke ce nouveau mot dans la liste. Pour les résultats, on obtient encore une fois une dominance du programme. Alors que j’ai réussi à passer seulement 30 mots avec les 3 vies disponibles, le script lui obtient un score quasi-infini où la seule erreur peut venir du programme de reconnaissance des mots.",
        image: "memory.png",
        align: "right",
      },
    ],
    conclusion: [
      {
        text: "Ce projet m’a demandé de me pencher un maximum sur le langage python. On se rend compte qu'en plus de la simplicité de programmer, énormément de bibliothèques variées sont disponibles, apportant ainsi une réelle diversité de tous les projets possibles. Compléter alors des test conçus pour les humains m’a permis de réfléchir d’une nouvelle manière et j’ai apprécié apprendre les différentes technologies tout le long du projet.",
      },
    ],
  },
];

export default projects;
