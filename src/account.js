// TEST DATA

var resultCurrent = {
  "tasks": [
    "task4", "task5", "task6"
  ]
}

var resultCompleted = {
  "tasks": [
    "task1", "task2", "task3"
  ]
}

var result ={
    "erjiang": {
      "completed": 0,
      "email": "eric.jiang.r@gmail.com",
      "first": "Eric",
      "last": "Jiang",
      "password": "text13"
    }
  }


function displayProfile(user,resultCurrent,resultCompleted){
  // Displaying default profile image
  document.querySelector("#profile-image").innerHTML = "<img id =\"profile-picture\" src = \"images/noprofile.jpg\" alt=\"profile\"/>";

  console.log(user.erjiang.email);
  console.log(Object.keys(user)[0]);

  // Displayig user info
  var personal_info = document.querySelector("#personal-description");
  personal_info.innerHTML = "<h3 class = \"section_title\">Personal Description</h3><p>Username: " + Object.keys(user)[0] + "</p><p>Email   : " + user[Object.keys(user)[0]].email +"</p>";

  // Displaying current-tasks 
  var current_tasks = document.querySelector("#current-tasks");
  var section_title = document.createElement('h3');
  section_title.innerHTML = "Current Tasks";
  section_title.classList.add("section_title");
  var tasklist = document.createElement('ul');
  tasklist.classList.add("list-group");
  tasklist.classList.add("list-group-flush");
  for(var i = 0; i < resultCurrent.tasks.length ; i++){
    var task = document.createElement('li');
    task.innerHTML = resultCurrent.tasks[i];
    task.classList.add("list-group-item");
    tasklist.append(task)
  }

  current_tasks.append(section_title);
  current_tasks.append(tasklist);

  var completed_tasks = document.querySelector("#completed-tasks");
  var section_title = document.createElement('h3');
  section_title.innerHTML = "Completed Tasks";
  section_title.classList.add("section_title");
  var tasklist = document.createElement('ul');
  tasklist.classList.add("list-group");
  tasklist.classList.add("list-group-flush");
  for(var i = 0; i < resultCompleted.tasks.length ; i++){
    var task = document.createElement('li');
    task.innerHTML = resultCompleted.tasks[i];
    task.classList.add("list-group-item");
    tasklist.append(task)
  }

  completed_tasks.append(section_title);
  completed_tasks.append(tasklist);
}

displayProfile(result,resultCurrent,resultCompleted);


