const button = document.getElementById('myButt');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    let currentValue = parseInt(output.value);
    output.value = currentValue + 1;
});
