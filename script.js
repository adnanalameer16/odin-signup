let button=document.querySelector(".btn");
let button2=document.querySelector(".btn2");

let login=document.querySelector(".linklog");
let create=document.querySelector(".linkcreate");

let input=document.querySelectorAll("input");

button.addEventListener('click', check);
button2.addEventListener('click', check);

login.addEventListener('click', () => {
    document.querySelector(".login").style.display="flex";
    document.querySelector(".createACCT").style.display="none";
    document.querySelector(".button2").style.display="block";
    document.querySelector(".button").style.display="none";
});

create.addEventListener('click', () => {
    document.querySelector(".login").style.display="none";
    document.querySelector(".createACCT").style.display="flex";
    document.querySelector(".button2").style.display="none";
    document.querySelector(".button").style.display="block";
});

function check()
{
    let flag=1;
    input.forEach(i => {
        const isVisible = i.offsetParent !== null; 
    
        if (isVisible) {
            if (!i.checkValidity()) {
                i.classList.add('invalid');
                i.classList.remove('valid');
                flag = 0;
            } else {
                i.classList.remove('invalid');
                i.classList.add('valid');
            }
        }
    });

    let password=document.querySelector("#password").value;
    let confirmPassword = document.querySelector('#confirm-password').value;


    if (password === confirmPassword) {
        document.querySelector('#confirm-password').classList.remove('invalid');
        document.querySelector('#confirm-password').classList.add('valid');
    } else {
        console.log("incorrect pass");
        document.querySelector('#confirm-password').classList.remove('valid');
        document.querySelector('#confirm-password').classList.add('invalid');
        flag=0;
    }



    if (flag===1)
    {
        console.log("all valid");
    }
}