window.addEventListener('DOMContentLoaded', function () {
    // document.querySelector('.preloader').remove();
    const scrollCalc = () => {
        const div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
    
        document.body.appendChild(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);

        return scrollWidth;
    }

    function mask(input) {
        // input.focus();
        input.selectionStart = input.value.length;
    
        let numbers = [];
    
        function writeToInput(id, arr){
            let output = "+7 (";
            for (let i in arr) {
                if (i == 3) {
                    output += ") " + arr[i];
                    id.value = output;
                    continue;
                }
                if (i == 6 || i == 8) {
                    output += " - " + arr[i];
                    id.value = output;
                    continue;
                }
                output += arr[i];
                id.value = output;
            }
        }
    
        input.addEventListener('keydown', (event) => {
            if (event.keyCode == 8 && numbers.length != 0) {
                event.preventDefault();
                numbers.pop();
                writeToInput(input, numbers);
            } 
        });
    
        input.addEventListener('keypress', (event) => {
    
            if (/\D/g.test(event.key)) event.preventDefault();
            else {
                if (numbers.length == 10) event.preventDefault();
                else {
                    event.preventDefault();
                    numbers.push(event.key);
                    writeToInput(input, numbers);
                }
            }
        });
    }
    mask(document.querySelector('#mainform-phone'));
    mask(document.querySelector('#mainform-phone2'));
    //=require ../elements/**/*.js
});