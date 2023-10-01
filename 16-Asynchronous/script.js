'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${Object.values(data.flags)[1]}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // const sData = Object.keys(data.flags).sort();
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${Object.values(data.flags)[1]}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('pakistan');
getCountryData('portugal');
getCountryData('usa');
// getCountryData('germany');
*/

/////////////////
// CALLBck HELL

// Welcome to Callback Hell
/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)

    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('pakistan');
*/

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

//////////////////////
//PROMISE

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`country not fount (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       // console.log(data[0].borders[0]);

//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went Wrong 💥💥💥 ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       console.log(data[0].borders[0]);
//       const neighbour = data[0].borders;
//       // const neighbour = 'pak';
//       // console.log(data[0].borders[0]);
//       console.log(neighbour);

//       if (neighbour === undefined) {
//         throw new Error('no neighbour found');
//       }

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went Wrong 💥💥💥 ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       if (!data || data.length === 0) {
//         throw new Error('Country not found');
//       }

//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       console.log(data);
//       console.log(neighbour);

//       if (neighbour === undefined) {
//         throw new Error('No neighbour found');
//       }

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Neighbour not found'
//       );
//     })
//     .then(data => {
//       if (!data || data.length === 0) {
//         // Handle the case where the neighbor data is not found
//         throw new Error('Neighbour not found');
//       }

//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });
/*
// working code
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      if (!data || data.length === 0) {
        throw new Error('Country not found');
      }

      renderCountry(data[0]);
      const neighbour = data[0].borders ? data[0].borders[0] : undefined;

      if (!neighbour) {
        throw new Error('No neighbour found');
      }

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Neighbour not found'
      );
    })
    .then(data => {
      if (!data || data.length === 0) {
        // Handle the case where the neighbor data is not found
        throw new Error('Neighbour not found');
      }

      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// getCountryData('australia');
*/
// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(function (postion) {
//     console.log(postion.coords);
//     const { latitude } = postion.coords;
//     const { longitude } = postion.coords;
//     console.log(latitude, longitude);
//     const gloc = fetch(
//       `https://geocode.xyz/${latitude},${longitude}?geoit=xml`
//     );
//     console.log(gloc);
//   });

// const gloc = fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=xml`);
// console.log(gloc);

/*
const whereAmI = function (lat, long) {
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long} `)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err.message} 💥💥💥`);
    });
};

whereAmI(52.508, 72.381);
*/

/*
console.log('test Start');
setTimeout(() => console.log('0 sec start'), 0);
Promise.resolve('Resolver Promise 1').then(res => console.log(res));

Promise.resolve('Resolver Promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('test end');
*/

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottery draw...');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('you win');
    } else {
      reject(new Error('you lose'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};
wait(2)
  .then(() => {
    console.log('i waited  2 seconds');
    return wait(1);
  })
  .then(() => console.log('i waited for 1 second'));
*/

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));
*/

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();

    renderCountry(data[0]);

    return `You're in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`🔥 ${err.message}`);

    throw err;
  }
};

console.log('1');
// const city = whereAmI();
// console.log(city);

whereAmI()
  .then(city => console.log(city))
  .catch(err => console.error(`2: ${err.message}`))
  .finally(() => console.log('3: finished'));

(async function () {
  try {
    const posi = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: finished');
})();
*/

/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital[0]));

    // console.log([...data1.capital, ...data2.capital, ...data3.capital]);
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'pakistan');
*/

//promise.race

/*
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(0.5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('sucess'),
  Promise.reject('error'),
  Promise.resolve('another success'),
]).then(res => console.log(res));

//Promise.any
Promise.any([
  Promise.resolve('sucess'),
  Promise.reject('error'),
  Promise.resolve('another success'),
]).then(res => console.log(res));

*/

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('image not found'));
    });
  });
};

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('img loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// const loadNPause = async () => {
//   let currentImg;

//   try {
//     currentImg = await createImage('img/img-1.jpg');
//     console.log('img loaded');
//     await wait(2);
//     currentImg.style.display = 'none';

//     currentImg = await createImage('img/img-2.jpg');
//     await wait(2);
//     currentImg.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };

// loadNPause();

const images = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
