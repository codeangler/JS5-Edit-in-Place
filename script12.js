var clickables = document.querySelectorAll('.clickable');

    for(var elem in clickables) {
        if( clickables[elem].addEventListener ) {
            clickables[elem].addEventListener('click', clickable);
        }
    }

    function clickable(e) {
        e.target.style.display = 'none';

        var input = e.target.parentNode.children[1];

        input.style.display = 'block';
        input.value = e.target.textContent;

        input.addEventListener('blur', blurable);
        input.focus();
    }
    function blurable(e) {
        var p = e.target.parentNode.children[0];

        console.log(e.target);

        p.textContent = e.target.value;
        p.style.display = 'block';
        e.target.style.display = 'none';

        e.target.removeEventListener('blur', blurable);
    }