let count = document.getElementById("count").innerText;
const minus = document.getElementById("minus");
const plus = document.getElementById('plus');

minus.addEventListener('click', function() {
    count--
     document.getElementById('count').innerHTML = count;
})
plus.addEventListener('click', function() {
    count++;
    document.getElementById('count').innerHTML = count;
})