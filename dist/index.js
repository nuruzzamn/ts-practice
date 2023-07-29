"use strict";
const userFrom = document.querySelector("form");
const userName = document.querySelector("#name");
const userEamil = document.querySelector("#email");
const userFeedback = document.querySelector("#feedback");
const userCountry = document.querySelector("#country");
userFrom.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEamil.value,
        userCountry: userCountry.value,
        userfeedback: userFeedback.value,
    };
    console.log(data);
});
