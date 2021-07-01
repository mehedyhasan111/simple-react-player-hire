import React from 'react';
import './SelectedPlayer.css';

const SelectedPlayer = (props) => {
    const selectedPlayer = props.selectedPlayer;
    

    let totalSalary = 0;
    for (let i = 0; i < selectedPlayer.length; i++) {
        const player = selectedPlayer[i];
        totalSalary = totalSalary + player.salary;
    }

    return (
        <div className="squad">
            <h1>MY SQUAD</h1>
            <h4>Player Hired : {selectedPlayer.length}</h4>
            
            <p>Total salary: {totalSalary}</p>
            {
                selectedPlayer.map(footballer=>
                    <div className="added-player-info">
                        <img src={footballer.img} alt="" />
                        <p>{footballer.name}</p>
                        <p>Player Salary : {footballer.salary}</p>
                    
                    </div>
                     )
            }
        </div>
    );
};

export default SelectedPlayer;