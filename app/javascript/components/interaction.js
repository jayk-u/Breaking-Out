let frontObject = 


document.addEventListener("keyup", (event) => {
  console.log('Keyup event')
  if (objectClickable(frontObject)) {
    frontObject.classList.add("active")
  }
})


function objectClickable(object) {

}

