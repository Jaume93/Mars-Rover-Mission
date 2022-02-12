import React, { useState } from 'react';
import { planet, obstacles } from '../config';
import { getNextPosition } from './move';
import './Rover.css';
import './move'

export const Rover = () => {
    const [x, setX] = useState(planet.width / 2);
    const [y, setY] = useState(planet.height / 2);
    const [facing, setFacing] = useState('North');

    const goForward = () => {
        const { x: newX, y: newY, collision } = getNextPosition(x, y, obstacles, planet, facing);
        if (collision) return console.log('Collision detected!!');

        console.log(x, y, collision);
        setX(newX);
        setY(newY);
    }

    const rotateRight = () => {
        if (facing == 'North') {
            setFacing('East')
            console.log('Rover rotating to East');

        } else if (facing == 'East') {
            setFacing('South')
            console.log('Rover rotating to South');

        }
        else if (facing == 'West') {
            setFacing('North')
            console.log('Rover rotating to Nort');

        } else if (facing == 'South') {
            setFacing('West')
            console.log('Rover rotating to West');

        } else {
            console.log('moving rover to an invalid position');
        }
    }

    const rotateLeft = () => {
        if (facing == 'North') {
            setFacing('West')
            console.log('Rover rotating to West');
        } else if (facing == 'East') {
            setFacing('North')
            console.log('Rover rotating to Nort');

        } else if (facing == 'West') {
            setFacing('South')
            console.log('Rover rotating to South');

        } else if (facing == 'South') {
            setFacing('East')
            console.log('Rover rotating to East');
        }
        else {
            console.log('moving rover to an invalid position');
        }
    }

    return (
        <div className='container'>
            <div className='planetContainer'>
                <div className="planet">
                    <div className="rover" style={{ top: y, left: x }}></div>
                    {obstacles.map(({ x, y }) => (
                        <div className="obstacle" style={{ top: y, left: x }}></div>
                    ))}
                </div>
            </div>
            <h3>Instructions</h3>
            <div className='buttons'>
                <button onClick={rotateLeft} className='btnLeft'> Left </button>
                <button onClick={goForward} className='btnForward'> Forward </button>
                <button onClick={rotateRight} className='btnRight'> Right </button>
            </div>
        </div>
    )
}