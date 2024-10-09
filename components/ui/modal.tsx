import React from 'react';
import Image from 'next/image';
interface ModalContentProps {
    title: string;
    description: string;
    imageSrc: string;
}
const Modal: React.FC<ModalContentProps> = ({ title, description, imageSrc }) => {
    return (
        <div className="bg-neutral-800 p-6 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-200">
                    {title}
                </span>{" "}
                {description}
            </p>
            <Image
                src={imageSrc}
                alt="Content image"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
    );
};

export default Modal;
