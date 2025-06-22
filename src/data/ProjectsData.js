const projects = [
  {
    id: "groovapi",
    title: "GroovAPI",
    headline: "Peut-on gérer une scène comme une API ?",
    subject : "Développement d’une application web de gestion d’évenements musicaux avec une API",
    logo : "logo.png",
    tags: ["React", "PHP Symfony", "Node JS"],

    introduction: [
        {
            text: "En informatique et plus particulièrement en développement web, il est important de savoir partager des informations. Pour cela, nous pouvons utiliser des interfaces de programmation applicative (API)1. Le but ? Permettre à n’importe qui d’accéder à certains services d’une manière simple et contrôlée. Dans l’objectif de comprendre un maximum ce concept, nous avons décidé avec 2 camarades de créer l’application GroovAPI, un gestionnaire d’événements musicaux avec sa propre API.",
            image: "image1.png", // facultatif
            align: "left", // "left" | "right" (optionnel)
        }
    ],
    missions: [
        {
            text: "La réalisation de ce projet a été divisée en 2 parties. Une première application fullstack2 a été créée à l’aide de Symfony, un framework PHP spécialisé dans le backend3. Son principal but est de mettre en place une API accessible par tout le monde, afin de partager des informations cruciales notamment sur les événements. ",
            image: "image1.png",
            align: "right"
        },
        {
            text: "En tant qu’application fullstack, une partie frontend4 est également nécéssaire avec différentes pages présentant les artistes et événements. Une seconde application était nécessaire, mais cette fois-ci, basée sur React, une librairie JavaScript très utile pour du développement frontend (partie visuelle d’une application). Le but était de récupérer les données de la première application pour ensuite les afficher sur plusieurs pages, permettant l’affichage des artistes et des événements ainsi que leurs spécificités dans une interface agréable pour un utilisateur classique. ",
        }
    ],
    explanation: [
        {
            text: "Pour compléter le projet, nous avons d’abord décidé de nous concentrer sur l’application Symfony, un choix judicieux, car la seconde application prendra appui sur celle-ci. Dans un premier temps, nous avons mis en place notre base de données à l’aide de doctrine, un ORM5 natif à Symfony. ",
        },
        {
            text: "Une fois la base de données complètement configurée, nous avons créé les premières pages grâce à un moteur de template6 appelé Twig. Ces pages permettent l’affichage de toutes les informations nécessaires, comme une liste des événements prévus ou une page artiste où l’on retrouve son calendrier de participation. ",
            image: "image2.png",
            align: "left"
        },
        {
            text: "Une fois l’affichage en place, nous avons ajouté un système de gestion des utilisateurs avec des rôles attribués à chacun, offrant des permissions différentes afin de limiter l’accès à certaines pages ou d'ajouter des fonctionnalités personnalisées. Après quoi, nous avons décidé d’ajouter des entrées aux utilisateurs. Cela permet par exemple alors aux utilisateurs classiques de créer, modifier ou supprimer un événement, tandis que les administrateurs ont l’autorisation de contrôler certaines données inaccessibles.",
        },
        {
            text: "Finalement, une fois notre application fonctionnelle et agréable à utiliser, nous nous sommes penchés sur la partie API. Après avoir réfléchi aux données que l’on allait partager, nous avons créé une documentation, une étape nécessaire lors de la création d’un outil comme cela. Différentes données étaient alors renvoyées sous format JSON6 en fonction des entrées utilisateur. La partie fullStack en Symfony était alors terminée, il est temps de se concentrer sur la seconde.",
        },
        {
            text: "Cette fois-ci, l’application a été développée en React avec ViteJs7, un moyen de se concentrer sur l’aspect visuel. En premier lieu, il a fallu récupérer les données de notre premier projet, ça tombe bien une API est accessible par tout le monde. Nous avons alors connecté nos deux applications afin d’extraire les données accessibles par l’API. Une fois les données récupérées, nous les avons traitées pour les intégrer dans des pages conçues pour afficher les informations pertinentes en fonction des entrées utilisateurs.",
        },
        {
            text: "Les deux projets sont ainsi terminés, interconnectés, tout en conservant une indépendance de chauqe application.",
        },
    ],
    conclusion: [
        {
            text: "Ce projet 2 en 1 a été très constructeur pour nous. En effet, nous avons dû mobiliser nos compétences en programmation web, mais surtout nous avons fait preuve de curiosité et rigueur pour chaque nouveau concept introduit. Nous avons respecté les besoins client tout en collaborant sérieusement en équipe nous permettant d’apprécier le travail que nous avons fourni. Personnellement, ce projet m’a offert un approffondissement des mes compétences de programmation aisni qu’une appréciation encore plus grande du développement web.",
        }
    ]
  },

  {
    id: 2,
    title: "Noctowl's dream",
    headline: "L’insomnie peut-elle être vécue, comprise… et jouée ?",
    subject : "Développement d’une application web de gestion d’évenements musicaux avec une API",
    logo : "/projects/project2.png",
    tags: ["Unity", "C#"],

    introduction: [
        {
            text: "GroovAPI est une plateforme dédiée à la gestion d’événements musicaux, conçue pour offrir une expérience utilisateur fluide et moderne.",
            image: "/assets/images/groovapi-intro.png", // facultatif
            align: "left", // "left" | "right" (optionnel)
        },
        {
            text: "Le projet a été réalisé dans un cadre scolaire avec une séparation claire entre le frontend React et le backend Symfony.",
            // pas d’image ici
        }
    ],
    missions: [
        {
            text: "Créer une API REST complète pour gérer les artistes, événements et utilisateurs avec Symfony.",
            image: "/assets/images/groovapi-api.png",
            align: "right"
        },
        {
            text: "Développer une interface publique pour la consultation et une interface privée pour la gestion.",
        }
    ],
    explanation: [
        {
            text: "L’interface React utilise React Router et TailwindCSS pour garantir une expérience utilisateur rapide et responsive.",
        },
        {
            text: "Le backend est documenté avec Swagger UI, et chaque route d’API est sécurisée selon les rôles utilisateurs.",
            image: "/assets/images/groovapi-swagger.png",
            align: "left"
        }
    ],
    conclusion: [
        {
            text: "GroovAPI démontre notre capacité à mener un projet fullstack complet avec séparation des responsabilités et bonnes pratiques d’architecture.",
        }
    ]
  },

  {
    id: 3,
    title: "Projet Paintball",
    headline: "Le paintball peut-il devenir une forme d’art interactif ?",
    subject : "Développement d’une application web de gestion d’évenements musicaux avec une API",
    logo : "/projects/project3.png",
    tags: ["VR", "Unity", "C#"],

    introduction: [
        {
            text: "GroovAPI est une plateforme dédiée à la gestion d’événements musicaux, conçue pour offrir une expérience utilisateur fluide et moderne.",
            image: "/assets/images/groovapi-intro.png", // facultatif
            align: "left", // "left" | "right" (optionnel)
        },
        {
            text: "Le projet a été réalisé dans un cadre scolaire avec une séparation claire entre le frontend React et le backend Symfony.",
            // pas d’image ici
        }
    ],
    missions: [
        {
            text: "Créer une API REST complète pour gérer les artistes, événements et utilisateurs avec Symfony.",
            image: "/assets/images/groovapi-api.png",
            align: "right"
        },
        {
            text: "Développer une interface publique pour la consultation et une interface privée pour la gestion.",
        }
    ],
    explanation: [
        {
            text: "L’interface React utilise React Router et TailwindCSS pour garantir une expérience utilisateur rapide et responsive.",
        },
        {
            text: "Le backend est documenté avec Swagger UI, et chaque route d’API est sécurisée selon les rôles utilisateurs.",
            image: "/assets/images/groovapi-swagger.png",
            align: "left"
        }
    ],
    conclusion: [
        {
            text: "GroovAPI démontre notre capacité à mener un projet fullstack complet avec séparation des responsabilités et bonnes pratiques d’architecture.",
        }
    ]
  },

  {
    id: 4,
    title : "Quadtree",
    headline: "Peut-on vraiment afficher plus vite… juste en pensant mieux la structure ?",
    subject : "Développement d’une application web de gestion d’évenements musicaux avec une API",
    logo : "/projects/project4.png",
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
        }
    ],
    missions: [
        {
            text: "Créer une API REST complète pour gérer les artistes, événements et utilisateurs avec Symfony.",
            image: "/assets/images/groovapi-api.png",
            align: "right"
        },
        {
            text: "Développer une interface publique pour la consultation et une interface privée pour la gestion.",
        }
    ],
    explanation: [
        {
            text: "L’interface React utilise React Router et TailwindCSS pour garantir une expérience utilisateur rapide et responsive.",
        },
        {
            text: "Le backend est documenté avec Swagger UI, et chaque route d’API est sécurisée selon les rôles utilisateurs.",
            image: "/assets/images/groovapi-swagger.png",
            align: "left"
        }
    ],
    conclusion: [
        {
            text: "GroovAPI démontre notre capacité à mener un projet fullstack complet avec séparation des responsabilités et bonnes pratiques d’architecture.",
        }
    ]
  },

  {
    id: 5,
    title : "Human Benchmark",
    headline: "Un robot peut-il battre l’humain à son propre jeu ?",
    subject : "Développement d’une application web de gestion d’évenements musicaux avec une API",
    logo : "/projects/project4.png",
    tags: ["Python"],

    introduction: [
        {
            text: "GroovAPI est une plateforme dédiée à la gestion d’événements musicaux, conçue pour offrir une expérience utilisateur fluide et moderne.",
            image: "/assets/images/groovapi-intro.png", // facultatif
            align: "left", // "left" | "right" (optionnel)
        },
        {
            text: "Le projet a été réalisé dans un cadre scolaire avec une séparation claire entre le frontend React et le backend Symfony.",
            // pas d’image ici
        }
    ],
    missions: [
        {
            text: "Créer une API REST complète pour gérer les artistes, événements et utilisateurs avec Symfony.",
            image: "/assets/images/groovapi-api.png",
            align: "right"
        },
        {
            text: "Développer une interface publique pour la consultation et une interface privée pour la gestion.",
        }
    ],
    explanation: [
        {
            text: "L’interface React utilise React Router et TailwindCSS pour garantir une expérience utilisateur rapide et responsive.",
        },
        {
            text: "Le backend est documenté avec Swagger UI, et chaque route d’API est sécurisée selon les rôles utilisateurs.",
            image: "/assets/images/groovapi-swagger.png",
            align: "left"
        }
    ],
    conclusion: [
        {
            text: "GroovAPI démontre notre capacité à mener un projet fullstack complet avec séparation des responsabilités et bonnes pratiques d’architecture.",
        }
    ]
  }
];

export default projects;