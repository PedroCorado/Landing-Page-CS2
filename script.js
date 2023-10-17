document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        const pergunta = item.querySelector('.pergunta');
        const resposta = item.querySelector('.resposta');

        pergunta.addEventListener('click', function () {
            if (resposta.style.display === 'block' || resposta.style.display === '') {
                resposta.style.display = 'none';
            } else {
                resposta.style.display = 'block';
            }
        });
    });
});
