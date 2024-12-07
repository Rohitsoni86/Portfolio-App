
'use client'
import React from "react";
import { Spotlight } from "./UI/Spotlight";
import { TextGenerateEffect } from "./UI/text-generate-effect";
import Link from "next/link";
import { Button } from "./UI/moving-border";
import { TypewriterEffectSmooth } from "./UI/typewriter-effect";
import { FlipWords } from "./UI/flip-words";
import Image from "next/image";
import { BackgroundLines } from "./UI/background-lines";
import { BackgroundGradient } from "./UI/background-gradient";

export default function HeroSection() {
	const words = [
		"Rohit Soni !",
		"Full Stack Developer.",
		"Web Designer.",
		"Web Developer.",
		"MERN Developer.",
	];

	return (
		<div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto ">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			 
			<div className="h-screen relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden -top-10 md:-top-20 p-4 ">
				<div className=" relative z-10 w-full text-left border-0 px-4">
					<h1 className="text-2xl text-center  md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
						Hi, i'm
					</h1>
					<h1 className=" text-3xl ml-1 text-center  mt-2 md:text-7xl font-bold text-indigo-400">
						<FlipWords words={words} />
					</h1>
					<div className="mt-10">
						 <BackgroundLines className="top-0 flex items-center justify-center w-full flex-col px-4"> 
							 <BackgroundGradient className="rounded-full max-w-sm bg-white dark:bg-zinc-900">
							<Image
								src="/rohit-soni.JPEG"
								alt="Rohit Image"
								className="rounded-full  z-100"
								height={"150"}
								width={"150"}
							/>
							</BackgroundGradient>
							</BackgroundLines>
							
						</div>

					<div className="mt-10 text-center">
						<Link href={"#explore"}>
							<Button
								// borderRadius="1.75rem"
								className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 backdrop-blur-lg"
							>
								Explore Me
							</Button>
						</Link>
					</div>
				</div>
			</div>
					</div>
	);
}
