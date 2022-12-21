import React from "react";
import './Home.css';
import GetStarted from './GetStarted';

const Home = () => {
return (
	<section className="section">
		<div className="mainContainer">
			<div className="mainText">
				<h1 className="the-next">
					The next  {" "}
					<span className="generation">generation of art.</span>
				</h1>
				<div className="getStarted">
						<GetStarted />
				</div>
			</div>
				<h1 className="payment-method">
			Payment Method.
				</h1>
				<p className="citat">
				"Arta nu este niciodată terminată ci doar abandonată." Leonardo Da Vinci
				</p>
		</div>
	</section>
	);
};

export default Home;
