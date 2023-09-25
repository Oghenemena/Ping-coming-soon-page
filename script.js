let inputMail = document.getElementById("input-mail")
let notifyMe = document.getElementById("notify")

notifyMe.addEventListener("click", submit);

function submit(){
    alert(`${inputMail.value}, you've been added to the list`)
}

