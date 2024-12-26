import React, { useState, useEffect } from 'react';
import Fact from '/src/assets/img/Fact.png';
import Fact1 from '/src/assets/img/Fact1.png';
import Machine from '/src/assets/img/Machine.png';
import Machine1 from '/src/assets/img/Machine1.png';

const Carousal = ({ currentText }) => {
    // Create a mapping of the texts to their respective images
    const imageMapping = {
        "SMART FACTORIES": [
            "https://i.ibb.co/Gx9HnbH/Fact.png",
            "https://i.ibb.co/ss4jLZM/Fact1.png"
        ],

        "SMART CITIES": [
            "https://i.ibb.co/yyhV8Lt/City.png",
            "https://i.ibb.co/2NM0g9X/City1.png" // City image links
        ],

        "SMART MACHINES": [
            "https://i.ibb.co/QHpQ2BR/Machine.png",
            "https://i.ibb.co/prJ6xmW/Machine1.png"
        ],
    };

    // Get the appropriate images based on the currentText
    const images = imageMapping[currentText] || [];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);

    return (
        <div id="default-carousel" className="relative w-full top-44 sm:top-0 md:top-0 lg:top-0" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative overflow-hidden h-[50vh] sm:h-80 md:h-[50vh] lg:h-[100vh]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                            currentIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                        data-carousel-item
                    >
                        <img
                            src={image}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousal;
