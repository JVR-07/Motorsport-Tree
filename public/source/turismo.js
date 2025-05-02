const categories = [
    { name: 'Nascar Cup Series', image: '../imgs/nascar.webp', description: 'La NASCAR Cup Series es la categoría reina del automovilismo de stock cars en Estados Unidos. Se caracteriza por sus autos de carrocería cerrada, motores V8 atmosféricos y competencias en óvalos, circuitos cortos y algunas pistas ruteras. Es famosa por su formato por etapas, los playoffs y una cultura automovilística profundamente arraigada en el sur de EE.UU.', link: '../pages/nascar.html' },
    { name: 'V8 Supercars', image: '../imgs/supercars.jpg', description: 'El Supercars Championship, conocido popularmente como V8 Supercars, es la principal categoría de turismos en Australia. Sus autos, basados en sedanes como el Ford Mustang y Chevrolet Camaro, cuentan con motores V8 potentes y compiten en circuitos técnicos y urbanos. Destaca por su paridad técnica, maniobras agresivas y carreras emocionantes como la legendaria Bathurst 1000.', link: '../pages/supercars.html' }
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