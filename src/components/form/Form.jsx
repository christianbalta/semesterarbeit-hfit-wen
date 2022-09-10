import React from 'react';
import './form.css';

const Form = ({selectedGame, selectedGameImage}) => (
    <div className="gs__form-container section__padding">
        <h1 className="gs__form-heading gradient__text">Rent your server</h1>
        <div className="gs__input-container">
            <form>
                <div className="gs__radio-buttons gs__m-50">
                    <h3>Number of slots</h3>
                    <input type="radio" value="10slots" name="slot"/> 10 Slots
                    <input type="radio" value="20slots" name="slot"/> 20 Slots
                    <input type="radio" value="30slots" name="slot"/> 30 Slots
                </div>
                <div className="gs__selectedGame gs__m-50">
                    <h3>Selected Game</h3>
                    <p className="gs__selectedGame-text">{selectedGame}</p>
                    <img src={selectedGameImage} width="300px" height="300px"/>
                </div>
                <div className="gs__m-50">
                    <h3>Platform</h3>
                    <select>
                        <option value="PC">PC</option>
                        <option value="PS5">PS5</option>
                        <option value="XBox">XBox</option>
                    </select>
                </div>
                <button type="submit" className="gs__m-50">Submit</button>
            </form>
        </div>
    </div>
);

export default Form;
