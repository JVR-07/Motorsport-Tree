![ITT Wallpaper](https://github.com/JVR-07/College-Projects/blob/main/Resource/wallpaper_itt.png)
# Motorsport-Tree

Este proyecto corresponde al curso "Redes de Computadoras" del Instituto Tecnológico de Tijuana y tiene como finalidad crear una aplicación web sencilla y montarla en un servidor web (en este caso Apache) de forma local, que se ramifique en al menos 15 páginas web locales y 5 páginas web externas. En este caso, realicé mi practica inspirándome en el deporte de motor(Motorsport).  
[Demo del proyecto](https://motorsport-tree.vercel.app/)

## Ramificación de las categorias
En mi index, despliego 5 tipos o ramas del motorsport. Dentro de cada rama aparecen tarjetas correspondientes a las categorias más importanes de cada tipo, y al entrar en estas tarjetas se despliega una página completa con información sobre esa categoría así como un botón al final que te lleva a la página web oficial de la categoría.
Dando así la siguiente ramificación:

![Diagrama](https://github.com/JVR-07/Motorsport-Tree/blob/main/public/imgs/diagrama-motorsport-tree.png)

## Estructura del proyecto
Aunque este proyecto es sumamente sencillo y minimalista, pues para su desarrollo solamente se implementó HTML, CSS y JavaScript vanilla, aún así se manejan distintos archivos de javascript y html debido a la lógica que implementé.  
En este caso, traté de juntar los archivos del mismo tipo dentro de una misma carpeta, dando como resultado la siguiente estructura:

```
.
├── public/
│   ├── pages/
│   │   ├── baja1000.html
│   │   ├── f1.html
│   │   ├── grupob.html
│   │   ├── gt3.html
│   │   ├── hypercar.html
│   │   ├── indycar.html
│   │   ├── monoplaza.html
│   │   ├── moto.html
│   │   ├── motogp.html
│   │   ├── nascar.html
│   │   ├── rally.html
│   │   ├── resistencia.html
│   │   ├── supercars.html
│   │   ├── superformula.html
│   │   ├── turismo.html
│   │   └── wrc.html
│   ├── imgs/
│   │   └── ...
│   ├── source/
│   │   ├── index.js
│   │   ├── monoplaza.js
│   │   ├── moto.js
│   │   ├── rally.js
│   │   ├── resistencia.js
│   │   └── turismo.js
│   ├── styles/
│   │   ├── index.css
│   │   └── info.css
│   └── index.html
└── README.md
```
