const categories = [
    { name: 'WRC', image: '../public/wrc.jpeg', description: 'La máxima categoría del rally mundial, con autos híbridos de alta potencia y tecnología de punta, compitiendo en etapas alrededor del mundo.', link: '../pages/wrc.html' },
    { name: 'Grupo B', image: '../public/grupob.jpg', description: 'Fue una categoría histórica en el rally, que existió entre 1982 y 1986. Fue famosa por los autos extremadamente poderosos y rápidos, pero también por los accidentes fatales que ocurrieron debido a la naturaleza peligrosa de los vehículos.', link: '../pages/grupob.html' },
    { name: 'Baja 1000', image: '../public/baja1000.jpg', description: 'La Baja 1000 es una carrera de resistencia off-road de más de 1,000 millas en Baja California, México, conocida por sus terrenos extremos y desafío para vehículos y pilotos.', link: '../pages/baja1000.html' }
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