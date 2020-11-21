// TEST DATA 

var results =   
{"users" : {
  "erjiang" : {
    "completed" : 3,
    "email" : "eric.jiang.r@gmail.com",
    "first" : "Eric",
    "last" : "Jiang",
    "password" : "test13"
  },
  "erjiang2" : {
    "completed" : 2,
    "email" : "erjiang@usc.edu",
    "first" : "Eric",
    "last" : "Jiang",
    "password" : "newpassword"
  }
}
};

// DISPLAYING

// displaying leaderboard items
function displayLeaderboard(results){
  var leaderboard = document.querySelector("#leaderboard");
  console.log(results);
  var ranking = 1;
  for(var user in results["users"]){
    
    var row = document.createElement('tr');
    var rank = document.createElement('th');
    rank.innerHTML = ranking++;
    rank.classList.add("rank");
    rank.setAttribute("scope","row");
  
    var profile_img = document.createElement('td');
    profile_img.innerHTML = "<img class = \"profile_picture\" src =\"images/noprofile.jpg\" alt = \"profile\"/>";
    var username = document.createElement('td');
    username.innerHTML = user;
    var completed = document.createElement('td');
    console.log(results["users"][user]["completed"]);
  
    completed.innerHTML = "Finished " + results["users"][user]["completed"] + " tasks!";
  
    row.append(rank);
    row.append(profile_img);
    row.append(username);
    row.append(completed);
    leaderboard.append(row);
  
  }
}

displayLeaderboard(results)


