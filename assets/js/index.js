let sliderBtn = document.querySelectorAll('.sliderBtn');
let slides = document.querySelectorAll('.main__slider_slide');

for(let btn of sliderBtn)
{
    btn.addEventListener('click', function(){

        let id = this.getAttribute('data-id');

        for(let btn of sliderBtn)
        {
            btn.classList.remove('activeSlideBtn');
        }

        this.classList.add('activeSlideBtn');

        for(let slide of slides)
        {
            slide.classList.remove('activeSlide');
        }

        document.querySelector(`#slide-${id}`).classList.add('activeSlide');


    })
}
