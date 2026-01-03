$(document).ready(function() {
    loadTasks();
    // Bind "New" button click (assume button has id="newBtn")
    $('#newBtn').click(function() {
        let task = prompt("Please enter a new task:");
        if (task && task.trim() !== "") {
            addTodo(task);
            saveTasks();
        }
    });
    function addTodo(text) {
        // Create div with jQuery
        let $div = $('<div class="todo-item">' + text + '</div>');
        // Add click event to remove
        $div.click(function() {
            if (confirm("Do you really want to delete this task?")) {
                $(this).remove(); // jQuery remove
                saveTasks();
            }
        });
        // Prepend adds it to the top of the list
        $('#ft_list').prepend($div);
    }
    function saveTasks() {
        let todos = [];
        // Loop through all items
        $('.todo-item').each(function() {
            // Unshift to keep order correct when saving (since we prepend on load)
            todos.unshift($(this).text());
        });
        document.cookie = "ft_list=" + JSON.stringify(todos) + ";path=/;SameSite=Strict";
    }
    function loadTasks() {
        let cookieValue = getCookie("ft_list");
        if (cookieValue) {
            let todos = JSON.parse(cookieValue);
            todos.forEach(t => addTodo(t));
        }
    }
    // getCookie function remains standard JS (jQuery doesn't handle cookies natively without plugins)
    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
});
