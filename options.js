function saveOptions() {
  var name = document.getElementById("organisation-name");
  localStorage["organisation-name"] = name.value;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 1000);
}

function restoreOptions() {
  var orgName = localStorage["organisation-name"];

  if (!orgName) {
    return;
  }
  var name = document.getElementById("organisation-name");
   name.value = localStorage["organisation-name"];
  
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('#save').addEventListener('click', saveOptions);
