# Motorsport-Tree

Este proyecto corresponde al curso "Redes de Computadoras" del Instituto Tecnológico de Tijuana y tiene como finalidad crear una aplicación web sencilla y montarla en un servidor web (en este caso Apache) de forma local, que se ramifique en al menos 15 páginas web locales y 5 páginas web externas. En este caso, realicé mi practica inspirándome en el deporte de motor(Motorsport).  

## Ramificación de las categorias
En mi index, despliego 5 tipos o ramas del motorsport. Dentro de cada rama aparecen tarjetas correspondientes a las categorias más importanes de cada tipo, y al entrar en estas tarjetas se despliega una página completa con información sobre esa categoría así como un botón al final que te lleva a la página web oficial de la categoría.
Dando así la siguiente ramificación:

```
Index  
├── Rally  
│   ├── WRC  
│   │   └── Enlace Externo  
│   ├── Grupo B  
│   │   └── Enlace Externo  
│   └── Baja 1000  
│       └── Enlace Externo  
├── Monoplazas  
│   ├── F1  
│   │   └── Enlace Externo  
│   ├── IndyCar  
│   │   └── Enlace Externo  
│   └── SuperFormula  
│       └── Enlace Externo  
├── Moto  
│   └── MotoGP  
│       └── Enlace Externo  
├── Resistencia  
│   ├── HyperCar  
│   │   └── Enlace Externo  
│   └── GT3  
│       └── Enlace Externo  
└── Turismo  
    ├── Nascar Cup Series  
    |    └── Enlace Externo  
    └── V8 Supercars  
        └── Enlace Externo
```

## Estructura del proyecto
Aunque este proyecto es sumamente sencillo y minimalista, pues para su desarrollo solamente se implementó HTML, CSS y JavaScript vanilla, aún así se manejan distintos archivos de javascript y html debido a la lógica que implementé.  
En este caso, traté de juntar los archivos del mismo tipo dentro de una misma carpeta, dando como resultado la siguiente estructura:



