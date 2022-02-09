function image() {
    fetch(`https://source.unsplash.com/1920x1080/?landscape`)
    .then(res => {
        let item = document.createElement('div');
        item.innerHTML = `<img id="image" src="${res.url}" alt="inspirational image"/>`;
        document.body.appendChild(item);
    })
    .catch(error => console.log(error));
}

function kanye() {
    fetch(`https://api.kanye.rest/`)
    .then(res => res.json())
    .then(data => {
        let quote = data.quote;
        let item = document.getElementById('kanye');
        item.innerHTML = `${quote}`;
      })
      .catch(error => console.log(error));
}

let fonts = ['Arial','Times New Roman','Courier New','Courier','Verdana','Georgia','Trebuchet MS'];
let font = fonts[Math.floor(Math.random() * fonts.length) + 1];
document.getElementById('kanye').style.fontFamily = font;

image();
kanye();