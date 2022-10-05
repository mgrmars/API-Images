
const API = 'https://api.waifu.pics/sfw/waifu';
const image = document.getElementById('image');
const button = document.getElementById('button');
const hyperlink = document.getElementById('imagehyper');

window.addEventListener('load', fetchData);

button.addEventListener('click', e => {
  e.preventDefault();
  fetchData();
});

async function fetchData() {
  return await fetch(API, {
    method: 'GET'
  })
    .then(it => {
      if (!it.ok) {
        console.log(`Server error: [${it.status}] [${it.statusText}] [${it.url}]`)
      }
      return it.json();
    })
    .then(receivedJson => {
      image.src = receivedJson.url
      hyperlink.href = receivedJson.url
    })
    .catch(error => {
      console.log("Error in fetch", error);
    });
}
