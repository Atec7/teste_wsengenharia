document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('indicacaoForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const yourName = document.getElementById('yourName').value;
        const yourContact = document.getElementById('yourContact').value;
        const clientContact = document.getElementById('clientContact').value;
        const service = document.getElementById('service').value;

        const message = `INDICAÇÃO PARA PRESTAÇÃO DE SERVIÇO: \n Seu Nome: ${yourName} \n Nome Do Cliente: ${yourContact}\n Contato do Cliente: ${clientContact} \n Serviço Indicado: ${service}`;
        const whatsappUrl = `https://wa.me/5564992952748?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    });
});
