

document.addEventListener('DOMContentLoaded', function () {
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const konten = document.querySelectorAll('.vol');
    let current = 0;
    function showElement(index) {
        konten.forEach((element, idx) => {
            element.classList.remove('vol-active');
            if (idx === index) {
                element.classList.add('vol-active');
            }
        });
    }


    prev.addEventListener('click', function () {
        if (current > 0) {
            current--;
            showElement(current);
        }
    });

    next.addEventListener('click', function () {
        if (current < konten.length - 1) {
            current++;
            showElement(current);
        };
    });

    showElement(current);
});