import React from 'react';
import aboutImage from '../../assets/Gaming-rafiki-simple.svg';
import './about.css';

const About = () => (
	<div className="gs__about section__padding" id="about">
		<div className="gs__about-image">
			<img src={aboutImage} alt="about" />
		</div>
		<div className="gs__about-content">
			<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
			<h1 className="gradient__text">Lorem ipsum dolor. <br /> Lorem ipsum dolor.</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque esse neque quis ratione repudiandae sequi sunt suscipit! Eveniet, ipsa repudiandae?</p>
			<h4>Lorem ipsum dolor sit amet.</h4>
		</div>
	</div>
);

export default About;
