
var body = document.getElementsByTagName("body")[0];
var div = document.createElement('div');
div.setAttribute('id', 'divy');
var p = document.createElement('p');
p.setAttribute('id', 'text');
p.textContent = "Hello World!";
div.appendChild(p);
body.appendChild(div);

var img = document.createElement('img');
img.setAttribute('width', '200');
img.setAttribute('height', '300');
img.setAttribute('alt', 'jesus');
img.src = 'jesus.jpeg';

div.appendChild(img);


