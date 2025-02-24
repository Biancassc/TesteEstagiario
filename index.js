const form = document.getElementById('contactForm');
const obrigada = document.getElementById('Obrigada');

function validateForm (event){
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (!name || !email || !phone){
        alert('Por favor,preencha os campos solicitados!');
        return;
    }

    const formData = {
        name : name,
        email : email,
        phone : phone
    };
    console.log('Dados:', formData);
    form.style.display = 'none';
    obrigada.style.display = 'block';

}

form.addEventListener('submit', validateForm);