const userFrom = document.querySelector("form") as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLInputElement;

const userEamil = document.querySelector("#email") as HTMLInputElement;

const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;

const userCountry = document.querySelector("#country") as HTMLSelectElement;

userFrom.addEventListener("submit", (event)=>{
    event.preventDefault();

    const data = {
        username: userName.value,
        useremail: userEamil.value,
        userCountry: userCountry.value,
        userfeedback: userFeedback.value,
    };
    console.log(data)
})