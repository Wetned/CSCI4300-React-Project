//sign up button popup
function signUp() {
    $("#dialog").dialog();
}

var num = 0;

function expandButton(parent) {
    var expandBtn = parent.appendChild(document.createElement("button"));
    expandBtn.innerHTML = "expand";
    expandBtn.setAttribute("class","expand-btn");
    expandBtn.setAttribute("class", "collapsible");
    expandBtn.setAttribute("id", num);
    num++;
    expandBtn.addEventListener("click", function() {
        // alert(this.id);
        this.classList.toggle("active");
        var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }); 
}

function deleteButton(parent) {
    var deleteBtn = parent.appendChild(document.createElement("button"));
    deleteBtn.innerHTML = "delete";
    deleteBtn.setAttribute("class","expand-btn");

    deleteBtn.onclick = function() {
        this.parentElement.remove();
    }}


// function collapse() {
//     var coll = document.getElementsByClassName("collapsible");
//     var i;

//     for (i = 0; i < coll.length; i++) {
//         coll[i].addEventListener("click", function() {
//             this.classList.toggle("active");
//             var content = this.nextElementSibling;
//                 if (content.style.maxHeight){
//                     content.style.maxHeight = null;
//                 } else {
//                 content.style.maxHeight = content.scrollHeight + "px";
//             } 
//         });
//     }
// }

//buttons and input box variables
var userInput = document.querySelector("#usrInput");
var inputButton = document.querySelector("#addBtn");
var inputList = document.querySelector("#myUL");
var loginButton = document.getElementById("login");

//add eventlistener
inputButton.addEventListener("click", addList);

loginButton.addEventListener("click", logInFunction);

//login function APPEARANCE ONLY
function logInFunction() {
    //document.getElementById("login_form").setAttribute("class", "loggedIn");
    var ln = document.getElementById("login");

    ln.setAttribute("class", "loginBtn");

    document.getElementById("login_form").innerHTML = "Welcome! You are logged in.";
    document.getElementById("login_form").appendChild(ln);

    document.getElementById("login_form").setAttribute("class", "loggedIn");

    //document.getElementById("header_bar").setAttribute("");
    if (document.getElementById("login").innerHTML === "logout") {
        document.getElementById("login").innerHTML = "login";
    }

    if (document.getElementById("login").innerHTML === "login") {
        document.getElementById("login").innerHTML = "logout";
    }
}

//add to list function
function addList() {
   let input = userInput.value;
    userInput.value = '';

    var node = document.createElement("li");
    node.setAttribute("class", "flex-item");
    node.setAttribute("id", "node1");

    var filler = document.createTextNode(input);
    filler.contentEditable = "true";
    //filler.setAttribute("class", "marginTen");

    var inpot = document.createElement("p");
    inpot.setAttribute("class", "marginTen");
    inpot.contentEditable = "true";

    //-------------------------------
    // editable text box expandable
    //-------------------------------
    var p = document.createElement("p");
    p.innerHTML = "Lorem ipsum dolor sit amet, "
    + "consectetur adipisicing elit, sed do eiusmod tempor"
    + "incididunt ut labore et dolore magna aliqua. Ut enim "
    + "ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo";
    
    p.setAttribute("class", "content");
    p.contentEditable = "true";

    // test image
    var img = document.createElement("img");
    img.src = "images/image_filler.png";
    img.setAttribute("class", "marginTen");
 
    node.appendChild(img);

    node.appendChild(filler);

    if (input === '') {
        node.appendChild(inpot);
    }
    expandButton(node);
    node.appendChild(p);
    deleteButton(node);

    inputList.appendChild(node);
//     collapse();
}
