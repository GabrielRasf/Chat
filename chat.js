// Selecionando os elementos do DOM
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatWindow = document.getElementById('chat-window');
const contacts = document.querySelectorAll('.user-info');
// const searchBar = document.querySelector('.search-bar');
// const searchButton = document.getElementById('searchButton');

// searchButton.addEventListener('click', () => {
//     searchBar.classList.toggle('hidden');
// });

// Função para criar uma nova mensagem
function createMessage(message, sender = 'voce') {
    const messageDiv = document.createElement('div');
    const senderSpan = document.createElement('span');

    if (sender === 'voce') {
        messageDiv.classList.add('mensagem-conversa');
        senderSpan.classList.add('voce');
        senderSpan.textContent = 'Você ';
    } else {
        messageDiv.classList.add('mensagem-recebida');
        senderSpan.classList.add('remetente');
        senderSpan.textContent = sender;
    }

    messageDiv.appendChild(senderSpan);
    messageDiv.appendChild(document.createTextNode(message));

    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Função para lidar com o envio do formulário de chat
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = chatInput.value.trim();

    if (message !== '') {
        createMessage(message);
        chatInput.value = '';

        setTimeout(() => {
            createMessage(' Esta é uma resposta automática.', 'Pessoa ');
        }, 1000);
    }
});

// Função para alternar entre diferentes contatos
contacts.forEach(contact => {
    contact.addEventListener('click', () => {
        contacts.forEach(c => c.classList.remove('active'));
        contact.classList.add('active');
        chatWindow.innerHTML = '';
    });
});
