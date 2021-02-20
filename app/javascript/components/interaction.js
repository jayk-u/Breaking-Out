//import { char } from;
import { controls } from '../components/controls';

function interaction () { 
  let objectsClickable = document.querySelectorAll(".clickable")
  console.log(controls);

  document.addEventListener("keyup", (event) => {
    if (event.key == interactKey) {
      objectsClickable.forEach((object) => {
        if (frontObject(object)) {
          object.classList.add("active")
        }
        document.addEventListener("keyup", (e) => {
          if (e == escape) {
            object.classList.remove("active")
          }
        });
      });
    };
  });


  function frontObject(object) {
    return object == char.nextElementSibling;
  }
}

export { interaction }
