function toggleActive(button) {
  button.classList.toggle("active");
}



document.addEventListener("DOMContentLoaded", function () {
  
  document.querySelector(".add").addEventListener("click", function () {
   
    const inputValue = document.querySelector(".list-input").value;

    
    if (inputValue.trim() !== "") {
      const newTaskButton = document.createElement("button");
      newTaskButton.className = "task";
      newTaskButton.innerHTML = "&#9634; &nbsp;" + inputValue;
      newTaskButton.addEventListener("click", function () {
        toggleActive(this);
      });

      document.querySelector(".task-box").appendChild(newTaskButton);

      document.querySelector(".list-input").value = "";
    }
  });
});


const button = document.querySelector('#add');
const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
   console.log('clicked')
})


