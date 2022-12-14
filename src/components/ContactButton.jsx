import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

function ContactButton() {
	return (
		<section
			className="px-4 bg-yellow-300 dark:bg-purple-900 hover:bg-black 
			hover:text-white dark:text-gray-300 cursor-pointer border-t-2 border-black dark:border-gray-500 ease-in-out duration-150
			"
		>
			<Link to="/contact">
				<div className="container mx-auto md:flex gap-8 py-24">
					<div className="flex-col items-center">
						<h2 className="text-4xl">Have a project in mind?</h2>
						<h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold">
							Let's get to work.
						</h1>
					</div>

					<div className="text-xl font-bold">
						<Arrow />
					</div>
				</div>
			</Link>
		</section>
	);
}

export default ContactButton;
