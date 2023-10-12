/*Kod skriven av Sandra Knutsson
Todo-list*/

//Initial references
const newtodobutton = document.getElementById("newtodobutton");
const todolist = document.getElementById("todolist");
const newtodo_inputfield = document.getElementById("newtodo");
const clearbutton = document.getElementById("clearbutton");
const completetask = document.getElementById("completetask");
const checked = document.getElementsByClassName("checked");
const deleteChecked = document.querySelectorAll(".checked");


//Adds task to list when clicking add-button.
newtodobutton.addEventListener("click", function () {
    if (newtodo_inputfield.value.length >= 5) {
        let article = document.createElement("ARTICLE");
        article.innerText = newtodo_inputfield.value;
        todolist.appendChild(article);

        //Resets inputfield to empty when task has been added.
        newtodo_inputfield.value = "";
        saveData();

    } else if (newtodo_inputfield.value.length < 5) {

    }


})

// 
document.addEventListener("keyup", function () {
    if (newtodo_inputfield.value.length < 5) {

        document.getElementById("message").innerHTML = "Ange minst fem tecken!";
    } else if (newtodo_inputfield.value.length == 5) {
        document.getElementById("message").innerHTML = "";
    }
})



//Removes all tasks from list.
clearbutton.addEventListener("click", function () {
    let cleartasks = document.getElementById("todolist");
    cleartasks.innerHTML = "";
    saveData();
})



//Save todos in local storage.
function saveData() {
    localStorage.setItem("data", todolist.innerHTML);

    showTask();
}

function showTask() {
    todolist.innerHTML = localStorage.getItem("data");

    let articles = document.getElementsByTagName("article");


    for (let i = 0; i < articles.length; i++) {
        articles[i].addEventListener("click", function (event) {
            event.target.remove();
            saveData();
        })

    }

}
showTask();