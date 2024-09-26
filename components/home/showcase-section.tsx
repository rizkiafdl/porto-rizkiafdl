import React from 'react'
import { ThreeDCardDemo } from '../ui/threecarddemo'
import { TextHoverEffect } from '../ui/text-hover-effect'
export const ShowcaseSection = () => {
    return (
        <div className='flex-row justify-center items-center'>
            <div className="h-[20rem] flex items-center justify-center">
                <TextHoverEffect text='Recent Project' />
            </div>
            <div className='sm:flex-row grid grid-cols-3 grid-flow-row auto-cols-max gap-4'>
                <ThreeDCardDemo
                    linkHref='https://github.com/rizkiafdl/Diabetes-Predicting-Application'
                    title="Diabetes Prediction Machine Learning"
                    date="2024,19 September"
                    img={"/biodiverse/diabetes.png"}
                    tooltip={["Python", "Sklearn", "Streamlit", "Machine Learning"]} />
                <ThreeDCardDemo
                    linkHref='https://world-country-rho.vercel.app/'
                    title="World Country Information Gate "
                    date="2024,19 September"
                    img={"/biodiverse/world-country.png"}
                    tooltip={["React", "Tailwind CSS", "Axios", "Type Script"]} />
                <ThreeDCardDemo
                    linkHref='https://world-country-rho.vercel.app/'
                    title="Netflix Clone Full Stack Using MERN"
                    date="2024,19 September"
                    img={"/biodiverse/netflix_clone.png"}
                    tooltip={["MongoDB", "React", "Express", "Node JS"]} />
            </div>
        </div>

    )
}
