Deployed: https://ceciteser.github.io/Tmdb/

En este proyecto he creado una aplicación que se basa en la gestión y uso de una plataforma de contenido cinematográfico. Conectando con una api de películas y series (TMDB) obtuve toda la información necesaria para nutrir mi aplicación de contenidos. 

Tiene dos tipos de actores: administrador y usuario.

### Actores, funciones y responsabilidades

### Administrador
Iniciar sesión con "role admin".
Acceso a todas las paginas del sitio.
Seleccionar items (películas o series) de la api para agregar a la plataforma (Firebase) de reproducción.
Eliminar items (películas o series) de la plataforma (Firebase).
Eliminar usuarios.

### Usuario
Iniciar sesión con "role user".
Acceso solo a películas, series y detalle.
Los items (películas y series) pueden ser marcadas como vistos o no vistos. 

### Screens

### Signup
Esta pantalla consiste en un formulario que permitirá crear usuarios en la base de datos (birthdate, email, lastName, name, password, role, sessionToken, viewed).
Los usuarios se crean con el role “user” por defecto.
Validación


### Login
Formulario de inicio de sesión que solicita usuario y contraseña.
Validación

### Admin
Esta pantalla lista las películas mejor ranqueadas.

Tiene también un buscador que en caso de contener texto realizará una búsqueda multiple (películas, series, personas, etc) 

Para ambos casos previos, disponemos de una paginación numérica que se ajuste a los resultados.

Los items (películas y series) se presentan con una imagen y los datos más relevantes. Cada una de estas tiene un botón que permita dar de alta la totalidad de sus datos en la base de datos de la aplicación.

Los items que ya existen en la base de datos, contienen un botón que permite eliminarlos.

### Home
Esta pantalla se listan todos los items dados de alta en la base de datos.
Al hacer click sobre un item, se abre la pagina “Detail”.
Los items contienen un botón que permite marcarlos como vistos para el usuario en sesión.

### Películas
Esta pantalla muestra solo las películas dadas de alta en la base de datos.
Al hacer click sobre un item, se abre la pagina “Detail”.
Las películas contienen un botón que permite marcarlas como vistas para el usuario en sesión.


### Series
Esta pantalla muestra solo las series dadas de alta en la base de datos.
Al hacer click sobre un item, se abre la pagina “Detail”.
Las series contienen un botón que permite marcarlas como vistas para el usuario en sesión.

### Detail
En esta pantalla se accede a la información detallada de la película seleccionada: poster, trailers, etc
Debajo se muestra un listado con el resto de los items (películas y series) disponibles. 
