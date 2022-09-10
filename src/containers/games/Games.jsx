import React, {useState, useRef} from 'react';
import Game from '../../components/game/Game';

import './games.css';
import {Form} from "../../components";
import {data} from "../../data/data";

const Games = () => {
    const [selectedGame, setSelectedGame] = useState('No Game selected');
    const [selectedGameImage, setSelectedGameImage] = useState('https://via.placeholder.com/300');
    const ref = useRef(null);

    const handleClick = (gameName, gameImage) => {
        setSelectedGame(gameName);
        setSelectedGameImage(gameImage);
        ref.current?.scrollIntoView({behavior: "smooth"});
    }

    return (

        <div className="gs__games section__padding" id="games">
            <div className="gs__games-heading">
                <h1 className="gradient__text">Lorem ipsum dolor sit. <br/> Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="gs__games-container">
                <div className="gs__games-container_groupA pointer" onClick={() => handleClick(data[0].gameName, data[0].gameImage)}>
                    <Game imgUrl={data[0].gameImage}
                          gameInfo={data[0].gameInfo}
                          gameName={data[0].gameName}/>
                </div>
                <div className="gs__games-container_groupB">
                    <div className="pointer" onClick={() => handleClick(data[1].gameName, data[1].gameImage)}>
                        <Game imgUrl={data[1].gameImage}
                              gameInfo={data[1].gameInfo}
                              gameName={data[1].gameName}/>
                    </div>
                    <div className="pointer" onClick={() => handleClick(data[2].gameName, data[2].gameImage)}>
                        <Game imgUrl={data[2].gameImage}
                              gameInfo={data[2].gameInfo}
                              gameName={data[2].gameName}/>
                    </div>
                    <div className="pointer" onClick={() => handleClick(data[3].gameName, data[3].gameImage)}>
                        <Game imgUrl={data[3].gameImage}
                              gameInfo={data[3].gameInfo}
                              gameName={data[3].gameName}/>
                    </div>
                    <div className="pointer" onClick={() => handleClick(data[4].gameName, data[4].gameImage)}>
                        <Game imgUrl={data[4].gameImage}
                              gameInfo={data[4].gameInfo}
                              gameName={data[4].gameName}/>
                    </div>
                </div>
            </div>
            <div ref={ref}>
                <Form selectedGame={selectedGame} selectedGameImage={selectedGameImage}/>
            </div>
        </div>
    );
}

export default Games;
