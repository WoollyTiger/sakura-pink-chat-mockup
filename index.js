const msgContainerDiv = document.getElementById('msg-container');
const userInput = document.getElementById('user-msg-input');
const sendBtn = document.getElementById('send-msg-btn');
const messages = document.getElementsByClassName('message');

const welcomeContainerDiv = document.getElementById('welcome-container');
const welcomeBtn = document.getElementById('welcome-btn');
const welcomeMsg = document.getElementById('welcome-msg');
const usernameInput = document.getElementById('username-input');


const userInfo = document.getElementById('user-info');

let userMessages = [];
let firstMessageSent = false;
let inputFocus = false;
let friendIndex = 0;

let friendMessages = [
    'Huh, what\'s up? Did the meeting go well?', 
    'Wow! That\'s so great to hear!',
    'Definitely. How about next week?',
    'Great, see you then!!'
];

function welcomeUser() {
    setTimeout(function() {
        
        welcomeMsg.classList.add('welcome-class');
        welcomeMsg.textContent = 'Please write your name'
    }, 3900);

    setTimeout(function() {
        welcomeMsg.style.display = 'none';
    }, 7900);
    
    setTimeout(function() {

        usernameInput.classList.remove('welcome-screen-hidden');
        welcomeBtn.classList.remove('welcome-screen-hidden');
        usernameInput.classList.add('welcome-username-screen');
        welcomeBtn.classList.add('welcome-username-screen');
    }, 8300);
    
    const setUserName = document.getElementById('welcome-btn');
    
    usernameInput.addEventListener('focus', function() {
        usernameInput.value = '';
    })


    setUserName.addEventListener('click', function() {
        msgContainerDiv.classList.remove('welcome-screen-hidden');
        msgContainerDiv.classList.add('welcome-message-screen');
        
        userInfo.textContent = `Hello ${usernameInput.value}!`;
        
        usernameInput.classList.remove('welcome-username-screen');
        welcomeBtn.classList.remove('welcome-username-screen');
        usernameInput.classList.add('welcome-screen-hidden');
        welcomeBtn.classList.add('welcome-screen-hidden');
        welcomeContainerDiv.classList.add('welcome-screen-hidden');
    });

};
welcomeUser();

sendBtn.addEventListener('click', function() {
    if (firstMessageSent === false) {
        msgContainerDiv.innerHTML = '';
        firstMessageSent = true;
    }
    if (userInput.value !== '') {
        userMessages.push(userInput.value);
        renderMsg(userInput.value);
    
        userInput.value = 'Type something...';
    }

    msgContainerDiv.scrollTop = msgContainerDiv.scrollHeight;
});

userInput.addEventListener('focus', function() {
    if (inputFocus === false) {
        inputFocus = true;
        userInput.value = '';
    }
})

function renderMsg(msg) {

    let userMessage = `
    <div class="message own-message">
        ${msg}
    </div>
    `
    msgContainerDiv.innerHTML += userMessage;
    
    inputFocus = false;
    
    
    setTimeout(function() {
        if (friendIndex < friendMessages.length) {
            let friendMessage = `
            <div class="message friend-message">
            ${friendMessages[friendIndex]}
            </div>`
            msgContainerDiv.innerHTML += friendMessage;
            friendIndex++;

            lastMessage = messages[messages.length - 1];
            msgContainerDiv.scrollTop = msgContainerDiv.scrollHeight;

        }
    }, 3000);
    
    
}