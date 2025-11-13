// Countdown to Christmas Eve functionality

function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Christmas Eve is December 24th at 00:00:00
    let christmasEve = new Date(currentYear, 11, 24, 0, 0, 0);
    
    // If Christmas Eve has passed this year, count down to next year's Christmas Eve
    if (now > christmasEve) {
        christmasEve = new Date(currentYear + 1, 11, 24, 0, 0, 0);
    }
    
    // Calculate time difference
    const timeDiff = christmasEve - now;
    
    // Check if it's Christmas Eve (December 24th)
    if (now.getDate() === 24 && now.getMonth() === 11) {
        displayChristmasMessage();
        return;
    }
    
    // Calculate time units
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    // Update DOM elements
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    // Update message based on time remaining
    updateMessage(days, hours, minutes);
}

function updateMessage(days, hours, minutes) {
    const messageElement = document.querySelector('.message-text');
    messageElement.classList.remove('celebration');
    
    if (days === 0 && hours === 0 && minutes < 60) {
        messageElement.textContent = '🎅 Nesten julaften! 🎄';
    } else if (days === 0) {
        messageElement.textContent = '🎁 I dag er det julaften! 🎁';
    } else if (days === 1) {
        messageElement.textContent = '⭐ Bare én dag igjen til julaften! ⭐';
    } else if (days <= 7) {
        messageElement.textContent = `🌟 ${days} dager til julaften! 🌟`;
    } else if (days <= 14) {
        messageElement.textContent = `❄️ ${days} dager til julaften! ❄️`;
    } else if (days <= 30) {
        messageElement.textContent = `🎄 ${days} dager til julaften! 🎄`;
    } else {
        messageElement.textContent = `📅 ${days} dager til julaften 📅`;
    }
}

function displayChristmasMessage() {
    // Hide countdown display
    document.querySelector('.countdown-display').style.display = 'none';
    
    // Show celebration message
    const messageElement = document.querySelector('.message-text');
    messageElement.textContent = '🎄 God jul! 🎅';
    messageElement.classList.add('celebration');
    
    // Add confetti effect (simple version)
    createSnowflakes();
}

function createSnowflakes() {
    // Simple snowflake effect
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const snowflake = document.createElement('div');
            snowflake.innerHTML = '❄️';
            snowflake.style.position = 'fixed';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.top = '-50px';
            snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
            snowflake.style.opacity = Math.random();
            snowflake.style.pointerEvents = 'none';
            snowflake.style.zIndex = '1000';
            snowflake.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
            
            document.body.appendChild(snowflake);
            
            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }, i * 100);
    }
}

// Add fall animation for snowflakes
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            top: 100vh;
            transform: translateX(${Math.random() * 100 - 50}px);
        }
    }
`;
document.head.appendChild(style);

// Initialize countdown
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

// Add a subtle pulse effect on load
window.addEventListener('load', () => {
    document.querySelector('.countdown-container').style.animation = 'fadeIn 0.8s ease-in';
});
