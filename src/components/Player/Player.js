import React from 'react';
import './Player.css';

const Player = (props) => {
    const {name,salary,img} = props.player;
    const handleHirePlayer = props.handleHirePlayer;
    return (
        <div className="player-info">
            <h4>Player name is : {name}</h4>
            <h4>Salary : {salary}</h4>
            <img src={img} alt="" />
            <br />
            <br />
            <button onClick={()=>handleHirePlayer(props.player)} class="button">Hire</button>
        </div>
    );
};

export default Player;