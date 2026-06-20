const exercisesData = {
    // Модуль 1: Friends Forever
    friends: {
        translation: [
            { original: "I only have a mother.", options: ["У меня есть мама и папа.", "У меня только мама.", "У меня только папа."], correct: 1, explanation: "Перевод фразы 'only have' — 'только есть'." },
            { original: "My best friend lives next door.", options: ["Мой лучший друг живет в соседнем доме.", "Мой друг живет далеко.", "Я живу один."], correct: 0, explanation: "Next door — по соседству." }
        ],
        fill: [
            { sentence: "She is my best ___.", correct: "friend", explanation: "Friend — друг." }
        ],
        comprehension: []
    },

    // Модуль 2: Wild Adventures
    adventures: {
        translation: [
            { original: "We went hiking in the mountains.", options: ["Мы ходили в поход в горы.", "Мы плыли на лодке.", "Мы смотрели фильм."], correct: 0, explanation: "Hiking — пеший туризм." },
            { original: "The river was too deep to cross.", options: ["Река была слишком глубокой, чтобы перейти.", "Мост был сломан.", "Мы нашли брод."], correct: 0, explanation: "Deep — глубокий." }
        ],
        fill: [
            { sentence: "The ___ was shining brightly.", correct: "sun", explanation: "Sun — солнце." }
        ],
        comprehension: []
    },

    // Модуль 3: Deep Talk
    talk: {
        translation: [
            { original: "Sometimes I feel lonely.", options: ["Иногда я чувствую себя одиноко.", "Я всегда счастлив.", "Мне скучно."], correct: 0, explanation: "Lonely — одинокий." },
            { original: "What do you think about that?", options: ["Что ты думаешь об этом?", "Ты согласен?", "Расскажи подробнее."], correct: 0, explanation: "Прямой перевод вопроса." }
        ],
        fill: [
            { sentence: "I need to ___ my feelings.", correct: "express", explanation: "Express — выражать." }
        ],
        comprehension: []
    },

    // Модуль 4: Festival Fun
    festival: {
        translation: [
            { original: "The fireworks were amazing!", options: ["Фейерверк был потрясающим!", "Концерт был скучным.", "Погода испортилась."], correct: 0, explanation: "Amazing — удивительный, потрясающий." },
            { original: "We ate traditional food.", options: ["Мы ели традиционную еду.", "Мы танцевали всю ночь.", "Мы купили сувениры."], correct: 0, explanation: "Traditional — традиционный." }
        ],
        fill: [
            { sentence: "Everyone was wearing colorful ___.", correct: "costumes", explanation: "Costumes — костюмы." }
        ],
        comprehension: []
    }
};

// Названия модулей
const modules = [
    { id: "friends", name: "Friends Forever", subtitle: "Дружба на века" },
    { id: "adventures", name: "Wild Adventures", subtitle: "Дикие приключения" },
    { id: "talk", name: "Deep Talk", subtitle: "Глубокие беседы" },
    { id: "festival", name: "Festival Fun", subtitle: "Праздничное веселье" }
];


// DOM-элементы
const exerciseTiles = document.querySelectorAll('.exercise-tile');
const exerciseModal = document.getElementById('exerciseModal');
const exerciseTitle = document.getElementById('exerciseTitle');
const moduleSelection = document.getElementById('moduleSelection');
const moduleButtons = document.getElementById('moduleButtons');
const exerciseContent = document.getElementById('exerciseContent');
const currentExercise = document.getElementById('currentExercise');
const nextExerciseBtn = document.getElementById('nextExercise');
const finishExerciseBtn = document.getElementById('finishExercise');
const closeExerciseBtn = document.getElementById('closeExercise');

// Текущее состояние
let currentExerciseType = '';
let currentModule = '';
let currentExerciseIndex = 0;
let score = 0;

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Обработчики для выбора типа упражнения
    exerciseTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const type = tile.getAttribute('data-type');
            openExerciseType(type);
        });
    });

    // Обработчики кнопок
    closeExerciseBtn.addEventListener('click', closeExercise);
    nextExerciseBtn.addEventListener('click', nextExercise);
    finishExerciseBtn.addEventListener('click', finishExercise);

    // Закрытие по ESC
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeExercise();
    });
});

// Открытие типа упражнения
function openExerciseType(type) {
    currentExerciseType = type;
    exerciseTitle.textContent = getExerciseTitle(type);
    moduleSelection.classList.remove('hidden');
    exerciseContent.classList.add('hidden');
    renderModuleButtons();
    exerciseModal.classList.remove('hidden');
}

// Отображение кнопок выбора модуля
function renderModuleButtons() {
    moduleButtons.innerHTML = '';
    modules.forEach(module => {
        const button = document.createElement('button');
        button.className = 'btn btn-module';
        button.textContent = module.name;
        button.onclick = () => selectModule(module.id);
        moduleButtons.appendChild(button);
    });
}

// Выбор модуля
function selectModule(moduleId) {
    currentModule = moduleId;
    
    // 1. Скрываем блок выбора модулей
    moduleSelection.classList.add('hidden');
    
    // 2. Показываем контент упражнений
    exerciseContent.classList.remove('hidden');

    // 3. Сбрасываем счетчики
    currentExerciseIndex = 0;
    score = 0;

    // 4. Логика переключения кнопок/крестиков
    const closeBtn = document.getElementById('closeExercise');
    const backBtn = document.getElementById('backToModules');
    
    // Скрываем крестик, показываем стрелку "Назад"
    closeBtn.classList.add('hidden-close'); 
    backBtn.classList.remove('hidden');

    // Загружаем первое упражнение
    loadExercise();
}


// Обработчик кнопки "Назад к модулям"
document.getElementById('backToModules').addEventListener('click', () => {
    // 1. Скрываем контент упражнений
    exerciseContent.classList.add('hidden');
    
    // 2. Показываем блок выбора модулей
    moduleSelection.classList.remove('hidden');
    
    // 3. Возвращаем кнопки в исходное состояние
    const closeBtn = document.getElementById('closeExercise');
    const backBtn = document.getElementById('backToModules');
    
    closeBtn.classList.remove('hidden-close'); // Показываем крестик
    backBtn.classList.add('hidden');            // Скрываем стрелку
    
    // Опционально: можно сбросить прогресс, если нужно, 
    // но сейчас мы просто возвращаем экран выбора.
});


// Загрузка упражнения
function loadExercise() {
    const exercises = exercisesData[currentModule][currentExerciseType];
    const exercise = exercises[currentExerciseIndex];

    currentExercise.innerHTML = '';

    if (currentExerciseType === 'translation') {
        renderTranslationExercise(exercise);
    } else if (currentExerciseType === 'fill') {
        renderFillExercise(exercise);
    } else if (currentExerciseType === 'comprehension') {
        renderComprehensionExercise(exercise);
    }
}

// Отображение упражнения на перевод
function renderTranslationExercise(exercise) {
    let html = `
        <p><strong>${exercise.original}</strong></p>
        <div class="options">`;

    exercise.options.forEach((option, index) => {
        html += `
            <label class="option">
                <input type="radio" name="translation" value="${index}">
                ${option}
            </label>`;
    });

    html += `</div>
        <button class="btn btn-primary" onclick="checkTranslation()">Проверить</button>
        <div id="feedback" class="feedback hidden"></div>`;

    currentExercise.innerHTML = html;
}

// Проверка ответа для перевода
function checkTranslation() {
    const selected = document.querySelector('input[name="translation"]:checked');
    const feedback = document.getElementById('feedback');

    if (!selected) {
        feedback.textContent = 'Выберите вариант ответа!';
        feedback.className = 'feedback error';
        feedback.classList.remove('hidden');
        return;
    }

    const isCorrect = parseInt(selected.value) === exercisesData[currentModule][currentExerciseType][currentExerciseIndex].correct;

    if (isCorrect) {
        score++;
        feedback.textContent = 'Правильно! ' + (exercisesData[currentModule][currentExerciseType][currentExerciseIndex].explanation || '');
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = 'Неверно. Попробуйте ещё раз!';
        feedback.className = 'feedback error';
    }

    feedback.classList.remove('hidden');
    nextExerciseBtn.classList.remove('hidden');
}

// Отображение упражнения на заполнение пропусков
function renderFillExercise(exercise) {
    let html = `
        <p>${exercise.sentence.replace('__', '<input type="text" id="fillInput" placeholder="Введите слово">')}</p>
        <button class="btn btn-primary" onclick="checkFill()">Проверить</button>
        <div id="feedback" class="feedback hidden"></div>`;

    currentExercise.innerHTML = html;
}

// Проверка заполнения пропусков
function checkFill() {
    const input = document.getElementById('fillInput');
    const feedback = document.getElementById('feedback');
    const correct = exercisesData[currentModule][currentExerciseType][currentExerciseIndex].correct;

    if (input.value.toLowerCase() === correct.toLowerCase()) {
        score++;
        feedback.textContent = 'Правильно! ' + (exercisesData[currentModule][currentExerciseType][currentExerciseIndex].explanation || '');
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `Неверно. Правильный ответ: "${correct}"`;
        feedback.className = 'feedback error';
    }

    feedback.classList.remove('hidden');
    nextExerciseBtn.classList.remove('hidden');
}

// Отображение упражнения на понимание текста
function renderComprehensionExercise(exercise) {
    let html = `<pre>${exercise.dialog}</pre>`;

    exercise.questions.forEach((q, index) => {
        html += `
            <p><strong>${q.question}</strong></p>
            <div class="options">`;
        q.options.forEach((option, optIndex) => {
            html += `
                <label class="option">
                    <input type="radio" name="comprehension${index}" value="${optIndex}">
            ${option}
        </label>`;
        });
        html += '</div>';
    });

    html += `<button class="btn btn-primary" onclick="checkComprehension()">Проверить</button>
        <div id="feedback" class="feedback hidden"></div>`;

    currentExercise.innerHTML = html;
}

// Проверка понимания текста
function checkComprehension() {
    const questions = exercisesData[currentModule][currentExerciseType][currentExerciseIndex].questions;
    const feedback = document.getElementById('feedback');
    let correctCount = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="comprehension${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            correctCount++;
        }
    });

    score += correctCount;
    feedback.textContent = `Правильно ${correctCount} из ${questions.length} вопросов!`;
    feedback.className = 'feedback correct';
    feedback.classList.remove('hidden');
    nextExerciseBtn.classList.remove('hidden');
}

// Следующее упражнение
function nextExercise() {
    currentExerciseIndex++;
    const exercises = exercisesData[currentModule][currentExerciseType];

    if (currentExerciseIndex < exercises.length) {
        loadExercise();
        nextExerciseBtn.classList.add('hidden');
        finishExerciseBtn.classList.add('hidden');
    } else {
        finishExercise();
    }
}

// Завершение упражнения
function finishExercise() {
    currentExercise.innerHTML = `
        <h3>Упражнение завершено!</h3>
        <p>Ваш результат: ${score} из ${exercisesData[currentModule][currentExerciseType].length}</p>
        <button class="btn btn-success" onclick="restartExercise()">Пройти снова</button>`;
    nextExerciseBtn.classList.add('hidden');
    finishExerciseBtn.classList.add('hidden');
}

// Перезапуск упражнения
function restartExercise() {
    currentExerciseIndex = 0;
    score = 0;
    loadExercise();
}
// Закрытие модального окна (крестик)
function closeExercise() {
    const modal = document.getElementById('exerciseModal');
    const closeBtn = document.getElementById('closeExercise');
    const backBtn = document.getElementById('backToModules');
    
    modal.classList.add('hidden');
    
    // Возвращаем интерфейс в исходное состояние на случай повторного открытия
    closeBtn.classList.remove('hidden-close');
    backBtn.classList.add('hidden');
    
    // Сбрасываем видимость блоков внутри модалки, чтобы при следующем открытии всё было чисто
    document.getElementById('moduleSelection').classList.remove('hidden');
    document.getElementById('exerciseContent').classList.add('hidden');
}


// Вспомогательные функции
function getExerciseTitle(type) {
    const titles = {
        translation: 'Выбор правильного перевода',
        fill: 'Заполнение пропусков',
        comprehension: 'Понимание текста'
    };
    return titles[type] || 'Упражнение';
}
