const state = {
    inputTodo: '',
    listChange: '',

}


state.listChange = document.getElementsByTagName("li");

let toDoList = jQuery.makeArray(state.listChange);



const addTodo = function (e) {
    state.inputTodo = $('#inputTodo').val();
    e.preventDefault();


    toDoList.push(state.inputTodo);
    console.log(toDoList);


    $('li:nth-child(1)').clone().appendTo("ul").find('p').replaceWith(state.inputTodo);


};

const removeTodo = function (e) {
    e.preventDefault();

    $('li:active').remove();

    console.log(toDoList);
};

const doneTodo = function () {

};




$('#replySubmit').on('click', addTodo)
$('.remove:active').on('click', removeTodo)
$('.check').on('click', doneTodo)