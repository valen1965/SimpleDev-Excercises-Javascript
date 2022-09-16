      // newPageTitle = 'Title changed!';
      // document.title = newPageTitle;  
      
      // const btn = document.createElement("button1");
      // btn.innerHTML = "Click Me";
      // document.body.appendChild(btn);
      // btn.style.outline = '#0000FF solid'
      // btn.style.outlineWidth = '1px';
      // btn.style.outlineColor = 'red';
      
      
    // Todo List Practical App.  
      
      // MVC -  Model   View  Controller

      // Model Section
    let todos;  

    // // Retrieve data from local storage
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    
    if (Array.isArray(savedTodos)) {
       todos = savedTodos;
     } else {
      todos = [{
          title: 'Get Groceries', 
          dueDate: '04-10-2021',
          id: 'id1'
      },    {
          title: 'Wash Car', 
          dueDate: '07-10-2021',
          id:'id2' 
      },    {
          title: 'Make Dinner',
          dueDate: '09-10-2022',
          id:'id3'
      },    {
         title: 'Do Laundry',
         dueDate: '11-10-2021',
         id:'id4'
      }];
    }
      
      // Code that creates a todo
      function createTodo(title, dueDate) {
        const id = '' + new Date().getTime();

      todos.push({
        title: title,
        dueDate: dueDate,
        id: id
       });

       saveTodos();
      }

       render(); 
      // Code that deletes a todo
      function removeTodo(idToDelete) {
        todos = todos.filter(function(todo){
          if (todo.id === idToDelete) {
            return false;
          } else {
            return true;
          }
        });
        saveTodos();
      }
       

      function saveTodos() {
        //localStorage.setItem('todos',...todos );
        localStorage.setItem('todos', JSON.stringify(todos));
      }


      // Controller Section

      function addTodo() {
        const textbox = document.getElementById('todo-title');
        const title = textbox.value;
        
        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;
            
      createTodo(title, dueDate);
      render();
      
    }

    function deleteTodo(event) {
      const deleteButton = event.target;
      const idToDelete = deleteButton.id;

      removeTodo(idToDelete);
      render();
    }


    // View section

    function render() {
      // reset out array to zero;
      document.getElementById('todo-list').innerHTML = '';
      document.getElementById('todo-title').value = '';
      
      
      todos.forEach(function (todo) {
      const element = document.createElement('div');
      element.innerText = todo.title + ' ' + todo.dueDate;
      
      const deleteButton = document.createElement('button');
      deleteButton.innerText = ('Delete');
      deleteButton.style = 'margin-left: 40px;'; 
      deleteButton.onclick = deleteTodo;
      deleteButton.id = todo.id;
      element.appendChild(deleteButton);


      const todoList = document.getElementById("todo-list");
      todoList.appendChild(element);
         
    });
    }    