var emailid = document.querySelector(".email");
var button = document.querySelector(".checkbox");
var container2 = document.querySelector(".container2")
var container  = document.querySelector(".container")

var content = document.querySelector(".email2")

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

button.addEventListener("click",function(e){
        e.preventDefault(); 


    if (emailid.value.trim() === "") {
        alert("Email is empty");
    }
    else if (!validateEmail(emailid.value.trim() )){
        alert("email is not valid")
    }
    else{
        container2.style.display = "flex"
        container.style.display = "none"
        content.innerHTML = emailid.value.trim()
        emailid.value = "";                              // value reset karne


    }
}
  
)


var dismiss = document.querySelector(".dismiss")

dismiss.addEventListener("click",function(){
        location.reload();               //page refresh

})


