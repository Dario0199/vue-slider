/*
 * Vue Slider
 */
const root = new Vue({
    el: '#root',
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Francia',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
        slideCard: 0,
    },
    methods:{
        prevClick(){
            this.slideCard--;

            if(this.slideCard < 0){
                this.slideCard = this.slides.length -1;
            }
        },

        nextClick(){
            this.slideCard++;

            if(this.slideCard > this.slides.length -1){
                this.slideCard = 0;
            }
        },

        selectCard(indexPosition){
            this.slideCard = indexPosition;
        }
        
    },
    created(){
        setInterval(() => {
            this.slideCard++;

            if(this.slideCard > this.slides.length -1){
                this.slideCard = 0;
            }

            document.querySelector('.thumb.active').classList.remove('active')
        }, 3000);
    }
})

// const imageCard = document.querySelector('.thumb')
// console.log(imageCard);

// let activeIndex = 0;

// imageCard[activeIndex].classList.add('active');

// setInterval(() => {
//     activeIndex++;

    

//     document.querySelector('.thumb.active').classList.remove('active')

//     imageCard[activeIndex].classList.add('active');
// }, 3000);