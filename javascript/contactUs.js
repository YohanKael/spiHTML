fetch('header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);
fetch('footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);


const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
        .then((response) => {
            console.log(response.text);
            alert("Mensagem Enviada com Sucesso")
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
}