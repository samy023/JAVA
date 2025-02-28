


function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'satruday', 'sunday'];
    let months = ['January', 'February', ' March', 'April', 'Mey', 'June', 'July', 'August,', 'September', 'October', 'November', 'December'];
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    document.getElementById('date').textContent = 
        `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}


updateClock();

setInterval(updateClock, 1000);