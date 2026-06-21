const exercisesData = {
    // Модуль 1: Friends Forever
    friends: {
          translation: [
        {
            original: "I only have a mother.",
            explanation: "Фраза используется, когда человек говорит, что из родителей у него есть только мама. Слово only означает «только».",
            structure: "I have a mother. → У меня есть мама.\nI only have a mother. → У меня только мама.",
            examples: [
                "I only have a mother. My father is not with us.",
                "She only has a mother."
            ],
            translationOptions: [
                "a) У меня есть мама и папа.",
                "b) У меня только мама.",
                "c) У меня только папа."
            ],
            correctTranslation: 1,
            vocabularyOptions: [
                "a) тоже",
                "b) никогда",
                "c) только"
            ],
            correctVocabulary: 2,
            feedbackCorrect: "Правильно! 'Only' переводится как «только».",
            feedbackIncorrect: "Неверно. Правильный ответ: 'b) У меня только мама.' и 'c) только'."
        },
        // Второе упражнение (новое)
        {
            original: "I've never seen my dad.",
            explanation: "Фраза построена в Present Perfect.",
            structure: "I have seen → Я видел(а).\nI have never seen → Я никогда не видел(а).",
            contraction: "I have = I've",
            examples: [
                "I've never seen my dad.",
                "I've never been to London.",
                "I've never met her."
            ],
            note: "never = никогда.",
            fillOptions: [
                "a) never",
                "b) always",
                "c) very"
            ],
            correctFill: 0,
            meaningOptions: [
                "a) Я часто вижу папу.",
                "b) Я никогда не видел папу.",
                "c) Я увидел папу вчера."
            ],
            correctMeaning: 1,
            feedbackCorrect: "Правильно! Предложение означает «Я никогда не видел(а) своего папу».",
            feedbackIncorrect: "Неверно. Правильный ответ: 'a) never' и 'b) Я никогда не видел папу.'"
        }
    ],
        fill: [
            { sentence: "She is my best ___.", correct: "friend", explanation: "Friend — друг." }
        ],
         comprehension: [
        {
            dialog: `A: That's my mom.
                     B: Really? You look the same!
                     A: Yes, we're like twins!
                     B: What about your dad?
                     A: I've never seen my dad. I only have a mother.`,
            questions: [
                   {
                        question: 'Who is the woman in the dialog?',
                        options: ['a) His teacher', 'b) His mom', 'c) His sister'],
                        correct: 1
                    },
                    {
                        question: 'Are they similar?',
                        options: ['a) Yes', 'b) No'],
                        correct: 0
                    },
                    {
                        question: 'Has he seen his dad?',
                        options: ['a) Yes', 'b) No'],
                        correct: 1
                    },
                    {
                        question: 'Does he only have a mother?',
                        options: ['a) Yes', 'b) No'],
                        correct: 0
                    }
                    ]
        }
                    ]
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
    closeExerciseBtn.addEventListener('click', closeExercise);

    // Закрытие по ESC
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeExercise();
    });
    // Закрытие по клику вне окна
    window.addEventListener('click', function(event) {
    if (event.target === exerciseModal) {
        closeExercise();
    }
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
    // Проверяем, что все глобальные переменные установлены
    if (!currentModule || !currentExerciseType || currentExerciseIndex === undefined) {
        console.error('Недостаточно данных для загрузки упражнения. Проверьте: currentModule, currentExerciseType, currentExerciseIndex');
        return;
    }

    const exercises = exercisesData[currentModule]?.[currentExerciseType];

    // Проверка существования массива упражнений
    if (!exercises) {
        console.error(`Не найдены упражнения для модуля "${currentModule}" типа "${currentExerciseType}"`);
        return;
    }

    // Проверка корректности индекса
    if (currentExerciseIndex < 0 || currentExerciseIndex >= exercises.length) {
        console.error(`Индекс упражнения ${currentExerciseIndex} выходит за пределы массива (длина: ${exercises.length})`);
        return;
    }

    const exercise = exercises[currentExerciseIndex];

    // Очищаем контейнер
    currentExercise.innerHTML = '';

    // Загружаем упражнение в зависимости от типа
    if (currentExerciseType === 'translation') {
        renderTranslationExercise(exercise);
    } else if (currentExerciseType === 'fill') {
        renderFillExercise(exercise);
    } else if (currentExerciseType === 'comprehension') {
        renderComprehensionExercise(exercise);
    } else {
        // Защита от неизвестного типа упражнения
        console.error(`Неизвестный тип упражнения: "${currentExerciseType}"`);
    }
}


// Отображение упражнения на перевод
function renderTranslationExercise(exercise) {
    const html = `
        <div class="exercise-content">
            <p><strong>${exercise.original || ''}</strong></p>

            ${exercise.explanation ? `
            <div class="explanation">
                <h4>Употребление:</h4>
                <p>${exercise.explanation}</p>
            </div>` : ''}

            ${exercise.structure ? `
            <div class="structure">
                <h4>Структура:</h4>
                <pre>${exercise.structure}</pre>
            </div>` : ''}

            ${exercise.contraction ? `
            <div class="contraction">
                <h4>Сокращение:</h4>
                <p>${exercise.contraction}</p>
            </div>` : ''}

            ${exercise.examples && exercise.examples.length > 0 ? `
            <div class="examples">
                <h4>Примеры:</h4>
                <ul>
                    ${exercise.examples.map(ex => `<li>${ex}</li>`).join('')}
                </ul>
            </div>` : ''}

            ${exercise.note ? `
            <div class="note">
                <h4>Обратите внимание:</h4>
                <p>${exercise.note}</p>
            </div>` : ''}

            ${exercise.translationOptions && exercise.translationOptions.length > 0 ? `
            <div class="translation-exercise">
                <h4>Выберите правильный перевод:</h4>
                <p>${exercise.original}</p>
                <div class="options">
                    ${exercise.translationOptions.map((option, index) => `
                        <label class="option">
                            <input type="radio" name="translation" value="${index}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            </div>` : ''}

            ${exercise.fillOptions && exercise.fillOptions.length > 0 ? `
            <div class="fill-exercise">
                <h4>Закончите предложение:</h4>
                <p>I've __ seen my dad.</p>
                <div class="options">
                    ${exercise.fillOptions.map((option, index) => `
                        <label class="option">
                            <input type="radio" name="fill" value="${index}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            </div>` : ''}

            ${exercise.vocabularyOptions && exercise.vocabularyOptions.length > 0 ? `
            <div class="vocabulary-exercise">
                <h4>What does "only" mean?</h4>
                <div class="options">
                    ${exercise.vocabularyOptions.map((option, index) => `
                        <label class="option">
                            <input type="radio" name="vocabulary" value="${index}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            </div>` : ''}

            ${exercise.meaningOptions && exercise.meaningOptions.length > 0 ? `
            <div class="meaning-exercise">
                <h4>What does the sentence mean?</h4>
                <div class="options">
                    ${exercise.meaningOptions.map((option, index) => `
                        <label class="option">
                            <input type="radio" name="meaning" value="${index}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            </div>` : ''}

            <button class="btn btn-primary" onclick="checkTranslation()">Проверить</button>
            <div id="feedback" class="feedback hidden"></div>
        </div>
    `;

    currentExercise.innerHTML = html;
}


// Проверка ответа для перевода
function checkTranslation() {
    const feedback = document.getElementById('feedback');
    const exercise = exercisesData[currentModule][currentExerciseType][currentExerciseIndex];
    let isCorrect = true;
    let errorMessages = [];

    // Проверка 1: Перевод фразы (если есть)
    if (exercise.translationOptions) {
        const selected = document.querySelector('input[name="translation"]:checked');
        if (!selected) {
            errorMessages.push("Выберите вариант перевода.");
            isCorrect = false;
        } else {
            if (parseInt(selected.value) !== exercise.correctTranslation) {
                errorMessages.push("Неверный перевод фразы.");
                isCorrect = false;
            }
        }
    }

    // Проверка 2: Заполнение пропуска (если есть)
    if (exercise.fillOptions) {
        const selected = document.querySelector('input[name="fill"]:checked');
        if (!selected) {
            errorMessages.push("Выберите слово для пропуска.");
            isCorrect = false;
        } else {
            if (parseInt(selected.value) !== exercise.correctFill) {
                errorMessages.push("Неверно заполнено предложение.");
                isCorrect = false;
            }
        }
    }

    // Проверка 3: Значение слова (если есть)
    if (exercise.vocabularyOptions) {
        const selected = document.querySelector('input[name="vocabulary"]:checked');
        if (!selected) {
            errorMessages.push("Выберите значение слова.");
            isCorrect = false;
        } else {
            if (parseInt(selected.value) !== exercise.correctVocabulary) {
                errorMessages.push("Неверное значение слова.");
                isCorrect = false;
            }
        }
    }

    // Проверка 4: Значение предложения (если есть)
    if (exercise.meaningOptions) {
        const selected = document.querySelector('input[name="meaning"]:checked');
        if (!selected) {
            errorMessages.push("Выберите значение предложения.");
            isCorrect = false;
        } else {
            if (parseInt(selected.value) !== exercise.correctMeaning) {
                errorMessages.push("Неверно понят смысл предложения.");
                isCorrect = false;
            }
        }
    }

    // Вывод результата
    if (isCorrect) {
        score += 2; // Начисляем баллы, если все части верны
        feedback.textContent = exercise.feedbackCorrect;
        feedback.className = 'feedback correct';
    } else {
        // Если есть ошибки, показываем общий текст ошибки из данных
        feedback.textContent = exercise.feedbackIncorrect;
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
    if (!exercise || !exercise.dialog || !exercise.questions) {
        console.error('Некорректные данные для упражнения на понимание.');
        return;
    }

    let html = `
        <div class="exercise-content">
            <h4>Прочитайте диалог и ответьте на вопросы</h4>
            <div class="dialog-box">
                <pre>${exercise.dialog}</pre>
            </div>`;

    exercise.questions.forEach((q, index) => {
        html += `
            <div class="comprehension-question">
                <p><strong>${q.question}</strong></p>
                <div class="options">`;

        q.options.forEach((option, optIndex) => {
            html += `
                <label class="option">
                    <input type="radio" name="comprehension${index}" value="${optIndex}">
                    ${option}
                </label>`;
        });

        html += `
                </div>
            </div>`;
    });

    html += `
            <button class="btn btn-primary" onclick="checkComprehension()">Проверить</button>
            <div id="feedback" class="feedback hidden"></div>
        </div>`;

    currentExercise.innerHTML = html; // Используем currentExercise вместо container
}

// Проверка понимания текста
function checkComprehension() {
    const exercise = exercisesData[currentModule][currentExerciseType][currentExerciseIndex];
    const questions = exercise.questions;
    const feedback = document.getElementById('feedback');
    let correctCount = 0;
    let totalQuestions = questions.length;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="comprehension${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            correctCount++;
        }
    });

    // Начисляем баллы за каждый правильный ответ
    score += correctCount;

    if (correctCount === totalQuestions) {
        feedback.textContent = `Отлично! Вы правильно ответили на все ${totalQuestions} вопросов!`;
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `Правильно ${correctCount} из ${totalQuestions} вопросов. Попробуйте ещё раз!`;
        feedback.className = 'feedback error';
    }

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
function closeExercise() {
    const modal = document.getElementById('exerciseModal');
    if (!modal) return;

    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');

    // Сброс внутренних элементов (если нужно)
    const closeBtn = document.getElementById('closeExercise');
    const backBtn = document.getElementById('backToModules');
    const moduleSelection = document.getElementById('moduleSelection');
    const exerciseContent = document.getElementById('exerciseContent');

    if (closeBtn) closeBtn.classList.remove('hidden-close');
    if (backBtn) backBtn.classList.add('hidden');
    if (moduleSelection) moduleSelection.classList.remove('hidden');
    if (exerciseContent) exerciseContent.classList.add('hidden');
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

