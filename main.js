const myform =document.querySelector('#my-form');
const name =document.querySelector('#name');
const email =document.querySelector('#email');
const msg =document.querySelector('.msg');
const userList =document.querySelector('#users');

myform.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    if(name.value===''|| email.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML='*All fields are mandatory!';
        
        setTimeout(()=>msg.remove(),3000);
    }
    else
    {
        const user=document.createElement('li');
        user.appendChild(document.createTextNode(`${name.value} : ${email.value}`));

        userList.appendChild(user);

        name.value='';
        email.value='';
    }
}