import { useEffect } from 'react';

const Swiper = () => {

    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 3,
            direction: getDirection(),
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                resize: function () {
                    swiper.changeDirection(getDirection());
                },
            },
        });

        function getDirection() {
            const windowWidth = window.innerWidth;
            const direction = windowWidth <= 760 ? 'vertical' : 'horizontal';
            return direction;
        }
    }, []);

    return (
        <div className="swiper h-screen">
            <div className="swiper-wrapper">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="swiper-slide" key={index}>
                        Resize me!
                    </div>
                ))}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    );
};

export default Swiper;