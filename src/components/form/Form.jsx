import React from 'react';
import './form.css';

const Form = () => (
	<div className="gs__form-container section__padding">
		<h1 className="gs__form-heading">Rent your server</h1>
		<div className="gs__input-container">
			<h3>Game</h3>
			<form>
				<h3>Number of slots</h3>
				<label htmlFor="slots-10">
					<input type="radio" id="slots-10" value="10" />
					10
				</label>
			</form>
		</div>
	</div>
);

export default Form;
