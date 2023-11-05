const greetingText = document.getElementById('greeting-text');
const mainContent = document.getElementById('main-content');

const greetings = [
    { language: 'en', text: 'Hello!' },
    { language: 'fr', text: 'Bonjour!' },
    { language: 'tat', text: 'Сәлам!' },
    { language: 'beng', text: 'Namaskaar!' },
    { language: 'chi', text: '你好!' },
    { language: 'jap', text: 'どうも!' },
    { language: 'kat', text: 'Hola!'},
    { language: 'gru', text: 'გამარჯობა!'},
    { language: 'ara', text: 'مرحبًا'},
    { language: 'slov', text: 'živjo!'},
    { language: 'turk', text: 'Merhaba!'},
    { language: 'ivr', text: 'Shalom!'},
    { language: 'avs', text: 'Grüßgott!'},
    { language: 'kor', text: '안녕!'},
    { language: 'ru', text: 'Привет!' },
];

const firstInterval = 300; // Interval for the first greeting in milliseconds
const intervalBetween = 100; // Interval for greetings in between in milliseconds
const lastInterval = 400; // Interval for the last greeting in milliseconds

let currentIndex = 0;

function setGreeting() {
    const currentGreeting = greetings[currentIndex];
    greetingText.textContent = currentGreeting.text;

    let interval;

    // Set custom intervals for the first and last greeting
    if (currentIndex === 0) {
        interval = firstInterval;
    } else if (currentIndex === greetings.length - 1) {
        interval = lastInterval;
    } else {
        interval = intervalBetween;
    }

    currentIndex = (currentIndex + 1) % greetings.length;

    // Set the new interval
    setTimeout(setGreeting, interval);
}

function showMainContent() {
    greetingText.style.display = 'none';
    mainContent.style.display = 'block';
}

// Initial call to setGreeting
setGreeting();
setTimeout(showMainContent, 2000)