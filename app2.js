const button = document.getElementById('button1'),
    input = document.getElementById('input1'),
    target = document.getElementById('target')

button.addEventListener("click", e => target.textContent = input.value)