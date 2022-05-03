$(document).ready(async function(){
    const todos = await $.getJSON('/todos/api')
    console.log(todos)
    showTodos(todos)

    $('#inputField').focus();

    $('#inputForm').on('submit', function(e){
        e.preventDefault();
        createTodo();
    })

    $('#todo-list').on('click', '.text', function(){
        updateTodo($(this))
    })

    $('#todo-list').on('click', '.delete', function(){
        removeTodo($(this).parent())
    })
})

function showTodos (todos) {
    for(let item of todos) {
        showTodo(item)
    }
}

function showTodo (todo) {
    let elem = $(`<li><span class="text ${todo.isCompleted ? 'completed' : ''}">${todo.text}</span><span class="delete"> x </span></li>`)
    $('#todo-list').prepend(elem);
    elem.data('id', todo._id)
    elem.data('isCompleted', todo.isCompleted)
}

async function updateTodo(elem){
    const updatedTodo = await $.ajax({
        type: 'PUT',
        url : `/todos/api/${elem.parent().data('id')}`,
        data: { isCompleted: !elem.parent().data('isCompleted')}
    })
    elem.toggleClass('completed')
}

async function removeTodo(elem){
    const deletedTodo = await $.ajax({
        type :'Delete',
        url: `/todos/api/${elem.data('id')}`
    })
    elem.remove();
}

async function createTodo(){
    const userInput = $('#inputField').val();
    console.log(userInput)
    const createdTodo = await $.post('/todos/api', {text: userInput})
    $('#inputField').val('');
    $('#inputField').focus();
    showTodo(createdTodo);

}