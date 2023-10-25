document.querySelectorAll('.quantity-input').forEach(function (e) {
    const input = e.querySelector('input');
    const minus = e.querySelector('.minus');
    const plus = e.querySelector('.plus');
  
    minus.addEventListener('click', function () {
        let value = parseFloat(input.value) || 0;
        if (value > 1) {
            input.value = value - 1;
        }
    });
  
    plus.addEventListener('click', function () {
        let value = parseFloat(input.value) || 0;
        input.value = value + 1;
    });
});