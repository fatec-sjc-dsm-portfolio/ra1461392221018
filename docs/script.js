// Toggle expand/collapse project card
function toggleCard(element) {
    const card = element.parentElement;
    const body = card.querySelector('.card-body');
    const icon = element.querySelector('.toggle-icon');

    const allBodies = document.querySelectorAll('.card-body');
    const allIcons = document.querySelectorAll('.toggle-icon');

    // Close all cards
    allBodies.forEach(b => {
        if (b !== body) {
            b.classList.remove('open');
        }
    });

    allIcons.forEach(i => {
        if (i !== icon) {
            i.textContent = '+';
        }
    });

    // Change the selected card
    const isOpen = body.classList.contains('open');
    if (isOpen) {
        body.classList.remove('open');
        icon.textContent = '+';
    } else {
        body.classList.add('open');
        icon.textContent = '-';
    }
}

// Toggle Dark Mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
