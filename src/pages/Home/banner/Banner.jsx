import { useEffect, useState } from "react";
import './banner.css'


const Banner = () => {
    const images = [
        'https://renovation.thememove.com/wp-content/uploads/2021/02/n_hreno_congnhan.png',
        'https://aonetheme.com/latest-service-finder/wp-content/uploads/2020/05/plumber-2.png', // Replace with your image URL
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const backgroundImage = {
        backgroundImage: `url('https://demo.casethemes.net/hardman/wp-content/uploads/2022/12/bgr-slide2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(10px)',


    };
    return (
       <>
        <div className='relative ' style={backgroundImage}>
            <svg
                className="absolute left-0 bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                    d="M600,65.77C268.63,65.77,0,30.52,0,30.23V120H1200V30.23C1200,30.52,931.37,65.77,600,65.77Z"
                    className="shape-fill"
                    fill="#fff" // Replace with your desired color
                />
            </svg>

            <div className="hero h-[800px]  flex flex-col lg:flex-row container mx-auto">
                <div className="flex-1 lg:order-2 flex justify-center items-center">
                    <div>
                        <div className="rounded-lg image-container" >
                            <img
                                src={images[currentImageIndex]}
                                alt={`Image ${currentImageIndex + 1}`}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 lg:order-1 flex flex-col justify-center px-4 lg:px-8">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hire Experts &
                        Get Your Job Done!</h1>
                    <p className="py-2">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                </div>
            </div>
        </div>
        <div className='relative ' style={backgroundImage}>
            <svg
                className="absolute left-0 bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                    d="M600,65.77C268.63,65.77,0,30.52,0,30.23V120H1200V30.23C1200,30.52,931.37,65.77,600,65.77Z"
                    className="shape-fill"
                    fill="#fff" // Replace with your desired color
                />
            </svg>

            <div className="hero h-[800px]  flex flex-col lg:flex-row container mx-auto">
                <div className="flex-1 lg:order-2 flex justify-center items-center">
                    <div>
                        <div className="rounded-lg image-container" >
                            <img
                                src={images[currentImageIndex]}
                                alt={`Image ${currentImageIndex + 1}`}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 lg:order-1 flex flex-col justify-center px-4 lg:px-8">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hire Experts &
                        Get Your Job Done!</h1>
                    <p className="py-2">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                </div>
            </div>
        </div>
       </>
    );
};

export default Banner;