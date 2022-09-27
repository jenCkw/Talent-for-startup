
let form = document.querySelector('form');
let inpt_name = document.querySelector('[name="name"]')
let inpt_email = document.querySelector('[name="email"]')
let inpt_entrep = document.querySelector('[name="entrep"]')
let inpt_message = document.querySelector('[name="message"]')
let inpt_accesskey = document.querySelector('[name="accessKey"]')
let notif = document.querySelector('.notif')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch('https://api.staticforms.xyz/submit',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            name:inpt_name.value,
            email:inpt_email.value,
            message:inpt_message.value,
            accessKey:inpt_accesskey.value
        })
    }).then(()=>{
        notif.innerHTML = "Message envoyé"
        notif.style.display = 'block';
    }).catch(()=>{
        notif.innerHTML = "Erreur";
        notif.style.display = 'block';
    })
})