let button=document.querySelector(".btn");

let input=document.querySelectorAll("input");

button.addEventListener('click', check);

function check()
{
    let flag=1;
    input.forEach(i => {
        if(!i.checkValidity())
        {
            i.classList.add('invalid');
            flag=0;
        }
        else{
            i.classList.remove('invalid');
            i.classList.add('valid');
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