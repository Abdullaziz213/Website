import React from 'react';
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/abdullaziz.png";




const Hero = () => {
    return (
        <div className="relative overflow-clip bg-[linear-gradient(to_bottom,#000,#281942_35%,#8F5C55_60%,#DBAF6E_80%)]">
            
            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                    bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

            <div className="relative">
                <div className="text-8xl font-bold text-center">
                    <h1 className="text-[#98B4CE]">Hello, I am</h1>
                    <h1 className="text-[#E48A57]">Abdullaziz Hassen Abdella</h1>
                </div>

            
            
                

            <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
            I am a computer science student at the Cantonal School am Brühl. I am a motivated worker with the goal of always finding a solution.
            </p>

            <Image
                src={profilepic}
                alt="profile pic"
                className="h-auto w-auto mx-auto"
            />

        </div>

    </div>
    )
}


export default Hero