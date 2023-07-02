
const form = document.getElementById('myForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(e) {
e.preventDefault();
const campoA = parseInt(document.getElementById('campoA').value);
const campoB = parseInt(document.getElementById('campoB').value);

if (campoB > campoA) {
    messageDiv.textContent = 'Formulário válido!';
    messageDiv.classList.remove('invalid');
    messageDiv.classList.add('valid');
} else {
    messageDiv.textContent = 'Formulário inválido! O número B deve ser maior que o número A.';
    messageDiv.classList.remove('valid');
    messageDiv.classList.add('invalid');
}
});
