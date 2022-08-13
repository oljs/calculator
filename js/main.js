
const html = document.querySelector('html');
const check = document.getElementById('switch');

check.addEventListener("change", function(){
  if(check.checked){
    html.setAttribute('data-theme', 'light');
  } else{
    html.setAttribute('data-theme', 'dark');
  }
})

