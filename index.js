import './style.css';




// js for toggle form

let LogForm = document.getElementById("LogForm");
let RegForm = document.getElementById("RegForm");
let Indicator = document.getElementById("Indicator");

function register(){
    RegForm.style.transform = "translateX(0px)";
    LogForm.style.transform = "translateX(0px)";
}

function login(){
    RegForm.style.transform = "translateX(300px)";
    LogForm.style.transform = "translateX(300px)";
}