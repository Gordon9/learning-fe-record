const input = document.getElementById('countInput');
const span = document.getElementById('count');

input.addEventListener('keyup', function() {
    span.innerHTML = this.value.length;
})