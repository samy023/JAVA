

document.addEventListener("DOMContentLoaded", () => {
    let counters = document.querySelectorAll(".number");

    counters.forEach((counter) => {
        let target = +counter.getAttribute("data-target"); // Get the target number
        let count = 0;

        let updateCounter = () => {
            count++;
            counter.textContent = count; // Update the displayed number

            if (count < target) {
                setTimeout(updateCounter, 10); // Continue updating
            } 
        };

        updateCounter(); // Start the counter
    });
});

