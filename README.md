# <img src="src\assets\doggyLogo.png" alt="drawing" style="width:150px;"/>

### *DoggyF, el couchsurfing para perros* 
<br>

## Contexto del proyecto 🌱
Desarrollar una startup tecnológica y su aplicación Web MVP.
Para ello buscaremos resolver un problema actual mediante una solución Web, prepararemos un Pitch para la presentación a posibles inversores, diseñaremos un prototipo, un RoadMap y desarrollaremos el producto mínimo viable.

## Problema
DoggyF nace debido a la falta de iniciativas altruistas entre doggy-lovers. 

## Características generales:

DoggyF es una comunidad de dueños de perros y paseadores, de uso totalmente gratuito y en la que el intercambio es la base.

En DoggyF los usuarios pueden  publicar anuncios y contactar con otros usuarios para proceder en el intercambio.

La aplicación tiene características de Red Social y de Gestión de contenidos. También tiene herramientas de apoyo a causas sociales.

## Requisitos:
- Debe estar en servidor aunque esté en desarrollo
- Debe estar testeada
- Debe usar Laravel

## Instalaciones
PHP 8
Laravel 8
Vue 2
Vuex

## Instala el proyecto
El proyecto consta de dos repositorios github, uno para Laravel y otro para Vue:

Clone git https://github.com/MuyDiversos/DoggyF.git

Clone git https://github.com/MuyDiversos/Vue-DoggyF.git

Necesitamos también crear una base de datos en phpMyAdmin en local, con las credenciales siguientes: {user : root, password : ""}

Nombre de base de datos: doggyf
 
 ## Install
Vue:
npm install
npm install axios
npm install cli-spinners

## Laravel:
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate:fresh --seed
php artisan storage:link

 
## Características de la app
Desde la Home se puede acceder a los anuncios publicados de perros que necesitan ser cuidados (Dogs) o de personas que cuidan a perros (Sitters). 

Al visualizar un anuncio, el usuario puede tener más información y contactar con la persona que lo publicó, accediendo a su perfil. Es posible también valorar el perfil de otro usuario mediante el sistema de likes.

El usuario que esté registrado y logueado podrá publicar cualquier uno de los dos tipos de anuncios, además de poder editar su perfil, añadiendo más informaciones y fotos de su perro.

El usuario tiene además la opción de visualizar, editar y borrar sus anuncios publicados


## Miembros del equipo de desarrollo 👯
Abdulha Idrees
Amr Hefny
Cris Mouta
Martín Madridejos
Snezhanna Stefanova
Thierno Diallo

## Servidor en producción

## Herramientas y tecnologías utilizadas
HTML5
CSS
Bootstrap
PHP8
MySQL
Visual Studio Code
XAMPP
Laravel
Javascript
Vue
Vuex
Trello
Miro
 
