import React, { useEffect } from 'react';
import './Players.css';
import { useState } from 'react';
import fakeData from '../../fakeData/playerData.json';
import Player from '../Player/Player';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Players = (props) => {
   
    const [player,setPlayer]=useState([])
    const [players,setPlayers]=useState([])
    const [selectedPlayer,setSelectedPlayer]=useState([])

    useEffect(()=>{
        console.log(fakeData);
        setPlayers(fakeData);
    })

    const handleHirePlayer=(player)=>{
        const newSelectedPlayer = [...selectedPlayer,player]
        setSelectedPlayer(newSelectedPlayer);
    }

    return (
        <div className="players">
            
            <div className="players-info">
            {
                players.map(player=> <Player handleHirePlayer={handleHirePlayer} key={player.id} player={player}></Player>)
            }
            </div>

            <div className="line"></div>

            <div className="team">
                <SelectedPlayer selectedPlayer={selectedPlayer}></SelectedPlayer>
            </div>
            
            
        </div>
    );
};

export default Players;