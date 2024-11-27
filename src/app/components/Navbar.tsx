"use client";
import React, { useEffect, useState } from "react";
import { LuHome } from "react-icons/lu";
import { FaWpexplorer } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import Link from "next/link";

export function MainNavBar() {
	useEffect(() => {
    // Redirect to the #home section on page load
    window.location.hash = "#home";
  }, []); // Empty dependency array ensures this runs once when the component mounts
	return (
		<div className="relative w-full flex items-center justify-center">
			<Navbar className="top-10" />
		</div>
	);
}

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>('home');

    

	return (
		<>
			<div className="fixed bottom-0 sm:bottom-4 z-10">
				<div className="px-7 bg-white shadow-lg rounded-xl">
					<div className="flex">
						<div className="flex-1 group">
							<Link
								href="#home"
								onClick={() => setActive("home")}
								className={`flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600
                                    ${active === "home"
										? "text-indigo-700"
										: "group-hover:text-indigo-500"
									}`}
							>
								<span className=" px-1 pt-1 pb-1  flex flex-col justify-center items-center">
									<LuHome className=" text-2xl pt-1 mb-1 block" />
									<span className="block text-xs pb-2">Home</span>
									<span
										className={`block w-5 mx-auto h-1 ${active === "home"
												? "bg-indigo-500"
												: "group-hover:bg-indigo-500"
											}  rounded-full`}
									></span>
								</span>
							</Link>
						</div>
						<div className="flex-1 group">
							<Link
								href="#explore"
								onClick={() => setActive("explore")}
								className={`flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600
                                    ${active === "explore"
										? "text-indigo-700"
										: "group-hover:text-indigo-500"
									}`}
							>
								<span className=" px-1 pt-1 pb-1  flex flex-col justify-center items-center">
									<FaWpexplorer className="far fa-search text-2xl pt-1 mb-1 block" />
									<span className="block text-xs pb-2">Explore</span>
									<span
										className={`block w-5 mx-auto h-1 ${active === "explore"
												? "bg-indigo-500"
												: "group-hover:bg-indigo-500"
											}  rounded-full`}
									></span>
								</span>
							</Link>
						</div>
						<div className="flex-1 group">
							<Link
								href="#projects"
								onClick={() => setActive("projects")}
								className={`flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600
                                    ${active === "projects"
										? "text-indigo-700"
										: "group-hover:text-indigo-500"
									}`}
							>
								<span className=" px-1 pt-1 pb-1  flex flex-col justify-center items-center">
									<TbDeviceAnalytics className="far fa-cog text-2xl pt-1 mb-1 block" />
									<span className="block text-xs pb-2">Projects</span>
									<span
										className={`block w-5 mx-auto h-1 ${active === "projects"
												? "bg-indigo-500"
												: "group-hover:bg-indigo-500"
											}  rounded-full`}
									></span>
								</span>
							</Link>
						</div>
						<div className="flex-1 group">
							<Link
								href="#contact"
								onClick={() => setActive("contact")}
								className={`flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600
                                    ${active === "contact"
										? "text-indigo-700"
										: "group-hover:text-indigo-500"
									}`}
							>
								<span className=" px-1 pt-1 pb-1  flex flex-col justify-center items-center">
									<IoIosContact className="far fa-search text-2xl pt-1 mb-1 block" />
									<span className="block text-xs pb-2">Contact</span>
									<span
										className={`block w-5 mx-auto h-1 ${active === "contact"
												? "bg-indigo-500"
												: "group-hover:bg-indigo-500"
											}  rounded-full`}
									></span>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
