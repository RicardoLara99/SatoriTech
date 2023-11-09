# SatoriTech
# Rick & Morty Location Explorer

Este proyecto es una prueba de trabajo que utiliza tecnologías web estándar, como HTML, CSS y JavaScript, para interactuar con la API de Rick & Morty y mostrar información sobre localizaciones y sus residentes. Además, cambia el color de fondo de la página según el valor del ID de la localización y permite interactuar con los personajes a través de un modal.

## Funcionalidades Principales

- **Consulta de Localización**: Los usuarios pueden ingresar el nombre de una localización en un formulario y enviarlo para obtener información sobre la localización y sus 5 primeros residentes.

- **Visualización de Datos**: Una vez que se realiza la consulta, la aplicación muestra información sobre la localización, incluyendo su ID y nombre. Además, muestra una lista de los 5 primeros residentes de la localización con los siguientes detalles para cada uno:
  - Nombre
  - Estado
  - Especie
  - Nombre de origen
  - Imagen del personaje
  - Enlace a los 3 primeros episodios en los que aparece (si los tiene)

- **Cambio de Color de Fondo**: El color de fondo de la página web cambia automáticamente según el valor del ID de la localización consultada:
  - Si el ID de la localización es menor a 50, el fondo será verde.
  - Si el ID de la localización es mayor a 50 y menor a 80 , el fondo será azul.
  - Si el ID de la localización es mayor a 80, el fondo será rojo.

- **Interacción con Personajes**: Los usuarios pueden interactuar con los personajes de la siguiente manera:
  - Al pasar el cursor sobre la imagen de un personaje, el diseño del cursor cambia para indicar que se puede hacer clic en la imagen.
  - Al hacer clic en la imagen de un personaje, se abre un modal que muestra información detallada sobre ese personaje, incluyendo su nombre, estado, especie, nombre de origen, imagen y enlaces a los 3 primeros episodios en los que aparece (si los tiene).

## Tecnologías Utilizadas

- HTML: Estructura básica de la página web.
- CSS: Estilos para dar formato y diseño a la página.
- JavaScript: Lógica de la aplicación, interacción con la API y manipulación del DOM.
- API de Rick & Morty: Fuente de datos para obtener información sobre localizaciones y personajes.
- Ajax, Axios u otras bibliotecas de solicitud HTTP para realizar peticiones a la API.
- PHP (en una versión del proyecto): Puede ser usado como backend para manejar las solicitudes a la API de Rick & Morty.
- React (en otra versión del proyecto): Una versión alternativa del proyecto desarrollada utilizando React.

## Uso

Para utilizar la aplicación, sigue estos pasos:

1. Clona el repositorio desde GitHub.

```bash
git clone https://github.com/RicardoLara99/SatoriTech.git
```
Puedes consultar el Readme de cada aplicación para evitar cualquier tipo de confusión.

## JS - PHP

### Requisitos

Para ejecutar este proyecto en tu entorno local, necesitarás lo siguiente:

- [XAMPP](https://www.apachefriends.org/index.html): Un paquete que incluye Apache, MySQL, PHP y más, que te permite ejecutar aplicaciones web en tu computadora.

## Instrucciones de Instalación

1. Descarga e instala XAMPP desde [el sitio web oficial](https://www.apachefriends.org/index.html) si aún no lo tienes instalado.

2. Clona la carpeta "JS - PHP" en la carpeta `htdocs` de tu instalación de XAMPP. Puedes encontrar la carpeta `htdocs` en la ubicación donde hayas instalado XAMPP.

3. Inicia los servicios de Apache y MySQL en XAMPP.

4. Abre un navegador web y accede a la siguiente URL para ejecutar la aplicación:
  - Abrir [localhost](http://localhost/js%20-%20php) en tu navegador
  - Si en tu equipo tienes otros servicios que ocupen los mismos puertos que Apache y MySQL tal vez sea necesario que manualmente ingreses los puertos en el localhost.

    Por ejemplo: localhost:8081/js - php/
5. Explora la información de la localización y los residentes. Puedes hacer clic en las imágenes de los personajes para ver más detalles en el modal.

## React + Vite

### # Mi Aplicación React + Vite

Este proyecto es una aplicación web construida con React y Vite, que te permite desarrollar aplicaciones web de forma rápida y eficiente.

## Requisitos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema antes de comenzar:

- Node.js: Node.js es un entorno de ejecución de JavaScript que necesitas para ejecutar la aplicación y gestionar las dependencias.
- npm o Yarn: Puedes elegir entre npm (gestor de paquetes de Node.js) o Yarn como gestor de paquetes. Ambos funcionan bien con Vite.

## Instrucciones de Instalación

Sigue estos pasos para instalar y ejecutar la aplicación:

1. Clona este repositorio en tu máquina local.

2. Navega al directorio de la aplicación.
```bash
cd ReactVite
```

4. Instala las dependencias utilizando npm o Yarn.
```bash
# Si estás utilizando npm
npm install

# Si estás utilizando Yarn
yarn
```

6. Inicia la aplicación.
```bash
# Si estás utilizando npm
npm run dev

# Si estás utilizando Yarn
yarn dev
```

8. Abre tu navegador y accede a la siguiente URL.
[localhost](http://localhost:3000)

La aplicación se ejecutará localmente en tu navegador y podrás comenzar a desarrollar.

## Uso

Puedes editar los archivos en la carpeta `src` para desarrollar tu aplicación React. Vite proporciona una experiencia de desarrollo rápida con recarga en caliente y muchas otras características.

## Construcción para Producción

Para construir la aplicación para producción, ejecuta el siguiente comando.
```bash
# Si estás utilizando npm
npm run build

# Si estás utilizando Yarn
yarn build
```
Esto generará una carpeta `dist` con los archivos optimizados listos para ser desplegados en un servidor web.


