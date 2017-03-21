# compoAngularJP1

<h3>Introducción</h3>
Codigo demostrativo para el articulo de componentes en angularJs

El presente repositorio en git sirve de ejemplo para el articulo publicado en: 

El repositorio cuenta con distintas ramas, 5 para ser exacto. siguiendo el articulo es mucho mas entendible el objetivo de cada rama.

<h3>Requerimientos:</h3>
1) Git<br/>
2) NodeJs<br/>

<h3>Instrucciones de instalación:</h3>
1) Abra una terminal apuntando al directorio deseado <br/>
2) clone el repositorio en su maquina local : git clone https://github.com/carlosnat/compoAngularJP1.git<br/>
3) Cambie de directoria a: compuAngularJP1<br/>
4) Ejecute el codigo: npm install. (para instalar los paquetes connect serve-static ) el mini servidor web esta basado en la respuesta en stackoverflow : http://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server<br/>
5) Ejecute el servidor con el comando: node server.js<br/>
*Si el servidor da problemas verifique que las dependecias esten instaladas en la carpeta node_modules, puede reinstalar ejecutando el comando dentro del directorio: npm install connect serve-static<br/>


<h3>Uso del repositorio:</h3>

El repositorio cuenta con 5 ramas. Para ir viajando entre ellas debe utilizar el comando:

git checkout <nombreDeRama> ejemplo: git checkout paso2

utilizando el comando podra ir explorando junto al articulo la explicación del uso basico de componentes en angularJs.


<h3>Explicación de ramas:</h3>

Cada rama tiene un objetivo los cuales son:

Rama -> paso1: Setup del ambiente de prueba.

Rama -> paso2: Planteamiento de caso de estudio (tres vistas con sus respectivas rutas).

Rama -> paso3: Planteamiento de caso de estudio parte 3. Un formulario comun que captura datos de un usario en las tres vistas.

Rama -> paso4: Creación y uso de directiva en angularJs (se plantea el caso mas simple posible para el mejor entendimiento).

Rama -> paso5: Uso de la directiva para desplegar el formulario en las tres vistas, y una pqueña actualización para observar la ventaja que presenta el uso de directivas.