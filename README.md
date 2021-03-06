# Netflix Clone 馃嵖
![pagina principal netflix](https://res.cloudinary.com/dhd9jgrw3/image/upload/v1629959549/Netflix/Netflix1_umlydy.png)

Replica de la app web de Netflix: Empresa de entretenimiento y un servicio por suscripci贸n estadounidense que opera a nivel mundial y cuyo servicio principal es la distribuci贸n de contenidos audiovisuales a trav茅s de una plataforma en l铆nea o servicio de video bajo demanda por streaming.

[Netflix Clone 馃帴](https://netlfix-clone.netlify.app/).

## Sitio Web
---
App realizada mediante la liber铆a React:

- Creada con componentes funcionales
- Manenjando los diferentes
- Validaci贸n de formularios
- Mensajes de error 
- Componentes condicionales
- Totalmente Responsive:
---
![Responsive](https://res.cloudinary.com/dhd9jgrw3/image/upload/v1629960455/Netflix/netflix-responsive_b5cxkl.png)

## Inicializaci贸n del proyecto
` npx create-react-app netflix --template redux`

- Proceso de Limpieza e instalaci贸n de dependencias:material-ui/core, axios, firebase, react-router-dom, uuid & styled-components

- App.js - Layout inicial:
路 Creaci贸n de rutas
路 Renderizamos Login o el resto del App condicionado a la existencia de un usuario

- Estilos: Utilizamos useStyles para crear una infraesctructura que nos permita asignar estilos a cada uno de los componentes.

- Crear las carpetas de componentes: Components & Pages: infraestructura b谩sica de los componentes que representan una p谩gina: Home, Login, Paypal, Profile y SingUp

- Estilos en los componentes de Pages: Patr贸n para a帽adir la infraesctructura de todos los componentes p谩gina: Banner, Header, Plans y Rows.

## Componentes

### Header
- Importamos el logo
- A帽adimos al AppBar clase condicional transparente. Se activa si la variable show es true. Esta variable se enciverte en true cuando hacemos un scroll vertical de 50px.
- Para escuchar este scroll vertical, a帽adimos un eventListener al objeto window.
- Este eventListener est谩 activo una sola vez cada vez que refrescamos la p谩gina -> (useEffect con dependecia vac铆a).
- Una vez montado el componente hay que limpiarlo para que no se quede colgado el eventListener.
- A帽adir rutas/enlaces al Logo y al Avatar.

![Sitio web](https://res.cloudinary.com/dhd9jgrw3/image/upload/v1629959550/Netflix/Netflix2_uz5s9l.png)

### Banner
- Importamos imagen como backgroundImage. Hemos acompa帽ado esta imagen con estilos como object-fit, brackgorund-size y background-position para ajustar tal y como queremos.
- Hemos posiconado el t铆tulo de la pel铆cula, la descripci贸n y los botones.
- Como la descripci贸n viene de la API, la truncamos para asegurarnos que no sea demasiado larga. Para ello hemos declarado la funci贸n truncate().
- Por 煤ltimo, a帽adimos un <div> vac铆o que oscurece la imagen haciendo un efecto de fusi贸n con el resto de la app (gradiente posicionado de manera relativa).

### Login Page
- A帽adimos el logo y lo situamos con una posici贸n absoluta.
- Colocamos una imagen como background.
- Creamos un bot贸n con styled-components para iniciar sesi贸n. Lo hemos customizado a nuestro gusto (color, borde, etc...) y lo podemos cambiar como queramos pas谩ndole props.
- Styled-components para variar los estilos del input o del bot贸n pero para su posicionamiento le damos una clase normal.
- Input personalizado en styled-components (NetflixInput). Como viene de InputBase (que ya es un componente de material UI) hemos editado los par谩metros que quer铆amos cambiar.

### Profile Page
- Distribuci贸n de la p谩gina.
- pasar props a los styled-components.
- En el caso que el componente no sea binario (diferente tama帽o de botones) lo solucionamos con una funci贸n y un switch.
![Sitio web](https://res.cloudinary.com/dhd9jgrw3/image/upload/v1629959548/Netflix/Netflix3_p6dgs3.png)


### Sign Up
- Renderizado condicional con una variable SignIn. Si la variable es falsa accedemos al usuario.

### Registro & SingIn
- Habilitado una cuenta en Firebase.
- Inicializar auth.
- Capturamos los datos del usuario dentro del form.
- Registramos email y password con los m茅todos para crear usuarios.

### Redux
- Habilitamos el slice "userSlice" para manejar el usuario en los diferentes componentes.

### Persistencia
- a帽adimos useEffect en App.js con el obj. auth.Escuhca cada vez que cambia el usuario en firebase.
- Cada vez que cambia, vuelve a inyectar el usuario en la capa userSlice (Redux). De esta manera la app recuerda que ya estamos dentro aunque refresquemos la p谩gina.

### Request
- Construimos el componente Row. Para ello habilitamos todos los endpoints necesarios para acceder a la API de The Movie DB y extraer la informaci贸n que queremos.

### Im谩genes
- Request a la API (useEffect) mediante llamadas as铆ncronas (funci贸n fetchData)

### PayPal
- Medio de pago de la subscric贸n a trav茅s de Paypal. 

---
### C贸mo contribuir
Toda aportaci贸n o comentario ser谩 recibido de buen gusto, ya que con ellos se podr谩 ayudar a crecer tanto a la app como a nosotros como desarrolladores.

Cualquier mejora ser谩 incluida tras una previa revisi贸n a trav茅s de un 鈥減ull requests鈥?.

Se requiere un c贸digo ordenado y comentado.


### Autor
---

![VR-Logo](https://res.cloudinary.com/dhd9jgrw3/image/upload/v1610528741/Logos%20VR/logo-vr_cmhmpa.jpg) || [V铆ctor Ruiz](https://www.linkedin.com/in/victormmorales/)