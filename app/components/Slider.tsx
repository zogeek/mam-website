"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SliderProps {
    photos: string[];
}

export default function Slider({ photos }: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageSize, setImageSize] = useState({ width: 800, height: 800 });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setImageSize({ width: 400, height: 400 });
            } else if (window.innerWidth <= 1024) {
                setImageSize({ width: 600, height: 600 });
            } else {
                setImageSize({ width: 800, height: 800 });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-md mx-auto z-0">
            <div className="overflow-hidden rounded-lg">
                <Image
                    src={photos[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    width={imageSize.width}
                    height={imageSize.height}
                    className="w-full h-auto"
                />
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#10095;
            </button>
        </div>
    );
}
