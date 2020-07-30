# BootCampRS-Project 📌

En este repositorio se puede observar un proyecto tanto de Front como de Back con las tecnologías Angular y MongoDb respectivamente, ha sido realizado como un proyecto final para el Bootcamp impartido por Geekhubs para Ribera Salud.

Consta de una aplicación pensada para el sector sanitario con la que se pueden gestionar una serie de usuarios, ya sean pacientes o profesionales del sector. Incluye las operaciones básicas CRUD más el añadido de poder borrar los médicos.

## Tecnologías ⚙️
El proyecto ha sido realizado con Angular CLI version 10.0.1 para el Front, MongoDB y Express para el Back.

## Pre-requisitos 📋
Para la correcta ejecución del proyecto en local es necesario tener instalado Nest.js, el cual se puede obtener desde su página oficial.

Se necesita instalar también MongoDB:

Yo seguí la instalación de este repo de GitHub https://gist.github.com/AlejoJamC/b8635af765ac7495c4931403b97a0d78

El último requisito para poder ejecutar el proyecto es instalar los paquetes necesarios en el repositorio descargado o clonado. Para ello, desde la carpeta donde se encuentra, se ejecuta:

```
npm install
```

## Ejecución ⌨️
Para iniciar la base de datos con MongoDB se debe ejecutar el siguiente comando una vez dentro de la carpeta del proyecto:
```
mongod
```
Para ejecutar la parte del Front del proyecto se debe entrar en la carpeta de Front y se utiliza el comando de angular:

```
npm start
```
_En mi caso, utilizo este comando ya que en el package.json he modificado el script añadiendo lo siguiente: "start": "ng serve -o"_

Y por último, ejecuto la parte del Back entrando en dicha carpeta e introduciendo el comando:

```
npm run start:dev
```

_Que en mi caso, utilizo este comando ya que en el package.json he modificado el script añadiendo lo siguiente: "start": "nodemon src/index.js"_


Una vez realizado lo anterior ya está listo para ser consultado el proyecto en la dirección http://localhost:4200/, el cual se abrirá de forma automática gracias al "-o" del comando en Front.
