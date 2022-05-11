var bill = [
  "Electricity bill",
  "Mobile bill",
  "Broadband bill",
  "Food Expenses",
];

/* function to display input javascript array to make HTML list */
function doDisplay() {
  var result = "<ol>";
  // alert(bill)
  for (var i = 0; i < bill.length; i++) {
    result +=
      "<li>" +
      bill[i] +
      "</li>" +
      `<button onclick="doEdit(${i})">Edit</button>&nbsp;<button onclick="doDelete(${i})" >Delete</button><br><hr>`;
    +"<br>";
  }
  result += "</ol>";
  document.getElementById("mybill").innerHTML = result;
}

/* Function to perform push,shift,pop & unshift array operations */
function doTo(act) {
  var inputdata = document.getElementById("input").value;
  // alert(inputdata);
  switch (act) {
    case "push":
      bill.push(inputdata);
      // alert(bill);
      // console.log(bill);
      doDisplay();
      document.getElementById("input").value = "";

      break;
    case "pop":
      bill.pop();
      doDisplay();
      break;
    case "shift":
      bill.shift();
      doDisplay();
      break;
    case "unshift":
      bill.unshift(inputdata);
      // alert(bill);
      // console.log(bill);
      doDisplay();
      document.getElementById("input").value = "";
  }
}

/* function to edit a particular arraylist */
function doEdit(i) {
  document.getElementById("updateBox").value = bill[i];
  var elem = document.getElementById("updateBox").value;
  //  alert(elem)
  document.getElementById("updateBox").style.display = "block";
  document.getElementById("updateBtn").style.display = "block";
  document.getElementById("input").style.display = "none";
  document.getElementById("list").style.display = "none";
  document.getElementById("arrBtn").style.display = "none";
  document.getElementById("updateBox").value = elem;

  indexNo = i;
  // alert(indexNo);
}

/* function to update after edit a particular arraylist */
function updateArr() {
  var newUpdate = document.getElementById("updateBox").value;
  // alert(newUpdate);
  // console.log(newUpdate)
  bill.splice(indexNo, 1, newUpdate);
  doDisplay();
  document.getElementById("updateBtn").style.display = "none";
  document.getElementById("updateBox").style.display = "none";
  document.getElementById("input").style.display = "block";
  document.getElementById("list").style.display = "block";
  document.getElementById("arrBtn").style.display = "block";
}

/* function to delete a particular arraylist */
function doDelete(i) {
  // alert(i);
  bill.splice(i, 1);
  doDisplay();
  document.getElementById("updateBtn").style.display = "none";
  document.getElementById("updateBox").style.display = "none";
  document.getElementById("input").style.display = "block";
  document.getElementById("list").style.display = "block";
  document.getElementById("arrBtn").style.display = "block";
}
