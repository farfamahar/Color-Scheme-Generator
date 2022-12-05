import './style.css'

function refreshColor(){
  console.log("here")
  let color = document.getElementById("color-selector").value
console.log(color)
  document.querySelector('#app').innerHTML = `
  <div>
  <input type="color" value="${color}"/>
  </div>
  ` 
}

refreshColor()
