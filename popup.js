function onLoad() {
  var orgName = localStorage["organisation-name"];
  if (orgName) {
    document.getElementById("container").className = "";
    document.getElementById("timer").setAttribute("src","http://" + orgName + ".letsfreckle.com/timer");
  } else {
    document.getElementById("container").className = "error";
  }
}
window.onload = onLoad();
