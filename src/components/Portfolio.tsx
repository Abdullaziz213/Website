"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import proj1 from "../assets/Wecker.png";
import proj2 from "../assets/RocketJump.png";
import proj3 from "../assets/autoverleih.png";
import proj4 from "../assets/Autokaufbild.png";


const projects = [
    {
        title: "Alarm clock",
        desc: "A small alarm clock that I made during an internship at Lässer AG. I used an Adafruit PyPortal Titano for this and programmed it using the CircuitPython programming language.",
        devStack: "CircuitPython",
        git: "https://github.com/Abdullaziz213/My-Projects/tree/main/Wecker_Projekt_Abdullaziz_Hassen_Abdella",
        src: proj1
    },

    {
        title: "My first Game",
        desc: "I created this small game as a project during High school. I taught myself the C# programming language and how to use Unity.",
        devStack: "C#",
        git: "https://github.com/Abdullaziz213/My-Projects/tree/main/Mein_erstes_Spiel",
        src: proj2
    },

    {
        title: "Car rental app",
        desc: "A car rental app that I developed using Java. It includes a login page and a main page with rental options.",
        devStack: "Java",
        git: "https://github.com/Abdullaziz213/My-Projects/tree/main/The_American_Dream_Autoverleih_Abdullaziz",
        src: proj3
    },

    {
        title: "Car purchasing website",
        desc: "A cool website where you can find listed cars. It includes a login page and a page with all the cars listed by registered users. There is also a separate page with your own listed vehicles, as well as the option to list your own cars.",
        devStack: "NodeJs",
        git: "https://github.com/Abdullaziz213/My-Projects/tree/main/autokauf_abdullaziz",
        src: proj4
    },
]




const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

<h1 className='text-white text-6xl w-[320px] mx-auto font-semibold my-12'>
My <span className='text-orange-400'>Projects</span></h1>

            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 75}}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once: true}}
                    transition={{ duration: 0.5, delay: 0.25}}
                    className={` mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                    >
                        <div className="space-y-2 max-w-[400px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.git}>Git</a>
                            </div>

                        </div>

                        <div className="flex justify-center items-center">
                            <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border
                                                        rounded border-gray-700"/>
                        </div>

                    </motion.div>
                )
                )}
            </div>

        </div>
    )
}


export default Portfolio;