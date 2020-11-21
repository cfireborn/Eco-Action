// TEST DATA

var daily = [ "daily1", "daily2" ]

var current = {
  "erjiang" : {
    "tasks" : [ "current1", "current2", "current3" ]
  }
}

var completed = {
  "erjiang" : {
    "tasks" : [ "finished1", "finished2", "finished3" ]
  }
}

var profile = { 
  "erjiang": {
    "completed": 3,
    "email": "eric.jiang.r@gmail.com",
    "first": "Eric",
    "last": "Jiang",
    "password": "text13"
  }
}
// DISPLAYING 

// displaying WELCOME Username part

function displayProfile(profile){
  document.querySelector(".section_title").innerHTML = "Welcome, " + Object.keys(profile)[0];

  var bio = document.querySelector("#profile");

  var profile_picture = document.createElement('div');
  profile_picture.innerHTML = "<img id =\"profile-picture\" src=\"images/noprofile.jpg\" alt=\"profile\"/>";
  profile_picture.classList.add('col-4');

  var info = document.createElement('div');
  info.innerHTML = "<p>" + Object.keys(profile)[0] + "</p>" + "<p>" + profile[Object.keys(profile)[0]].email + "</p>" + "<p> Finished " + profile[Object.keys(profile)[0]].completed + " Tasks!</p>";

  bio.append(profile_picture);
  bio.append(info);
}

// displaying Daily Tasks
function displayDailyTasks(daily){
  var dt = document.querySelector("#daily_task");

  for(var i = 0 ; i<daily.length ; i++)
  {
    var dt_item = document.createElement('div');
    dt_item.classList.add("col-3");
    dt_item.classList.add("px-3");
    dt_item.classList.add("task");
    dt_item.innerHTML = "<div class = \"row task-inside\">" + daily[i] + "</div><img id=\"check\" src=\"images/check.png\" alt =\"check\"/>";
    dt.append(dt_item);
  }
}


// displaying Finished Tasks
function displayFinishedTasks(completed){
  var ft = document.querySelector("#finished_task");

  for(var i = 0 ; i< completed[Object.keys(completed)[0]].tasks.length ; i++)
  {
    var ft_item = document.createElement('div');
    ft_item.classList.add("col-3");
    ft_item.classList.add("task");
    ft_item.innerHTML = "<div class = \"row task-inside\">" + completed[Object.keys(completed)[0]].tasks[i] + "</div><img id=\"delete\" src=\"images/delete.png\" alt =\"delete\"/>";
    ft.append(ft_item);
  }
}


// displaying Current Tasks
function displayCurrentTasks(current){
  var ct = document.querySelector("#current_task");

  for(var i = 0 ; i< current[Object.keys(current)[0]].tasks.length ; i++)
  {
    var ct_item = document.createElement('div');
    ct_item.classList.add("col-3");
    ct_item.classList.add("task");
    ct_item.innerHTML = "<div class = \"row task-inside\">" + current[Object.keys(current)[0]].tasks[i] + "</div><img id=\"check\" src=\"images/check.png\" alt =\"check\"/><img id=\"delete\" src=\"images/delete.png\" alt =\"delete\"/>";
    ct.append(ct_item);
  } 
}

displayProfile(profile);
displayDailyTasks(daily);
displayFinishedTasks(completed);
displayCurrentTasks(current);








