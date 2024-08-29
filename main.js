    document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    var messageDiv = document.getElementById('message');

        if (campoB > campoA) {
        messageDiv.textContent = 'Formulário válido! Campo B é maior que Campo A.';
        messageDiv.className = 'message success';
    } else {
        messageDiv.textContent = 'Formulário inválido! Campo B deve ser maior que Campo A.';
        messageDiv.className = 'message error';
    }
});