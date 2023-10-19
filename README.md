<h1 align="center"> Sobre Angular </h1>
<div style="display: flex; align-items: center;">
<img src="./minicore-angular-mysql/Frontend/src/assets/readme-images/Angular.png" />
<p align="justify"> Angular es un poderoso framework de desarrollo web front-end creado por Google. Con una arquitectura basada en componentes, Angular facilita la creación de aplicaciones web robustas y dinámicas. Su amplia comunidad y abundante documentación lo convierten en una elección popular para desarrolladores. Angular ofrece herramientas avanzadas para la gestión del estado, enrutamiento y comunicación con API, lo que lo convierte en una opción ideal para proyectos complejos. Además, su capacidad de renderización del lado del servidor (Server-Side Rendering) mejora la velocidad y la optimización de SEO de las aplicaciones web.</p>
</div>

<h1 align="center"> Sobre MySQL </h1>
<div style="display: flex; align-items: center;">
<p align="justify"></p>
</div>

<h1 align="center"> Diseño de Ingenieria </h1>
<div>
<p align="justify">
<b>Diagrama de uso:</b><br/><br/>
<img src="" /><br/>
El diagrama de uso de la aplicación "Freaks" inicia con la apertura de la aplicación web. Al hacerlo, se presenta la pestaña de login, donde el usuario debe proporcionar sus credenciales, que incluyen un nombre de usuario y una contraseña. En caso de no tener una cuenta, se ofrece la opción de registrarse, solicitando al usuario que ingrese un nombre, nombre de usuario y contraseña.<br/><br/>

Una vez que el usuario inicia sesión con éxito, se habilita el acceso completo al conjunto de operaciones CRUD en la aplicación. Sin embargo, si se ingresan credenciales incorrectas, se muestra una pantalla de error, indicando que la autenticación no fue exitosa. Este diagrama describe el flujo principal de autenticación y acceso en la aplicación "Freaks".<br/><br/>

<b>Contexto del Login:</b><br/><br/>
El login constituye la única vía de acceso a la plataforma Freaks. Para ingresar, los usuarios deben registrarse o iniciar sesión, esto datos de ingreso se almacenan en la base de datos. Esta funcionalidad habilita a los usuarios a realizar operaciones de Crear, Leer, Actualizar y Eliminar (CRUD) en la totalidad de la aplicación. Adicionalmente, no se puede ingresar al CRUD por la URL de la pagina porque esta valido con el ingreso por login.<br/><br/>

<b>Arquitectura de la aplicación:</b><br/><br/>
<img src="" />
Se centra en la carpeta "auth" que contiene varios componentes. Entre estos componentes, destacan las carpetas "login" y "register", cada una con su propia estructura de "view" (vista) y "presenter" (presentador) para gestionar las interacciones y lógica de usuario.
</p>
</div>

# Pasos para ejecución:
1. Clonar el proyecto en Github CLI con el comando: ```gh repo clone fabiliria280802/repo-heroes```
2. Se abren dos terminales de vs ```ctrl + shift + ñ``` una para correr el backend y otra para correr el frontend.
3. Levantar backend se usa el comando: ```npm run backend```
4. Luego para levantar la aplicación con el frontend se usa el comando: ```npm start```

Nota 1: si no tienes instalado npm ejecutar el comando ```npm install``` antes del paso 3 y 4.

Nota 2: el siguiente link es un video ilustrativo de la aplicación funcionando: https://clipchamp.com/watch/rTZkKGIb98O

Nota 3: el siguiente link es un video ilustrativo de la autenticación funcionando: https://clipchamp.com/watch/b6wW5rYEqXS

<h1 align="left"> Referencias Bibliográficas: </h1>

- Blanco, N. (2023, 25 mayo). ¿Qué patrón usa Angular? MVC o MVVM. OpenWebinars.net. https://openwebinars.net/blog/que-patron-usa-angular-mvc-o-mvvm/
- David. (2017). Explicación del patrón MVC en AngularJS. Guidacode. https://guidacode.com/2017/angularjs/explicacion-del-patron-mvc-en-angularjs/
- MA-NO Web Design and Development. (2020, 4 noviembre). El concepto de ModeloVistaControlador MVC explicado. https://www.ma-no.org/es/programacion/el-concepto-de-modelo-vista-controlador-mvc-explicado
- Mendoza, J. (2020, 20 octubre). ¿Qué es el patrón MVC? | Desarrollo de software. Desarrollo de software. https://desarrollodesoftware.co/que-es-el-patron-mvc.html
