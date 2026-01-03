// Load tasks from cookies when the page loads
window.onload = function() {
    loadTasks();
};

function newTask() {
    let task = prompt("Please enter a new task:");
    if (task && task.trim() !== "") {
        addTodoToDOM(task);
        saveTasks();
    }
}

function addTodoToDOM(taskText) {
    let list = document.getElementById("ft_list");
    let div = document.createElement("div");
    div.className = "todo-item";
    div.innerHTML = taskText;
    
    div.onclick = function() {
        if (confirm("Do you really want to delete this task?")) {
            this.remove();
            saveTasks();
        }
    };
    
    list.insertBefore(div, list.firstChild);
}

// --- COOKIE MANAGEMENT ---

function saveTasks() {
    let todos = [];
    let listItems = document.querySelectorAll(".todo-item");
    
    // Loop backwards to preserve order (Newest on Top)
    for (let i = listItems.length - 1; i >= 0; i--) {
        todos.push(listItems[i].innerHTML);
    }

    // FIX 1: Set an Expiry Date (7 days)
    const date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    let expires = "; expires=" + date.toUTCString();

    // FIX 2: Use encodeURIComponent to handle special characters like ';'
    document.cookie = "ft_list=" + encodeURIComponent(JSON.stringify(todos)) + expires + "; path=/; SameSite=Strict";
}

function loadTasks() {
    let cookieValue = getCookie("ft_list");
    if (cookieValue) {
        try {
            // FIX 2: Decode the cookie value before parsing
            let todos = JSON.parse(decodeURIComponent(cookieValue));
            todos.forEach(function(task) {
                addTodoToDOM(task);
            });
        } catch (e) {
            console.error("Cookie parsing failed");
        }
    }
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
