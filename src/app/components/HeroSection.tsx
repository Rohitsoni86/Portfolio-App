import React from 'react'
import { Spotlight } from './UI/Spotlight'
import { TextGenerateEffect } from './UI/text-generate-effect'
import Link from 'next/link'
import { Button } from './UI/moving-border'
import { TypewriterEffectSmooth } from './UI/typewriter-effect'

export default function HeroSection() {

     const words = [
    {
      text: "i",
    },
    {
      text: "am",
    },
   
    {
      text: "Rohit Soni.",
      className: "text-indigo-400 text-4xl",
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto ">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			<div className="h-screen relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden -top-20 p-4 ">
				<div className=" relative z-10 w-full text-left border-0 px-4">
					<h1 className=" text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
						Hi, 
					</h1>
                    <h1 className=" text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
						i am <span className='text-indigo-400 text-4xl'>Rohit Soni</span> ! 

                        
					</h1>
                      {/* <TypewriterEffectSmooth words={words} /> */}
					<div className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                        <TextGenerateEffect words={`Full Stack Developer passionate about modern UI/UX design and solving complex problems.`} />
						
					</div>
					<div className="mt-10 text-center">
						<Link href={"#explore"}>
							<Button
								// borderRadius="1.75rem"
								className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 backdrop-blur-md"
							>
								Explore Me
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
  )
}
