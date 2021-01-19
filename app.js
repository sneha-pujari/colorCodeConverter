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
      resultDiv.innerHTML = `<h1>rgb(${hexToRgb(inputValue)})</h1>`;
     // document.body.style.color = lightOrDark(hexToRgb(inputValue));

   
    console.log(hexToRgb(inputValue))
    } 
    
    else {
      inputValue = inputValue.replace(/(rgb)|\(|\)/g, '')
                             .split(',')
                             .map(val => Number(val));
      
      resultDiv.innerHTML = `<h3>${rgbToHex(inputValue)}</h3>`;
    console.log(rgbToHex(inputValue)) 
    //document.body.style.color = lightOrDark(rgbToHex(inputValue));
 
    }
   
   //body background color
    var res = document.querySelector("#result");
   console.log("result"+res.textContent);
   document.body.style.backgroundColor = res.textContent;

//    if(res.textContent === "")
  }
 
  
  document.getElementById('convert-form').onsubmit = function(event) {
    event.preventDefault();
    validateInput(document.getElementById('convert-input').value);
  }
  
