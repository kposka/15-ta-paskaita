function tabsChange(target, name){
  var tabs = document.getElementsByClassName("tab");
  var tab = document.getElementById(name);
  var button = document.getElementsByTagName("button");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    tab.style.display ="block";
  }
}
var booking = document.getElementById("booking");
var reservation = document.getElementById("reservation");
reservation.addEventListener("click", function(){
 var div = document.createElement("div");
 div.style.display = "flex";
 div.style.flexDirection="column";
 div.classList.add('input');
 div.innerHTML = "<input type='text' name='vardas' value='vardas'><input type='text' name='pavarde' value='pavarde'><input type='time' name='laikas' value='0000'><button id ='submit' type='submit'> Rezervuoti </button>";
 reservation.style.display="none";
 booking.append(div);
});

// var submit = document.getElementById("submit");
// submit.addEventListener("click", function(){
//   div.style.display = "none";
//   reservation.style.display ="block";
