document.querySelectorAll('.quantity-input').forEach(function (element) {
    const input = element.querySelector('input');
    const minus = element.querySelector('.minus');
    const plus = element.querySelector('.plus');
  
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