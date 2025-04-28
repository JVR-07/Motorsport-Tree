const categories = [
    { name: 'Rally', image: './public/rally.jpeg', description: 'Competiciones sobre tramos de tierra, asfalto o mixtos, poniendo a prueba la navegación y la velocidad.', link: './pages/rally.html' },
    { name: 'Monoplazas', image: './public/monoplaza.jpeg', description: 'Carreras de autos de fórmula: prototipos ligeros y muy potentes diseñados para alta velocidad y aerodinámica.', link: './pages/monoplaza.html' },
    { name: 'Moto', image: './public/moto.webp', description: 'Disciplinas de motociclismo en pista, off-road y resistencia, con motos de velocidad, enduro y trial.', link: './pages/moto.html' },
    { name: 'Resistencia', image: './public/resistencia.jpg', description: 'Carreras de larga duración donde la fiabilidad, estrategia y trabajo en equipo son clave.', link: '' },
    { name: 'Turismo', image: './public/turismo.jpg', description: 'Competencias con coches basados en modelos de calle, modificados para circuitos y óvalos.', link: '' }
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