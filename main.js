var color = document.getElementById('color');
var colorValue = document.getElementById('color-value');
var getValue = document.getElementById('get_value').onclick = getText;
document.getElementById('color').addEventListener('input', getColor, false);

      function getColor(event) {
          console.log (color);
          colorValue.value = color.value;
}
      function getText() {
          document.getElementById('get_css').innerHTML = 'background: ' + color.value + ';' + '<br>' + 'color: ' + color.value + ';' + '<br>' + '';
}

var br = document.getElementById('br');
var sizeHeight = document.getElementById('size');
var sizeWidth = document.getElementById('size-w');
var radius = document.getElementById('radius');
var seeRadius = document.getElementById('see-radius');

sizeHeight.addEventListener('input', getSize, false);

function getSize(event) {
  br.setAttribute ('style', '');
  console.log (sizeHeight.value);
  br.style.height = sizeHeight.value + 'px';
  document.getElementById('height').value = 'height: ' + br.style.height;
}

sizeWidth.addEventListener('input', getSizeW, false);

function getSizeW(event) {
  console.log (sizeWidth.value);
  br.style.width = sizeWidth.value + 'px';
  document.getElementById('width').value = 'width: ' + br.style.width;
}
radius.addEventListener('input', getRadius, false);

function getRadius(event) {
  br.style.borderRadius = radius.value + 'px';
  seeRadius.value = 'border-radius: ' + br.style.borderRadius;
}

// add value through input-text start!

document.getElementById('height').addEventListener('input', typeHeight, false);
function typeHeight(event) {
  br.style.height = document.getElementById('height').value + 'px';
}

document.getElementById('width').addEventListener('input', typeWidth, false);
function typeWidth(event) {
  br.style.width = document.getElementById('width').value + 'px';
}

// pick color

var pickColor = document.getElementById('pick-color').onclick = pickColorfromCp;

function pickColorfromCp() {
  br.style.background = colorValue.value;
}
