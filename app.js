function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length < 6) hex += hex.slice(0);
    console.log(hex.match(/.{2}/g).map(val => parseInt(val, 16)));
    return hex.match(/.{2}/g).map(val => parseInt(val, 16));
  }
  
  function rgbToHex(rgb) {
    console.log(rgb);
    console.log(rgb.reduce((acc,val) => acc + (0 + val.toString(16)).slice(-2), '#'));
    return rgb.reduce((acc,val) => acc + (0 + val.toString(16)).slice(-2), '#');
  }
  
  function validateInput(inputValue) {
    const resultDiv = document.getElementById('result');
    
    if (inputValue.includes('#') && inputValue.length <= 7) {
      resultDiv.innerHTML = `<h3>rgb(${hexToRgb(inputValue)})</h3>`;
      document.body.style.color = lightOrDark(inputValue);

    //document.body.style.backgroundColor = rgb(hexToRgb(inputValue)); 
    console.log("andar se hun"+hexToRgb(inputValue))
    } else {
      inputValue = inputValue.replace(/(rgb)|\(|\)/g, '')
                             .split(',')
                             .map(val => Number(val));
      
      resultDiv.innerHTML = `<h3>${rgbToHex(inputValue)}</h3>`;
    //   document.body.style.backgroundColor = {rgbToHex(inputValue)};
    console.log("andar se hun"+rgbToHex(inputValue)) 
    document.body.style.color = lightOrDark(inputValue);
    // document.body.style.backgroundColor = result.value;
    }
   var res = document.querySelector("#result");
   console.log(res.textContent);
   document.body.style.backgroundColor = res.textContent;
//    if(res.textContent === "")
  }
 
  function lightOrDark(color) {

    // Variables for red, green, blue values
    var r, g, b, hsp;
    
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {

        // If RGB --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        
        r = color[1];
        g = color[2];
        b = color[3];
    } 
    else {
        
        // If hex --> Convert it to RGB: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace( 
        color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }
    
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {
       console.log('light');
        return '#000000';
    } 
    else {
        console.log('dark');
        return '#ffffff';
    }
}
  document.getElementById('convert-form').onsubmit = function(event) {
    event.preventDefault();
    validateInput(document.getElementById('convert-input').value);
  }
  