
/*var sendButton = document.querySelector('#send-btn');
sendButton.addEventListener('click', sendInChatlog);

function sendInChatlog() {
    let userInput = document.querySelector('#chat-input').value;
    
    // Clear input box after message is sent
    document.querySelector('#chat-input').value = '';

    // Add user's message to chat logs
    addChatMessage(userInput, 'user');
    document.body.style.backgroundColor = "red";
    // TODO: Send this userInput to server and get response from OpenAI model
}

// Function to add chat message to chat logs
function addChatMessage(message, sender) {
    let chatlogs = document.getElementById('chatlogs');
    
    // Create a new div for message
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;

    // Add the new message div into chatlogs
    chatlogs.appendChild(messageDiv);

    // Scroll to the bottom
    chatlogs.scrollTop = chatlogs.scrollHeight;
}
*/

/*
// Function to add chat message to chat logs
function addChatMessage(message, sender) {
    let chatlogs = document.getElementById('chatlogs');
    
    // Create a new div for message
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;

    // Add the new message div into chatlogs
    chatlogs.appendChild(messageDiv);

    // Scroll to the bottom
    chatlogs.scrollTop = chatlogs.scrollHeight;
}
*/
// Function to add chat message to chat logs


/*
window.onload = function() {
    document.getElementById('send-btn').addEventListener('click', function() {
        let userInput = document.getElementById('chat-input').value;
    
        // Clear input box after message is sent
        document.getElementById('chat-input').value = '';

        // Add user's message to chat logs
        addChatMessage(userInput, 'user');

        // TODO: Send this userInput to server and get response from OpenAI model
    });
};
function addChatMessage(message, sender) {
    let chatlogs = document.getElementById('chatlogs');
    
    // Create a new outer div for each message
    let outerDiv = document.createElement('div');
    outerDiv.style.width = '100%';
    outerDiv.style.display = 'flex';
    outerDiv.style.justifyContent = sender === 'user' ? 'flex-end' : 'flex-start';

    // Create a new div for message
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;

    // Add the new message div into outer div
    outerDiv.appendChild(messageDiv);

    // Add the new outer div into chatlogs
    chatlogs.appendChild(outerDiv);

    // Scroll to the bottom
    chatlogs.scrollTop = chatlogs.scrollHeight;
}

*/


/*

document.getElementById('send-btn').addEventListener('click', function() {
    let userMessage = document.getElementById('chat-input').value;

    // Clear the input field
    document.getElementById('chat-input').value = '';

    // Append the user's message to the chatlogs
    let userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user';
    userMessageDiv.textContent = userMessage;
    document.getElementById('chatlogs').appendChild(userMessageDiv);

    // Scroll to the bottom
    document.getElementById('chatlogs').scrollTop = document.getElementById('chatlogs').scrollHeight;

    // Send the user's message to the backend and get the chatbot's response
    fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        let botMessage = data.message;

        // Append the chatbot's message to the chatlogs
        let botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'message bot';
        botMessageDiv.textContent = botMessage;
        document.getElementById('chatlogs').appendChild(botMessageDiv);

        // Scroll to the bottom
        document.getElementById('chatlogs').scrollTop = document.getElementById('chatlogs').scrollHeight;
    });
});
*/




document.getElementById('send-btn').addEventListener('click', function() {
    let userMessage = document.getElementById('chat-input').value;

    // Clear the input field
    document.getElementById('chat-input').value = '';

    // Append the user's message to the chatlogs
    let userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user';
    userMessageDiv.textContent = userMessage;
    document.getElementById('chatlogs').appendChild(userMessageDiv);

    // Scroll to the bottom
    document.getElementById('chatlogs').scrollTop = document.getElementById('chatlogs').scrollHeight;

    // Send the user's message to the backend and get the chatbot's response
    fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let botMessage = data.message;

        // Append the chatbot's message to the chatlogs
        let botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'message bot';
        botMessageDiv.textContent = botMessage;
        document.getElementById('chatlogs').appendChild(botMessageDiv);

        // Scroll to the bottom
        document.getElementById('chatlogs').scrollTop = document.getElementById('chatlogs').scrollHeight;
    })
    .catch(e => {
        console.log('There was a problem with the fetch operation: ' + e.message);
    });
});
