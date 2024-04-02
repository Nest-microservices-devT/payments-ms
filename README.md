<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Dev

1. Clonar el repositorio
2. Instalar las dependencias 
3. Crear archivo `.env` basado en el `.env.template`
4. Crear una cuenta si no se tiene en stripe e instalar el [CLI de stripe](https://docs.stripe.com/stripe-cli)
5. Crear una cuenta en hookdeck y seguir las instrucciones para instalar el [CLI de Hooddeck](https://hookdeck.com/docs/cli)
6. Hacer un forwarder del puerto de nuestro proyecto y a su vez del endpoint configurado para el webhook con el siguiente comando `stripe listen --forward-to localhost:3003/payments/webhook`
7. Correr el hooddeck con el siguiente comando `hookdeck listen 3003 stripe-to-localhost`
8. Correr el proyecto con el comando `yarn start:dev` o `npm run start:dev`

## Stack usado

1. NestJS
2. Stripe
3. Hooddeck

## Builder

1. swc
