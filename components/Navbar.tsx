"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathName = usePathname();
	console.log(pathName);
	return (
		<header className="lg:px-8 px-4 bg-white flex flex-wrap items-center py-6 shadow-md">
			<div className="flex-1 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold italic">
					Next News
				</Link>
			</div>

			<label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
				<svg
					className="fill-current text-gray-900"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
				>
					<title>menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</label>
			<input className="hidden" type="checkbox" id="menu-toggle" />

			<div
				className="hidden md:flex md:items-center md:w-auto w-full"
				id="menu"
			>
				<nav>
					<ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
						<li>
							<Link
								className={`md:p-4 py-3 px-0 transition-all ease-in-out ${
									pathName.includes("business")
										? "text-gray-900 font-semibold"
										: null
								}`}
								href="/articles/category/business"
							>
								Business
							</Link>
						</li>
						<li>
							<Link
								className={`md:p-4 py-3 px-0 transition-all ease-in-out ${
									pathName.includes("technology")
										? "text-gray-900 font-semibold"
										: null
								}`}
								href="/articles/category/technology"
							>
								Technology
							</Link>
						</li>
						<li>
							<Link
								className={`md:p-4 py-3 px-0 transition-all ease-in-out ${
									pathName.includes("world")
										? "text-gray-900 font-semibold"
										: null
								}`}
								href="/articles/category/world"
							>
								World
							</Link>
						</li>
						<li>
							<Link
								className={`md:p-4 py-3 px-0 transition-all ease-in-out ${
									pathName.includes("science")
										? "text-gray-900 font-semibold"
										: null
								}`}
								href="/articles/category/science"
							>
								Science
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
