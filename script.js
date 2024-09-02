const buscarInput = document.getElementById('buscar-input');
const imagenesDivs = document.querySelectorAll('.main-images');
const imagenes = document.querySelectorAll('.bg-image');
const key = 'GhtLi3KoYXmjUm3tFvBbQidYBdnzMbicuf3RCaiI-Uk';

const btnGuardar = document.querySelectorAll('.main-btn');

buscarInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const categoria = e.target.value;
    buscarResultado(categoria);
  }
});

const buscarResultado = async (valorInput) => {
  try {
    const request = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${valorInput}&client_id=${key}`);

    const data = await request.json();

    data.results.forEach((resultado, index) => {
      const imagenUrl = resultado.links.download;
      imagenes[index].src = imagenUrl;
    });

    for (let i = data.results.length; i < imagenesDivs.length; i++) {
      imagenesDivs[i].style.display = 'none';
    }

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
};

imagenesDivs.forEach((div) => {
  const btnGuardar = div.querySelector('.main-btn');
  const img = div.querySelector('.bg-image');

  div.addEventListener('mouseover', () => {
    btnGuardar.style.display = 'block';
    img.style.filter = 'brightness(50%)';
  });

  div.addEventListener('mouseout', () => {
    btnGuardar.style.display = 'none';
    img.style.filter = '';
  });
});

/*    console.log(data[0].url.full);*/

/*'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg
?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDkxMzB8MHwxfHNlYXJjaHwxfHwlNUJvYmplY3QlMjBIVE1MSW5wdXRFbGVtZW50JTVEfGVufDB8fHx8MTcyNTE0NzM4MXww&ixlib=rb-4.0.3&q=85'*/

/* const baseUrl = fullUrl.replace(/\?.*$/, '');*/

/* console.log(baseUrl);*/
/*    imagen.src = data[0].url.full;*/
/*'urls full'*/

/*   const buscarResultado = async () => {
      try {
        const request = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${valorInput}&client_id=${key}`
        );*/

/* const data = await request.json();
    console.log(data.results);*/
/* data.results.forEach((resultado, index) => {
      const imagenUrl = resultado.links.download;

      imagenes[index].src = imagenUrl;
      console.log(url);
    });*/

/*   const url = imagenUrl.split('?')[0];*/
/* const imgElement = document.querySelector('.main-images img');*/

/*  console.log(data);
   
      } catch (error) {
        console.log('error', error);
      }
    };
*/
/*    console.log(data[0].url.full);*/

/*  const url = imagenUrl.split('?')[0];*/
/* const imgElement = document.querySelector('.main-images img');*/
