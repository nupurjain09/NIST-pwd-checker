import Worker from './worker.js';
import BloomFilter from 'bloomfilter.js';
import $ from 'jquery';
require('file-loader?name=[name].[ext]!../app/index.html');

$(document).ready(() => {
    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('keypress', (event) => {
        if(event.which === 13) {
            checkPassword();
        }
    });
    const button = document.getElementById('button');
    button.onclick = () => {
        checkPassword();
    };
});

let bloom;

    async function fetchPws() {
        const response = await fetch("http://localhost:3000/passwords");
        const passwords = await response.text();
        let bloomJSON = await parseAndStoreCommonsPws(passwords);
        bloom = BloomFilter.deserialize(bloomJSON);
        checkPassword();
    };
    fetchPws();

    async function parseAndStoreCommonsPws(passwords) {
        let worker = new Worker();
        worker.postMessage({passwords});
        return await new Promise(resolve => worker.onmessage = e => resolve(e.data));
    }

function checkPassword() {
    const password = document.getElementById('password').value;
        if(!bloom || !password) {
            return;
        }

    let message = 'Password is valid!';
    if(!checkPasswordLength(password)) {
        message = 'Password must be between 8 to 64 characters';
    } else if(!checkIfAscii(password)) {
        message = 'Password must be only ASCII characters';
    } else if(checkCommonPasswords(password)) {
       message = 'Password is a common password. Please use a stronger password.'
    }
    renderMessage(message);
}

function renderMessage(message) {
    document.getElementById('message').innerText = message;
}

export function checkPasswordLength(password) {
    return password.length >= 8 && password.length <= 64;
}

export function checkIfAscii(password) {
    return /^[\x00-\x7f]*$/.test(password); // Allow all ASCII characters and spaces (unicode optional)
}

function checkCommonPasswords(password) {
    return bloom.test(password);
}