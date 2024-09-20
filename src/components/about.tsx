"use client";
import React from 'react';
import Image from 'next/image';
import book from "../assets/book.png"
import pc from "../assets/pc.png"


const About = () => {
    return (
        <div className='max-w-[1200px] mx-auto ' id='about'>

            <h1 className='text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4'>
                 About <span className='text-orange-400'>me</span></h1>


            <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>


                <div className='w-full md:col-span-5 relative bg-white/10 backfrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Abilities</h2>
                            <p className='text-lg text-white/70 mt-2'>I am a highly ambitious person with the will to always contribute something. I feel good working in a team, and I always strive to learn something new.</p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-3 relative bg-white/10 backfrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                            <p className='text-lg text-white/70 mt-2'>I am doing my computer science training at the Cantonal School am Brühl. I also completed my secondary education at the Blumenau Secondary School.</p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-3 relative bg-white/10 backfrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Personality</h2>
                            <p className='text-lg text-white/70 mt-2'>I am an open person with many goals in life. I always enjoy building new friendships, and I am very consistent when it comes to things like my training.</p>
                        </div>
                    </div>
                </div>


                <div className='w-full md:col-span-5 relative bg-white/10 backfrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Hobbys</h2>
                            <p className='text-lg text-white/70 mt-2'>I train kickboxing twice a week at a kickboxing club. I am also very passionate about martial arts in general. I love football as well, and I played for a club for a long time. I also work out regularly at a fitness center several times a week.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;