const greetingText = document.getElementById('greeting-text');
const mainContent = document.getElementById('main-content');

const greetings = [
    { language: 'en', text: 'Hello!' },
    { language: 'fr', text: 'Bonjour!' },
    { language: 'ru', text: 'Привет!' },
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
];

let currentIndex = 0;

function setGreeting() {
    const currentGreeting = greetings[currentIndex];
    greetingText.textContent = currentGreeting.text;
    
    currentIndex = (currentIndex + 1) % greetings.length;
}

function showMainContent() {
    greetingText.style.display = 'none';
    mainContent.style.display = 'block';
}

// Display the greetings alternately, then reveal the main content after a delay
setInterval(setGreeting, 120); // Change the interval as needed (e.g., 3000 milliseconds for 3 seconds)
setTimeout(showMainContent, 1920); // Adjust the delay to match the interval

