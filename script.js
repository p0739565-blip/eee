// Данные о модулях и уроках
const modulesData = [
    //The Parent Trap
    {
        id: 1,
        title: "Friends Forever",
        subtitle: "Дружба на века",
        lessonTitle: "Friends Forever: Дружба на века",
        videoUrl: "videos/po.mp4",
        phrases: [
            { original: "I've never seen.", translation: "Я никогда не видел." },
            { original: "To have only ...", translation: "Иметь только ..." },
            { original: "That's my dad.", translation: "Это мой отец." },
            { original: "That's my mum.", translation: "Это моя мама." },
            { original: "We're like twins!", translation: "Мы как близнецы." }
        ]
    },
    //Jumanji: Welcome to the Jungle
    {
        id: 2,
        title: "Wild Adventures",
        subtitle: "Дикие приключения",
        lessonTitle: "Wild Adventures: Дикие приключения",
        videoUrl: "videos/jungle.mp4",
        phrases: [
            { original: "Wait a second.", translation: "Подожди секунду." },
            { original: "Like it or not.", translation: "Нравится тебе это или нет" },
            { original: "We have to do this together.", translation: "Мы должны сделать это вместе." },
            { original: "I don't know.", translation: "Я не знаю." },
            { original: "Where we part.", translation: "Там, где наши пути расходятся» / «Место нашей разлуки." }

        ]
    },
    //Wonder
    {
        id: 3,
        title: "Deep Talk",
        subtitle: "Глубокие беседы",
        lessonTitle: "Deep Talk: Глубокие беседы",
        videoUrl: "videos/wo.mp4",
        phrases: [
            { original: "Choose kind.", translation: "Выбирай доброту." },
            { original: "You're not alone.", translation: "Ты не один." },
            { original: "If they stare, let them stare.", translation: "если они глазеют (пялятся), пусть глазеют (пялятся)" },
            { original: "A great deal of courage.", translation: "Много мужества." },
            { original: "You can't blend in.", translation: "Ты не сможешь слиться с толпой" },
            { original: "Stand out.", translation: "Выделяйся" }
        ]
    },
    //Mamma Mia!
    {
        id: 4,
        title: "Festival Fun",
        subtitle: "Праздничное веселье",
        lessonTitle: "Festival Fun: Праздничное веселье",
        videoUrl: "videos/mamma.mp4",
        phrases: [
            { original: "You found him?", translation: "Ты нашёл его?" },
            { original: "Not exactly.", translation: "Не совсем" },
            { original: "Come on!", translation: "Давай же!» / «Пошли!" },
            { original: "to have fun", translation: "весело проводить время" },
            { original: "Oh, we are!", translation: "О, ещё как!» / «О, именно это мы и делаем!" },
        ]
    }
];

// DOM‑элементы
const modulesContainer = document.getElementById('modulesContainer');
const clipVideo = document.getElementById('clipVideo');
const transcriptList = document.getElementById('transcriptList');
const player = document.getElementById('player');
const closePlayerBtn = document.getElementById('closePlayer');
const lessonTitle = document.getElementById('lessonTitle');

// Отображение модулей на главной странице
function renderModules() {
    modulesContainer.innerHTML = '';
    modulesData.forEach(module => {
        const tile = document.createElement('div');
        tile.className = 'module-tile';
        tile.innerHTML = `
            <div class="tile-content">
                <h3>${module.title}</h3>
                <p>${module.subtitle}</p>
            </div>
        `;
        tile.addEventListener('click', () => openPlayer(module));
        modulesContainer.appendChild(tile);
    });
}

// Открытие плеера с выбранным модулем
function openPlayer(module) {
    lessonTitle.textContent = module.lessonTitle;
    clipVideo.src = module.videoUrl;
    clipVideo.load();
    renderTranscript(module.phrases);
    player.classList.remove('hidden');
    //document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
    player.classList.remove('hidden'); // Показываем модальное окно

    // Добавляем класс к body для блокировки прокрутки
    document.body.classList.add('modal-open');
}

// Отображение списка фраз для изучения
function renderTranscript(phrases) {
    transcriptList.innerHTML = '';
    phrases.forEach(phrase => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="original">${phrase.original}</span><br>
            <span class="translation">${phrase.translation}</span>
        `;
        transcriptList.appendChild(li);
    });
}

// Закрытие плеера
function closePlayer() {
    clipVideo.src = '';
    player.classList.add('hidden');
    //document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку

    // Убираем класс блокировки прокрутки
    document.body.classList.remove('modal-open');
}

// Закрытие по клику вне окна
window.addEventListener('click', function(event) {
    if (event.target === player) {
        closePlayer();
    }
});

// Закрытие по клавише ESC
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePlayer();
    }
});

// Обработчики событий
closePlayerBtn.addEventListener('click', closePlayer);

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderModules();
});
