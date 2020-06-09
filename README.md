This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Description
Réaliser une application de promotion de repository. Le site récupère l’ensemble des infos du repo via l’API de Github.

### Stacks du projet

##### Front:
* Reactjs 
* Redux-thunk
* styled-components
##### Back: 
* Strapi (https://strapi.io/documentation/3.0.0-beta.x/getting-started/introduction.html)
* sqlite3 (en développement)
* PostgreSQL (en production)
##### API:
* Github (https://developer.github.com/v3)


### Tâches des membres du groupe

* Salim : 
  * Page d'accueil
  * Page de détail d'un projet

* Moustanir :
  * Mise en place du projet avec l'architecture "atomic design"
  * Création des components "atoms" réutilisables
  * Page de recherche de projets et/ou posts
  * Page de création d'un projet avec l'utilisation de l'API de github
  * Page "Mes projets" qui regroupe les projets crées par l'utilisateur
  
* Johan :
  * Connexion à Github avec Firebase
  * Mise en place du theme light/dark et du switch entre 2 theme
  * Mise en place du store Redux
  * Mise en place de i18n
  * Page de création d'un post
