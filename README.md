# Image Uploader #
Image Uploader client para el challenge de DevChallenge.io
> NOTA: Correr la aplicacion con las siguientes dependencias ya instaladas de forma global
* [Git](https://git-scm.com/)
* [Yarn](https://yarnpkg.com/)
* [http-server](https://www.npmjs.com/package/http-server)

## Iniciar desarrollo ##
Seguir la siguiente lista de pasos:
1. clonar el repositorio y cambiar la brancha a _client_
```
    $ git clone https://github.com/Erezz1/image-uploader.git
    $ cd ./image-uploader
    $ git checkout client
```

2. Instalar dependencias
```
    $ yarn install
```

3. Configurar variables de entorno .env en base al molde .example.env

4. Correr la aplicacion en modo desarrollo
```
    $ yarn build
```

## Desplegar a produccion ##
1. Realizar los pasos del 1 al 3 de la seccion __Iniciar desarrollo__
2. Crear la carpeta de despliegue
```
    $ yarn build
```
4. Probar la aplicacion con http-server
```
    $ cd ./dist
    $ http-server
```
