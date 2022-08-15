// theme 

const html = document.querySelector('html');
const check = document.getElementById('switch');

check.addEventListener("change", function(){
  if(check.checked){
    html.setAttribute('data-theme', 'light');
  } else{
    html.setAttribute('data-theme', 'dark');
  }
});


// calculator 

let a = ''; // first num
let b = ''; // second num
let sign = ''; // operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '×', '÷'];

const result = document.getElementById('result');

function clearAll (){
  a = '';
  b = '';
  sign = '';
  finish = false;
  result.textContent = 0;
}

document.querySelector('.btn_clear').onclick = clearAll;

document.querySelector('.calc__buttons').onclick = (event) => {
  
  if (!event.target.classList.contains('btn')) return;
  if (event.target.classList.contains('btn_clear')) return;

  result.textContent = '';
  const key = event.target.textContent;
  
  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      a += key;
      result.textContent = a;
    }
    else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      result.textContent = b;

    }
    else {
      b += key;
      result.textContent = b;
    }
    return;
  }

  if (action.includes(key)) {
    sign = key;
    result.textContent = sign;
  }

  if (key === '=') {

    if(b === '') b = a;

    switch (sign) {
      case "+":
        a = (+a) + (+b);
        break;
      case "-":
        a= a - b;
        break;
      case "×":
        a = a * b;
        break;
      case "÷":
        if(b === '0') {
          result.textContent = 'error';
          a = '';
          b = '';
          sign = '';
          return;
        };
        a = a / b;
        break;
    }

    finish = true;
    result.textContent = a;
  }

} ;


