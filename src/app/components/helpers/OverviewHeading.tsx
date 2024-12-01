"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../UI/lamp";
import { TextGenerateEffect } from "../UI/text-generate-effect";

export function OverviewHeading({
	firstLineText,
	secondLinetext,
}: {
	firstLineText: string;
	secondLinetext?: string;
}) {
	return (
		<LampContainer className="
		border-0 h-56">
			<motion.h1
				initial={{ opacity: 0.5, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className=" bg-gradient-to-br from-slate-300 mt-[16rem] to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
			>
				<div className="mt-10">
					<div>{firstLineText}</div>
					<div>
						{secondLinetext ? (
							<TextGenerateEffect words={secondLinetext} />
						) : (
							""
						)}
					</div>
				</div>
			
			</motion.h1>
		</LampContainer>
	);
}
