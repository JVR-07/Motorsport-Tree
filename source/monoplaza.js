const categories = [
    { name: 'F1', image: '../public/f1.webp', description: 'El campeonato de automovilismo más prestigioso del mundo, con coches de tecnología avanzada que compiten en circuitos internacionales.', link: '' },
    { name: 'F2', image: '../public/f2.jpg', description: 'Segunda categoría más alta en el automovilismo de monoplazas, sirve como plataforma para pilotos jóvenes que aspiran a llegar a la F1.', link: '' },
    { name: 'F3', image: '../public/f3.jpg', description: 'Categoría de entrada al automovilismo de monoplazas, donde los pilotos novatos desarrollan sus habilidades antes de subir a categorías superiores como F2 y F1.', link: '' },
    { name: 'IndyCar', image: '../public/indycar.jpg', description: 'Campeonato estadounidense de monoplazas, conocido por sus icónicas carreras en óvalos, como las 500 Millas de Indianápolis, con coches de alta velocidad.', link: '' },
    { name: 'SuperFormula', image: '../public/superformula.jpg', description: 'La categoría más importante de monoplazas en Japón, similar a la F1, pero con coches específicos para esta serie y con un fuerte enfoque en la competencia interna japonesa.', link: '' }
  ];

  const container = document.getElementById('card-container');
  categories.forEach(cat => {
    const cardLink = document.createElement('a');
    cardLink.className = 'card';
    cardLink.href = cat.link;

    const img = document.createElement('img');
    img.src = cat.image;
    img.alt = cat.name;

    const content = document.createElement('div');
    content.className = 'card-content';

    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = cat.name;

    const desc = document.createElement('p');
    desc.className = 'card-desc';
    desc.textContent = cat.description;

    content.appendChild(title);
    content.appendChild(desc);
    cardLink.appendChild(img);
    cardLink.appendChild(content);
    container.appendChild(cardLink);
  });