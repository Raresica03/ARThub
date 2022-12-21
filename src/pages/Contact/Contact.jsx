import React from "react";

const Contact = () => {
	return (
		<div>
			<h1>Contact Us</h1>
			<p>At our company, we value customer feedback and are always happy to hear from you. Please use the form below to send us a message and we will get back to you as soon as possible.</p>
			<form>
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" />
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" />
				<label htmlFor="message">Message:</label>
				<textarea id="message"></textarea>
				<button type="submit">Send Message</button>
			</form>
		</div>
	);
};

export default Contact;
