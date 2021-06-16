## Inicialización del proyecto
` npx create-react-app netflix --template redux`

- Proceso de Limpieza e instalación de dependencias:material-ui/core, axios, firebase, react-router-dom, uuid & styled-components

- App.js - Layout inicial:
· Creación de rutas
· Renderizamos Login o el resto del App condicionado a la existencia de un usuario

- Estilos: Utilizamos useStyles para crear una infraesctructura que nos permita asignar estilos a cada uno de los componentes.

- Crear las carpetas de componentes: Components & Pages: infraestructura básica de los componentes que representan una página: Home, Login, Paypal, Profile y SingUp

- Estilos en los componentes de Pages: Patrón para añadir la infraesctructura de todos los componentes página: Banner, Header, Plans y Rows.

### Header