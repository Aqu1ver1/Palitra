const col = document.querySelectorAll('.section');
const text_cont = document.querySelectorAll('.text_cont');
const wrapper = document.querySelector('.wrapper');
const copyAll = document.querySelector('.copyPalitr')
let copyArr = [];


wrapper.addEventListener('click', function(event){
  const elem = event.target;
  if(elem.classList.contains('text')){
    navigator.clipboard.writeText(elem.innerHTML);
  }
});

copyAll.addEventListener('click', function(){
  navigator.clipboard.writeText(copyArr);
})

// function RandomColor(){
//   let color = '';
//   const hexCodes = '0123456789ABCDEF'

//   for(i = 0; i< 6; i++){
//     color = hexCodes[Math.floor(Math.random * hexCodes.l)]
//   }
// }
function TextColor(text, color){
  const luminance = chroma(color).luminance()

  text.style.color =  luminance > 0.5 ? 'black' : 'white';
}

function setRandomColor(){
  col.forEach((col) => {
    col.addEventListener('click', function(event){
      // if(event.target == ('fa-solid'))return;
      if(event.target.classList.contains('fa-solid'))return;
      if(locked.classList.contains('fa-lock'))return;
      color = chroma.random()
      col.style.background =  color;
      text.textContent = color;
      copyArr += color + ' ';
      TextColor(press,color)
      TextColor(text, color);    
      TextColor(button, color);
    })
    const locked = col.querySelector('.fa-solid')

    if(locked.classList.contains('fa-lock'))return;

    const text = col.querySelector('.text');
    const button = col.querySelector('.fa-solid');
    const press = document.querySelector('.press');
    let color = chroma.random()
    col.style.background =  color;
    text.textContent = color;
    copyArr += color + ' ';
    TextColor(press,color)
    TextColor(text, color);    
    TextColor(button, color);

  })
}

const lock = document.querySelector('.locker');

wrapper.addEventListener('click', function(event){

  const type = event.target.dataset.type;

  if(type == 'lock'){
    const node =
    event.target.tagName.toLowerCase() == 'i'
      ? event. target
      : event. target. children[0]
 
      node.classList.toggle('fa-lock');
      node.classList.toggle('fa-lock-open')
  }
});
const locker = document.querySelector('.locker');

document.addEventListener('keypress', function(e){
  e.preventDefault();
  if(e.key == 'Enter'){
    copyArr = [];
    setRandomColor()
  }
})
setRandomColor();
