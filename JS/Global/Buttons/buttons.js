// Assuming your button has a class of 'buttons'
const buttons = document.querySelectorAll('.buttons');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'button-clicked' class from all buttons to ensure only the clicked one is highlighted
        buttons.forEach(btn => btn.classList.remove('button-clicked'));
        
        // Add the 'button-clicked' class to the clicked button
        this.classList.add('button-clicked');
    });
});
