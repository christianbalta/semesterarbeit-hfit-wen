import React from 'react';
import people from '../../assets/people.png';
import serverIllustration from '../../assets/undraw_server_re_twwj.svg';
import './header.css';

const Header = () => (
	<div className="gs__header section__padding" id="home">
		<div className="gs__header-content">
			<h1 className="gradient__text">Rent your private Gaming Server</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error est ipsam reiciendis veritatis vitae.A atque consectetur fugiat ipsum laudantium nam quia voluptatem. Dolores repudiandae, veritatis? Ad molestiae quia quibusdam.</p>

			<div className="gs__header-content__people">
				<img src={people} />
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, natus.</p>
			</div>
		</div>

		<div className="gs__header-image">
			<img src={serverIllustration} />
		</div>
	</div>
);

export default Header;
