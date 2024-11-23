// Exemplo simples de interação: mostrar um alerta quando o formulário for enviado
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio real do formulário
    alert('Mensagem enviada com sucesso!');
});
