let initials = document.querySelector("#initials");
const btn = document.querySelector("#btn");
initials.addEventListener('keydown', function(e){
    if( e.key.match(/[0-9.,<>?+:;}{@#$%^&*_=+)(]/) ) return e.preventDefault();
    });
btn.addEventListener('click', ()=>{
    let newInitials = initials.value.toLowerCase().trim().replace(/[ ]+/g, ' ');
    console.log(newInitials);
    let initialsArr = newInitials.split(" ");
    console.log(initialsArr);
    let lastName = initialsArr[0];
    let firstName = initialsArr[1];
    let secondName = initialsArr[2];
    lastName = lastName[0].toUpperCase()+lastName.slice(1);
    firstName = firstName[0].toUpperCase()+firstName.slice(1);
    secondName = secondName[0].toUpperCase()+secondName.slice(1);
    console.log(lastName,firstName,secondName);
    document.querySelector("#lastName").value=lastName;
    document.querySelector("#firstName").value=firstName;
    document.querySelector("#secondName").value=secondName;
})