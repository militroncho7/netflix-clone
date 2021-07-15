## Inicialización del proyecto
` npx create-react-app netflix --template redux`

- Proceso de Limpieza e instalación de dependencias:material-ui/core, axios, firebase, react-router-dom, uuid & styled-components

- App.js - Layout inicial:
· Creación de rutas
· Renderizamos Login o el resto del App condicionado a la existencia de un usuario

- Estilos: Utilizamos useStyles para crear una infraesctructura que nos permita asignar estilos a cada uno de los componentes.

- Crear las carpetas de componentes: Components & Pages: infraestructura básica de los componentes que representan una página: Home, Login, Paypal, Profile y SingUp

- Estilos en los componentes de Pages: Patrón para añadir la infraesctructura de todos los componentes página: Banner, Header, Plans y Rows.

## Componentes

### Header
- Importamos el logo
- Añadimos al AppBar clase condicional transparente. Se activa si la variable show es true. Esta variable se enciverte en true cuando hacemos un scroll vertical de 50px.
- Para escuchar este scroll vertical, añadimos un eventListener al objeto window.
- Este eventListener está activo una sola vez cada vez que refrescamos la página -> (useEffect con dependecia vacía).
- Una vez montado el componente hay que limpiarlo para que no se quede colgado el eventListener.
- Añadir rutas/enlaces al Logo y al Avatar.

### Banner
- Importamos imagen como backgroundImage. Hemos acompañado esta imagen con estilos como object-fit, brackgorund-size y background-position para ajustar tal y como queremos.
- Hemos posiconado el título de la película, la descripción y los botones.
- Como la descripción viene de la API, la truncamos para asegurarnos que no sea demasiado larga. Para ello hemos declarado la función truncate().
- Por último, añadimos un <div> vacío que oscurece la imagen haciendo un efecto de fusión con el resto de la app (gradiente posicionado de manera relativa).

### Login Page
- Añadimos el logo y lo situamos con una posición absoluta.
- Colocamos una imagen como background.
- Creamos un botón con styled-components para iniciar sesión. Lo hemos customizado a nuestro gusto (color, borde, etc...) y lo podemos cambiar como queramos pasándole props.
- Styled-components para variar los estilos del input o del botón pero para su posicionamiento le damos una clase normal.
- Input personalizado en styled-components (NetflixInput). Como viene de InputBase (que ya es un componente de material UI) hemos editado los parámetros que queríamos cambiar.

### Profile Page
- Distribución de la página.
- pasar props a los styled-components.
- En el caso que el componente no sea binario (diferente tamaño de botones) lo solucionamos con una función y un switch.


### Sign Up
- Renderizado condicional con una variable SignIn. Si la variable es falsa accedemos al usuario.

### Registro & SingIn
- Habilitado una cuenta en Firebase.
- Inicializar auth.
- Capturamos los datos del usuario dentro del form.
- Registramos email y password con los métodos para crear usuarios.

### Redux
- Habilitamos el slice "userSlice" para manejar el usuario en los diferentes componentes.

### Persistencia
- añadimos useEffect en App.js con el obj. auth.Escuhca cada vez que cambia el usuario en firebase.
- Cada vez que cambia, vuelve a inyectar el usuario en la capa userSlice (Redux). De esta manera la app recuerda que ya estamos dentro aunque refresquemos la página.

### Request
- Construimos el componente Row. Para ello habilitamos todos los endpoints necesarios para acceder a la API de The Movie DB y extraer la información que queremos.

### Imágenes
- Request a la API (useEffect) mediante llamadas asíncronas (función fetchData)

### PayPal
- Medio de pago de la subscricón a través de Paypal. 
