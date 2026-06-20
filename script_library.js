// Данные о видеофрагментах
const clipsData = [
    // The Parent Trap
    {
        id: 1,
        title: "Friends Forever",
        subtitle: "Дружба на века",
        lessonTitle: "Friends Forever: Дружба на века",
        module: "friends",
        videoUrl: "videos/fragments/p1.mp4", 
        thumbnail: "foto/The_parent_trap.png",
        transript: [
            { original: "You've never seen your mom,", translation: "Ты никогда не видел свою маму," },
            { original: "and I’ve never seen my dad.", translation: "и я никогда не видел своего отца." },
        ]
    },
    {
        id: 2,
        title: "Friends Forever",
        subtitle: "Дружба на века",
        lessonTitle: "Friends Forever: Дружба на века",
        module: "friends",
        videoUrl: "videos/fragments/p2.mp4", 
        thumbnail: "foto/The_parent_trap.png",
        transript: [
            { original: "Hallie, we’re like twins.", translation: "Холли, мы как близнецы." },
        ]
    },
    {
        id: 3,
        title: "Friends Forever",
        subtitle: "Дружба на века",
        lessonTitle: "Friends Forever: Дружба на века",
        module: "friends",
        videoUrl: "videos/fragments/p3.mp4", 
        thumbnail: "foto/The_parent_trap.png",
        transript: [
            { original: "That's my mum.", translation: "Это моя мама." },
        ]
    },
    {
        id: 4,
        title: "Friends Forever",
        subtitle: "Дружба на века",
        lessonTitle: "Friends Forever: Дружба на века",
        module: "friends",
        videoUrl: "videos/fragments/p4.mp4", 
        thumbnail: "foto/The_parent_trap.png",
        transript: [
            { original: "That's my dad.", translation: "Это мой отец" },
        ]
    },
        {
        id: 5,
        title: "Friends Forever",
        subtitle: "Дружба на века",
        lessonTitle: "Friends Forever: Дружба на века",
        module: "friends",
        videoUrl: "videos/fragments/p5.mp4", 
        thumbnail: "foto/The_parent_trap.png",
        transript: [
            { original: "I only have a mother,", translation: "У меня есть только мама," },
            { original: "and you only have a father.", translation: "а у тебя есть только отец." }
        ]
    },
    // Jumanji: Welcome to the Jungle
    {
        id: 6,
        title: "Wild Adventures",
        subtitle: "Дикие приключения",
        lessonTitle: "Wild Adventures: Дикие приключения",
        module: "adventures",
        videoUrl: "videos/jungle.mp4",
        thumbnail: "foto/jumanji.png",
        transript: [
            { original: "Where’s my phone?", translation: "Где мой телефон?" },
            { original: "Why am I running so slow?!", translation: "Почему я бегу так медленно?!" },
            { original: "Like it or not, we have to do this together.", translation: "Нравится вам это или нет, мы должны сделать это вместе." },
            { original: "I don’t know, bro.", translation: "Я не знаю, бро." },
            { original: "So, sadly, this is where we part.", translation: "Ну что ж, к сожалению, здесь мы расстаёмся. / Итак, увы, на этом наши пути расходятся." },
        ]
    },
    // Wonder
    {
        id: 7,
        title: "Deep Talk",
        subtitle: "Глубокие беседы",
        lessonTitle: "Deep Talk: Глубокие беседы",
        module: "talk",
        videoUrl: "videos/fragments/w1.mp4",
        thumbnail: "foto/wonder.png",
        transript: [
            { original: "Auggie, you okay?", translation: "Огги, ты в порядке?" },
            { original: "Yeah. Everything's fine. I'm late for class.", translation: "Да. Всё в порядке. Я опаздываю на урок ." },
            { original: "Auggie, you know if you need help you can ask for it.", translation: "Огги, ты знаешь, если тебе понадобится помощь, ты можешь её попросить." },
            { original: "You’re not alone", translation: "Ты не один" },
            { original: "I know.", translation: "Я знаю." }
        ]
    },
    {
        id: 8,
        title: "Deep Talk",
        subtitle: "Глубокие беседы",
        lessonTitle: "Deep Talk: Глубокие беседы",
        module: "talk",
        videoUrl: "videos/fragments/w2.mp4",
        thumbnail: "foto/wonder.png",
        transript: [
            { original: "Can you hear me?", translation: "Ты меня слышишь?" },
            { original: "You can't blend in when you were born to stand out.", translation: "Ты не сможешь слиться с толпой, если родился, чтобы выделяться" }
        ]
    },
    {
        id:9,
        title: "Deep Talk",
        subtitle: "Глубокие беседы",
        lessonTitle: "Deep Talk: Глубокие беседы",
        module: "talk",
        videoUrl: "videos/fragments/w3.mp4",
        thumbnail: "foto/wonder.png",
        transript: [
            { original: "What about you? What's your name?", translation: "А как насчёт тебя? Как тебя зовут?" },
            { original: "- Summer.", translation: "— Саммер" },
            { original: "Wanna give it a shot?", translation: "Хочешь попробовать?" },
            { original: "When given the choice between being right or being kind...", translation: "Когда перед тобой стоит выбор между тем, чтобы быть правым, или быть добрым..." },
            { original: "choose kind.", translation: "выбирай доброту." },
            { original: "Hey, can I sit there?", translation: "Эй, можно мне там сесть?" },
            { original: "Sure.", translation: "Разумеется" },
            { original: "Newton's first law of motion.", translation: "Первый закон Ньютона" },
        ]
    },
    // Mamma Mia!
    {
        id: 10,
        title: "Festival Fun",
        subtitle: "Праздничное веселье",
        lessonTitle: "Festival Fun: Праздничное веселье",
        module: "festival",
        videoUrl: "videos/mamma.mp4",
        thumbnail: "foto/mama.png",
        transript: [
            { original: "You found him?", translation: "Ты нашёл его?" },
            { original: "Not exactly.", translation: "Не совсем" },
            { original: "Come on!", translation: "Давай же!» / «Пошли!" },
            { original: "to have fun", translation: "весело проводить время" },
            { original: "Oh, we are!", translation: "О, ещё как!» / «О, именно это мы и делаем!" },
        ]
    }
];

// DOM‑элементы
const clipsContainer = document.getElementById('clipsContainer');
const moduleFilter = document.getElementById('moduleFilter');
const clipVideo = document.getElementById('clipVideo');
const transriptList = document.getElementById('transriptList');
const player = document.getElementById('player');
const closePlayerBtn = document.getElementById('closePlayer');
const lessonTitle = document.getElementById('lessonTitle');

// Отображение фрагментов в библиотеке
function renderClips() {
    clipsContainer.innerHTML = '';
    clipsData.forEach(clip => {
        const clipElement = document.createElement('div');
        clipElement.className = 'clip-card';
        clipElement.innerHTML = `
            <img src="${clip.thumbnail}" alt="${clip.title}" class="clip-thumbnail">
            <div class="clip-info">
                <h3>${clip.title}</h3>
                <p><strong>Тема:</strong> ${clip.subtitle}</p>
            </div>
        `;
        clipElement.addEventListener('click', () => openPlayer(clip));
        clipsContainer.appendChild(clipElement);
    });
}

// Открытие плеера с выбранным фрагментом
function openPlayer(clip) {
    lessonTitle.textContent = clip.lessonTitle;
    clipVideo.src = clip.videoUrl;
    clipVideo.load();
    renderTransript(clip.transript);
    player.classList.remove('hidden');
    document.body.classList.add('modal-open');
}

// Отображение списка фраз для изучения
function renderTransript(phrases) {
    transriptList.innerHTML = '';
    phrases.forEach(phrase => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="original">${phrase.original}</span><br>
            <span class="translation">${phrase.translation}</span>
        `;
        transriptList.appendChild(li);
    });
}

// Закрытие плеера
function closePlayer() {
    clipVideo.src = '';
    player.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

// Фильтрация фрагментов по модулю
function filterClips() {
    const selectedModule = moduleFilter.value;

    if (selectedModule === 'all') {
        renderClips();
        return;
    }

    const filteredClips = clipsData.filter(clip => clip.module === selectedModule);

    clipsContainer.innerHTML = '';
    filteredClips.forEach(clip => {
        const clipElement = document.createElement('div');
        clipElement.className = 'clip-card';
        clipElement.innerHTML = `
            <img src="${clip.thumbnail}" alt="${clip.title}" class="clip-thumbnail">
            <div class="clip-info">
                <h3>${clip.title}</h3>
                <p><strong>Тема:</strong> ${clip.subtitle}</p>
            </div>
        `;
        clipElement.addEventListener('click', () => openPlayer(clip));
        clipsContainer.appendChild(clipElement);
    });
}

// Обработчики событий
moduleFilter.addEventListener('change', filterClips);
closePlayerBtn.addEventListener('click', closePlayer);

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

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderClips();
});
