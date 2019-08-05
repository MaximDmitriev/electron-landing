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
    
    //=require ../elements/**/*.js
});