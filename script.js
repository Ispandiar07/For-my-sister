document.addEventListener('DOMContentLoaded', () => {
    const poemButton = document.getElementById('poemButton');
    const poem = document.getElementById('poem');
    const container = document.querySelector('.container');

    // Анимация появления контейнера
    setTimeout(() => {
        container.style.opacity = 1;
    }, 300);

    const customPoem = `
        С днём рождения поздравляю<br>
        Тебя, милая сестра.<br>
        В этот день тебе желаю,<br>
        Чтоб всё было у тебя:<br><br>
        
        Красота, здоровье, силы,<br>
        Риск, удача и успех.<br>
        Чтобы все тебя любили,<br>
        Чтоб звучал почаще смех.<br><br>
        
        Чтобы были в жизни цели,<br>
        Чтобы ты достигла их,<br>
        Чтоб мечты не заржавели.<br>
        Счастья в жизни каждый миг!
    `;

    poemButton.addEventListener('click', () => {
        // Анимация появления стиха
        poem.innerHTML = customPoem;
        poem.classList.remove('hidden');
        poem.classList.add('poem-animation');

        // Создаем конфетти
        createConfetti();
    });

    function createConfetti() {
        const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ff85a2', '#ff5c8a'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = confetti.style.width;
                document.body.appendChild(confetti);

                // Удаляем конфетти после анимации
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, i * 100);
        }
    }
});
