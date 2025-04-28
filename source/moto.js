const categories = [
    { name: 'MotoGP', image: '../public/motogp.jpeg', description: ' El campeonato mundial de motociclismo más prestigioso, con motos de 1,000cc de tecnología avanzada, donde los mejores pilotos del mundo compiten en circuitos internacionales.', link: '' },
    { name: 'Moto2', image: '../public/moto2.webp', description: 'Segunda categoría más alta en el motociclismo, con motos de 765cc que sirven como plataforma para pilotos que aspiran a llegar a MotoGP.', link: '' },
    { name: 'Moto3', image: '../public/moto3.webp', description: 'La categoría de entrada al motociclismo de gran premio, con motos de 250cc, donde los pilotos jóvenes inician su carrera profesional.', link: '' },
    { name: 'MXGP', image: '../public/mxgp.jpg', description: 'El campeonato mundial de motocross, con competiciones en terrenos de tierra y barro, donde los pilotos compiten en diferentes tipos de circuitos naturales.', link: '' },
    { name: 'WSBK', image: '../public/wsbk.webp', description: 'El campeonato mundial de superbikes, donde se compiten motos de 1,000cc de producción modificadas. Es similar a MotoGP pero con motos derivadas de modelos comerciales y una reglamentación más accesible para equipos privados.', link: '' }
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