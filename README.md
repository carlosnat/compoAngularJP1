# compoAngularJP1
Codigo demostrativo para el articulo de componentes en angularJs

El presente repositorio en git sirve de ejemplo para el articulo publicado en: 

El repositorio cuenta con distintas ramas, 5 para ser exacto. siguiendo el articulo es mucho mas entendible el objetivo de cada rama.

Requerimientos:
1) Git
2) NodeJs

Instrucciones de instalación:
1) Abra una terminal apuntando al directorio deseado 
2) clone el repositorio en su maquina local : git clone https://github.com/carlosnat/compoAngularJP1.git
3) Cambie de directoria a: compuAngularJP1
4) Ejecute el codigo: npm install. (para instalar los paquetes connect serve-static ) el mini servidor web esta basado en la respuesta en stackoverflow : http://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
5) Ejecute el servidor con el comando: node server.js
*Si el servidor da problemas verifique que las dependecias esten instaladas en la carpeta node_modules, puede reinstalar ejecutando el comando dentro del directorio: npm install connect serve-static

Uso del repositorio:

El repositorio cuenta con 5 ramas. Para ir viajando entre ellas debe utilizar el comando:

git checkout <nombreDeRama> ejemplo: git checkout paso2

utilizando el comando podra ir explorando junto al articulo la explicación del uso basico de componentes en angularJs.


Explicación de ramas:

Cada rama tiene un objetivo los cuales son:

Rama -> paso1: Setup del ambiente de prueba.

Rama -> paso2: Planteamiento de caso de estudio (tres vistas con sus respectivas rutas).

Rama -> paso3: Planteamiento de caso de estudio parte 3. Un formulario comun que captura datos de un usario en las tres vistas.

Rama -> paso4: Creación y uso de directiva en angularJs (se plantea el caso mas simple posible para el mejor entendimiento).

Rama -> paso5: Uso de la directiva para desplegar el formulario en las tres vistas, y una pqueña actualización para observar la ventaja que presenta el uso de directivas.
