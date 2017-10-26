$(document).ready(function(){
    
        var tasks = [];
        var done = [];
        function listTasks() {
            const tasksDisplay1 = tasks.map((x, i) => `<li id="${i}">${x}<hr></li>`);

            $("#todo-list").html(tasksDisplay1.join(''));
        }
    
        
        function listDone() {
            const tasksDisplay2= done.map((x, i) => `<li id="${i}">${x}<hr></li>`);
            
                        $("#done-list").html(tasksDisplay2.join(''));
        }
    
        
    
        $('#add-task').submit(function() {
            event.preventDefault();
            tasks.push($('#task-value').val());
            listTasks();
            $("#task-value").val("");
        });
    
        $("#todo-list").on("click", 'li', function() {
            done.push($(this).text());
            tasks.splice($(this).attr('id'));
            $(this).remove();
            listDone();
        });
    
    });