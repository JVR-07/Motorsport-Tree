const categories = [
    { name: 'F1', image: '../imgs/f1.webp', description: 'El campeonato de automovilismo más prestigioso del mundo, con coches de tecnología avanzada que compiten en circuitos internacionales.', link: '../pages/f1.html' },
    { name: 'IndyCar', image: '../imgs/indycar.jpg', description: 'Campeonato estadounidense de monoplazas, conocido por sus icónicas carreras en óvalos, como las 500 Millas de Indianápolis, con coches de alta velocidad.', link: '../pages/indycar.html' },
    { name: 'SuperFormula', image: '../imgs/superformula.jpg', description: 'La categoría más importante de monoplazas en Japón, similar a la F1, pero con coches específicos para esta serie y con un fuerte enfoque en la competencia interna japonesa.', link: '../pages/superformula.html' }
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
    const more = document.createElement('h3');
    more.className = 'card-more';
    more.textContent = 'Saber más'

    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(more);
    cardLink.appendChild(img);
    cardLink.appendChild(content);
    container.appendChild(cardLink);
  });