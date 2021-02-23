//import { char } from;
import { controls } from '../components/controls';

function interaction () { 
  let objectsClickable = document.querySelectorAll(".clickable")

  document.addEventListener("keyup", (event) => {
    if (event.key == controls["Interact"]) {
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
