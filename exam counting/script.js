

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".number");
    const intervalIds = new Map(); 

    const startCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = +counter.textContent;

        if (intervalIds.has(counter)) clearInterval(intervalIds.get(counter));

        intervalIds.set(counter, setInterval(() => {
            if (count < target) counter.textContent = ++count;
            else clearInterval(intervalIds.get(counter));
        }, 100));
    };

    const stopCounter = (counter) => {
        if (intervalIds.has(counter)) clearInterval(intervalIds.get(counter));
    };

    const restartCounter = (counter) => {
        stopCounter(counter);
        counter.textContent = 0;
        startCounter(counter);
    };

    document.getElementById("startBtn").addEventListener("click", () => counters.forEach(startCounter));
    document.getElementById("stopBtn").addEventListener("click", () => counters.forEach(stopCounter));
    document.getElementById("restartBtn").addEventListener("click", () => counters.forEach(restartCounter));
});
