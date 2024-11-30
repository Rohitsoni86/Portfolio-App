import Image from "next/image";
import HeroSection from "./components/HeroSection";
import OverViewSection from "./components/OverViewSection";

export default function Home() {
	return (
		<main className="bg-primary">
		
			{/* Sections */}
			<section id="home" className=" ">
				<HeroSection />
			</section>

			<section id="overview" className="">
				<OverViewSection />
			</section>

			<section id="explore" className="h-screen ">
				<h2>Explore Section</h2>
				<p>Welcome to the Explore Section!</p>
			</section>

			<section id="contact" className="h-screen ">
				<h2>Contact Section</h2>
				<p>Welcome to the Contact Section!</p>
			</section>

			<section id="projects" className="h-screen ">
				<h2>Projects Section</h2>
				<p>Welcome to the Projects Section!</p>
			</section>
		</main>
	);
}
