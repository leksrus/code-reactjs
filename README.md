# React JS - e-commerce

## Techno Market

## Live Demo

https://leksrus.github.io/coder-reactjs/

## Descripción del proyecto

> El proyecto es un eCommece de componentes para PC desarrollado en ReactJS. En el mismo se podrán adquirir diferentes componentes para el armado de la PC tanto de gamer como común.
> El sitio cuenta con una barra de navegabilidad que nos permite movernos entre las diferentes categorías de productos. Al encontrar un producto que nos guste podemos ver un detalle más específico del mismo, comprar la cantidad deseada hasta el máximo de stock disponible. En caso de que no haya stock el sitio lo indicará y no permitirá agregar un ítem de ese producto al carrito. Para concretar la orden el usuario debe estar logeado en el sitio de lo contrario será redirigido a la pantalla de login.

## Secciones

- Home

  > Home de la página. Desplegar todos los productos sin ningún filtro.

- Categories

  > Se pueden filtrar los productos según diferentes categorías. En caso de volver a ver todas las categorías posee la opción `All products`

- About

  > Descripción de quienes somos.

- Cart

  > Carrito de compra para agregar los productos deseados a comprar.

  - Al tener productos agregados al carrito mostrará un mínimo detalle de dichos productos y la cantidad de unidades. Tendremos la posibilidad de eliminar un producto particular del listado o vaciar todo el carrito de compras.
  - En esta sección también contamos con un apartado de resumen, el cual nos mostrará la cantidad total de unidades y el importe total a abonar.
  - Al realizar checkout se validará si usuario esta logeado, de no estarlo se pedirá login.

- Sing in

  > Formulario de login. Es necesario estar logeado para poder concretar la orden de compra.

  - Nota: El usuario para realizar la prueba es `admin@techmarket.com` y password `AdminTechMarket`. El mismo posee un vencimiento

- Sing out

  > Una vez logeado el usuario contara con el menú para poder deslogearse. Este menú no está disponible si usuario no se logeo anteriormente.

> Nota: Las secciones `Contact` y `Sign up` todavía están en la etapa de desarrollo. Por lo tanto, no están funcionando.

## Librerías

A continuación, se detallan librerías utilizados.

| Library                | README                                                         | Version |
| ---------------------- | -------------------------------------------------------------- | ------- |
| react                  | https://es.reactjs.org/docs/getting-started.html               | ^17.0.2 |
| firebase               | https://firebase.google.com/docs?authuser=0&hl=es              | ^9.6.10 |
| react-bootstrap        | https://react-bootstrap.github.io/getting-started/introduction | ^2.1.2  |
| bootstrap              | https://getbootstrap.com/                                      | ^5.1.3  |
| react-dom              | https://es.reactjs.org/docs/react-dom.html                     | ^17.0.2 |
| react-router-dom       | https://v5.reactrouter.com/web/guides/quick-start              | ^6.2.2  |
| react-router-bootstrap | https://github.com/react-bootstrap/react-router-bootstrap      | ^0.26.1 |
| gh-pages               | https://github.com/gitname/react-gh-pages                      | ^3.2.3  |

## Descarga de repositorio y funcionamiento local

Clonar el repositorio de Github y instalación de dependencias de la aplicación.

```sh
git clone https://github.com/leksrus/coder-reactjs.git

npm i
```
