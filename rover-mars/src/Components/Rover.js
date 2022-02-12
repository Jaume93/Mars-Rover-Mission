import React, { useState } from 'react';
import { planet, obstacles } from '../config';
import { getNextPosition } from './move';
import { rotateLeft, rotateRight } from './rotate';
import './Rover.css';
import './move'

export const Rover = () => {
    const [x, setX] = useState(planet.width / 2);
    const [y, setY] = useState(planet.height / 2);
    const [facing, setFacing] = useState('North');
    let newFacing

    const goForward = () => {
        const { x: newX, y: newY, collision } = getNextPosition(x, y, obstacles, planet, facing);
        if (collision) return console.log('Collision detected!!');

        console.log(x, y, collision);
        setX(newX);
        setY(newY);
    }
    const isRotatingToRight = () => {
        rotateRight(facing, setFacing, newFacing)

    }
    const isRotatingToLeft = () => {
        rotateLeft(facing, setFacing, newFacing)
    }
    return (
        <div className='container'>
            <div className='title'>
                <h1 >Rover Mars Mission</h1>
            </div>
            <div className='planetContainer'>
                <div className="planet">
                    <div className="rover" style={{ top: y, left: x }}></div>
                    {obstacles.map(({ x, y }) => (
                        <div className="obstacle" style={{ top: y, left: x }}></div>
                    ))}
                </div>
            </div>
            <h3 className='title'>Instructions</h3>
            <div className='buttons'>
                <button onClick={isRotatingToLeft} className='btnLeft'> Left </button>
                <button onClick={goForward} className='btnForward'> Forward </button>
                <button onClick={isRotatingToRight} className='btnRight'> Right </button>
            </div>
        </div>
    )
}