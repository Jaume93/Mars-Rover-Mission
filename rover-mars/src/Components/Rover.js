import React, { useState } from 'react';
import './Rover.css';

export const Rover = () => {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);
    const [facing, setFacing] = useState('North');

    const obstacle = { x: 1, y: 0 };


    const goForward = () => {
        if (facing == 'North') {
            if (y == 200) {
                console.log('moving rover to an invalid position');
                return
            }
            else {
                setY(y + 1)
                setFacing('North')
            }
        }
        else if (facing == 'East') {
            if (x == 0) {
                console.log('moving rover to an invalid position');
                return
            }
            else {
                setX(x + 1)
                setFacing('East')
            }
        }
        else if (facing == 'West') {
            if (x == 0) {
                console.log('moving rover to an invalid position');
                return
            }
            else {
                setX(x - 1)
                setFacing('West')
            }
        }
        else if (facing == 'South') {
            if (y == 0) {
                console.log('moving rover to an invalid position');
                return
            }
            else {
                setY(y - 1)
                setFacing('South')
            }
        }
        else {
            console.log('moving rover to an invalid position');
        }
    }


    const rotateRight = () => {
        if (facing == 'North') {
            setFacing('East')
            console.log('Rover rotating to East');
        }
        else if (facing == 'East') {
            setFacing('South')
            console.log('Rover rotating to South');

        }
        else if (facing == 'West') {
            setFacing('North')
            console.log('Rover rotating to Nort');

        }
        else if (facing == 'South') {
            setFacing('West')
            console.log('Rover rotating to West');

        }
        else {
            console.log('moving rover to an invalid position');
        }
    }


    const rotateLeft = () => {
        if (facing == 'North') {
            setFacing('West')
            console.log('Rover rotating to West');
        }
        else if (facing == 'East') {
            setFacing('North')
            console.log('Rover rotating to Nort');

        }
        else if (facing == 'West') {
            setFacing('South')
            console.log('Rover rotating to South');

        }
        else if (facing == 'South') {
            setFacing('East')
            console.log('Rover rotating to East');
        }
        else {
            console.log('moving rover to an invalid position');
        }
    }
    console.log('x:', x, 'y:', y, facing);

    return (
        <div>
            <h3>Instructions</h3>
            <div>
                <button onClick={goForward} className='btnForward'> Forward </button>

                <button onClick={rotateLeft}> Left </button>

                <button onClick={rotateRight}> Right </button>
            </div>
        </div>
    )
}