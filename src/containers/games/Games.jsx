import React from 'react';
import Game from '../../components/game/Game';
import { game01, game02, game03, game04, game05 } from './imports';
import './games.css';

const Games = () => (
	<div className="gs__games section__padding" id="games">
		<div className="gs__games-heading">
			<h1 className="gradient__text">Lorem ipsum dolor sit. <br /> Lorem ipsum dolor sit amet.</h1>
		</div>
		<div className="gs__games-container">
			<div className="gs__games-container_groupA">
				<Game imgUrl={game01} gameInfo="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." text="V-Rising" />
			</div>
			<div className="gs__games-container_groupB">
				<Game imgUrl={game02} gameInfo="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut." text="Valheim" />
				<Game imgUrl={game03} gameInfo="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut." text="ARK Survival" />
				<Game imgUrl={game04} gameInfo="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut." text="Rust" />
				<Game imgUrl={game05} gameInfo="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut." text="Minecraft" />
			</div>
		</div>
	</div>
);

export default Games;
