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
