# Motorsport-Tree

Este proyecto corresponde al curso "Redes de Computadoras" del Instituto Tecnológico de Tijuana y tiene como finalidad crear una aplicación web sencilla y montarla en un servidor web (en este caso Apache) de forma local, que se ramifique en al menos 15 páginas web locales y 5 páginas web externas. En este caso, realicé mi practica inspirándome en el deporte de motor(Motorsport).  

## Ramificación de las categorias
En mi index, despliego 5 tipos o ramas del motorsport. Dentro de cada rama aparecen tarjetas correspondientes a las categorias más importanes de cada tipo, y al entrar en estas tarjetas se despliega una página completa con información sobre esa categoría así como un botón al final que te lleva a la página web oficial de la categoría.
Dando así la siguiente ramificación:

![Diagrama](https://github.com/JVR-07/Motorsport-Tree/blob/main/public/diagrama-motorsport-tree.png)

## Estructura del proyecto
Aunque este proyecto es sumamente sencillo y minimalista, pues para su desarrollo solamente se implementó HTML, CSS y JavaScript vanilla, aún así se manejan distintos archivos de javascript y html debido a la lógica que implementé.  
En este caso, traté de juntar los archivos del mismo tipo dentro de una misma carpeta, dando como resultado la siguiente estructura:

```
.
├── pages/                 #Esta carpeta agrupa todas las paginas html
│   ├── baja1000.html      #Esta pagina crea la estructura para la pagina de informacion de la Baja 1000
│   ├── f1.html            #Esta pagina crea la estructura para la pagina de informacion de la F1
│   ├── grupob.html        #Esta pagina crea la estructura para la pagina de informacion del Grupo B
│   ├── gt3.html           #Esta pagina crea la estructura para la pagina de informacion de la GT3 WEC
│   ├── hypercar.html      #Esta pagina crea la estructura para la pagina de informacion de la HyperCar WEC
│   ├── indycar.html       #Esta pagina crea la estructura para la pagina de informacion de la IndyCar
│   ├── monoplaza.html     #Esta pagina muestra las tarjetas con las categorias dentro del tipo Monoplaza
│   ├── moto.html          #Esta pagina muestra las tarjetas con las categorias dentro del tipo Moto
│   ├── motogp.html        #Esta pagina crea la estructura para la pagina de informacion de MotoGP
│   ├── nascar.html        #Esta pagina crea la estructura para la pagina de informacion de la Nascar Cup Series
│   ├── rally.html         #Esta pagina muestra las tarjetas con las categorias dentro del tipo Rally
│   ├── resistencia.html   #Esta pagina muestra las tarjetas con las categorias dentro del tipo Monoplaza
│   ├── supercars.html     #Esta pagina crea la estructura para la pagina de informacion de la V8 Supercars
│   ├── superformula.html  #Esta pagina crea la estructura para la pagina de informacion de la Super Formula Japonesa
│   ├── turismo.html       #Esta pagina muestra las tarjetas con las categorias dentro del tipo Turismo
│   └── wrc.html           #Esta pagina crea la estructura para la pagina de informacion del WRC
├── public/                #Esta carpeta agrupa todas las imagenes utilizadas en todas las paginas
│   └── ...
├── source/                #Esta carpete agrupa todos los archivos del codigo de JavaScript
│   ├── index.js           #Este codigo crea los JSON's para las tarjetas del index y agrega la informacion al DOM
│   ├── monoplaza.js       #Este codigo crea los JSON's para las tarjetas de Monoplaza y agrega la informacion al DOM
│   ├── moto.js            #Este codigo crea los JSON's para las tarjetas de Moto y agrega la informacion al DOM
│   ├── rally.js           #Este codigo crea los JSON's para las tarjetas de Rally y agrega la informacion al DOM
│   ├── resistencia.js     #Este codigo crea los JSON's para las tarjetas de Resistencia y agrega la informacion al DOM
│   └── turismo.js         #Este codigo crea los JSON's para las tarjetas de Turismo y agrega la informacion al DOM
├── styles/                #Esta carpeta agrupa todos los estilos de la página
│   ├── index.css          #Esta hoja de estilos contiene formatos globales que se aplican a todas las paginas
│   └── info.css           #Esta hoja de estilos contiene formatos que se aplican solamente a las paginas de informacion
├── README.md              #Descipcion del proyecto
└── index.html             #Raiz del proyecto
```
