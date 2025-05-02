const categories = [
    { name: 'MotoGP', image: '../public/motogp.jpeg', description: ' El campeonato mundial de motociclismo más prestigioso, con motos de 1,000cc de tecnología avanzada, donde los mejores pilotos del mundo compiten en circuitos internacionales.', link: '../pages/motogp.html' }
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