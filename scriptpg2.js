var b = document.getElementsByClassName("button")[1];

b.addEventListener("click", (event) => {
    document.getElementsByClassName("inner")[0].style.display = "block";
    document.getElementById("cont").style.filter = "blur(5px)";
    if (document.getElementsByClassName("card").length != 0) {
        document.getElementById("division").style.display = "none";



    }

})

function off() {
    document.getElementsByClassName("inner")[0].style.display = "none";
    document.getElementById("cont").style.filter = "blur(0px)";
}

function additem() {
    var div = document.createElement("div");
    div.innerHTML = '<div class="card"> <h2>Trip To Paris</h2> <div class="hidden" <hr style="margin-left: 20%;">  <h2 style="color: red;text-decoration: line-through;">Completed Task</h2><br>        <input type="checkbox" name="" id=""> <span style="font-size: x-large;">Pending Task</span></div></div>';
    var content = document.getElementsByClassName("content");
    var card = document.getElementsByClassName("card");
    for (let i = 0; i < card.length; i++) {
        card[i].style.backgroundColor = "white";
    }
    document.getElementById("cont").style.filter = "blur(5px)";
    content[0].appendChild(div);
    if (document.getElementsByClassName("card").length != 0) {
        document.getElementById("division").style.display = "none";

    }
}
var d = document.createElement("div");
var h = document.createElement("h1");
var c = document.createTextNode("No List To Be Displayed");
h.style.color = "white";
h.appendChild(c);
d.appendChild(h);
d.id = "division";
document.getElementById("cont").appendChild(d);