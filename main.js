function login(){
    username = localStorage.setItem("Username",document.getElementById("user").value)
    window.location = "Kwitter.html"
    console.log("login");
}