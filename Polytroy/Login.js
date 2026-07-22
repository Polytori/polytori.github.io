// script.js - Polytroy 2008 Frontend Logic

// --- GAME PLAYER MOCK ---
function playGame(gameName) {
    alert("Loading Web Build for: " + gameName + "\n\n(Waiting for WebGL Server...)");
}

// --- UPLOAD MODAL LOGIC ---
function openUploadModal() {
    document.getElementById('uploadModal').style.display = 'flex';
}

function closeUploadModal() {
    document.getElementById('uploadModal').style.display = 'none';
    document.getElementById('uploadForm').reset();
}

function handleUpload(event) {
    event.preventDefault(); 
    const title = document.getElementById('gameTitle').value;
    const fileInput = document.getElementById('gameFile').files[0];
    
    if(fileInput) {
        alert(`SUCCESS!\n\nPreparing to upload "${title}" (${fileInput.name}).\n\nPlease set up the backend server next!`);
        closeUploadModal();
    }
}

// --- LOGIN SYSTEM LOGIC ---
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('loginForm').reset();
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    
    // Dynamically update the header and sidebar with the logged-in user's name
    document.getElementById('authSection').innerHTML = `Logged in as <b>${username}</b> | <a onclick="logout()">Logout</a>`;
    document.getElementById('sidebarWelcome').innerText = `Welcome, ${username}!`;
    
    closeLoginModal();
}

function logout() {
    // Revert UI back to guest state
    document.getElementById('authSection').innerHTML = `<a onclick="openLoginModal()">Login</a> | <a onclick="alert('Account registration is currently closed.')">Register</a>`;
    document.getElementById('sidebarWelcome').innerText = `Welcome, Guest!`;
}