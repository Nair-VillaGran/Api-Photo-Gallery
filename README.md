# Api-Photo-Gallery

This project is a simple web server developed in Typescript using Nodejs and Mongodb, with the purpose of storing images for client applications such as web applications or mobile applications.

# Installation

```
git clone https://github.com/Nair-VillaGran/Api-Photo-Gallery
cd api-photo-gallery
npm install
npm start
```


# Comands

`npm start` for a production environment

`npm run dev` for a development environment

`npm run clean` to delete build folder

`npm run build` to prepare the project for a production environment


# Requirements

_Npm and NodeJS must be installed._

[NodeJS](https://nodejs.org/)

[npm](https://www.npmjs.com/)


# Routes and requests

List of routes to navigate in the Api and perform GET, POST, PUT, DELETE requests.

* Show Accessible Photos : `GET /api/photos/`
* Create Photo : `POST /api/photos/`
* Show An Photo : `GET /api/photos/:id/`
* Update An Photo : `PUT /api/photos/:id/`
* Delete An Photo : `DELETE /api/photos/:id/`
