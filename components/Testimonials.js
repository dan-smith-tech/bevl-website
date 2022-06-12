import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import testimonialsStyles from "../styles/testimonials.module.css";

export default function Testimonials() {
	const testimonialData = [
		{
			image: "pp1.jpg",
			quotation: "This is the best platform for personal organisation. It has helped me declutter my mind and allows me to accomplish more, in less time.",
			author: "Dan Smith | Software Engineer",
		},
		{
			image: "pp2.jpg",
			quotation: "We've seen amazing results already. It's just amazing. ",
			author: "Katlin Irwin | Productivity Enthusiast",
		},
		{
			image: "pp3.jpg",
			quotation: "Bevl has completely surpassed our expectations. Great job, I will definitely be ordering again! It's the perfect solution for our business.",
			author: "Spartak Firoozeh | Content Creator",
		},
		{
			image: "pp4.jpg",
			quotation: "Thanks guys, keep up the good work! We've used Bevl for the last five years, and it has completely surpassed our expectations.",
			author: "Brân Isaaku | Freelancer",
		},
	];

	const contentRef = useRef();
	var contentElement = null;

	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	useEffect(() => {
		contentElement = contentRef.current;
		const interval = setInterval(() => setCurrentTestimonial((currentTestimonial) => (currentTestimonial === testimonialData.length - 1 ? 0 : currentTestimonial + 1)), 3500);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={"container-full " + testimonialsStyles["container-full"]}>
			<div className={"container-partial " + testimonialsStyles["container-partial"]}>
				<div className={testimonialsStyles["container-content"]} ref={contentRef}>
					<div className={testimonialsStyles["container-images"]}>
						{testimonialData.map((testimonial, i) => {
							return (
								<>
									{i === currentTestimonial && (
										<div className={testimonialsStyles["container-image"]} key={i}>
											<Image src={"/images/photos/" + testimonial.image} layout="fill" className={testimonialsStyles["image"]} draggable="false" />
										</div>
									)}
								</>
							);
						})}
					</div>
					<div className={testimonialsStyles["container-texts"]}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
							<path
								fill="#fe4c5f"
								fillOpacity="1"
								d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"
							></path>
						</svg>
						{testimonialData.map((testimonial, i) => {
							return (
								<>
									{i === currentTestimonial && (
										<div className={testimonialsStyles["container-text"]} key={i}>
											<p className={testimonialsStyles["quotation"]}>"{testimonial.quotation}"</p>
											<h5>{testimonial.author}</h5>
										</div>
									)}
								</>
							);
						})}
					</div>
				</div>
				<div className={testimonialsStyles["container-nav"]}>
					{testimonialData.map((testimonial, i) => (
						<button
							className={i === currentTestimonial ? testimonialsStyles["nav-element"] + " " + testimonialsStyles["nav-element-selected"] : testimonialsStyles["nav-element"]}
							onClick={() => setCurrentTestimonial(i)}
							key={i}
						></button>
					))}
				</div>
			</div>
		</div>
	);
}
