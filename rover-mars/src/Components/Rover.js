import React, { useState } from 'react';
import './Rover.css';

export const Rover = () => {

    let [x, setX] = useState(0);
    let [y, setY] = useState(0);
    let currentPosition = { x, y }
    let statusObstacle = false;
    const [facing, setFacing] = useState('North');

    const obstacles = {
        obstacle1: { x: 1, y: 0 },
        obstacle2: { x: 1, y: 1 },
    }


    const obstacleDetector = () => {

        console.log(currentPosition);
        if (currentPosition == obstacles.obstacle1 || obstacles.obstacle2) {
            console.log('Obstacle in front');
            statusObstacle = true
        }
        if (statusObstacle == true) {

        }
    }
    console.log(statusObstacle);

    const goForward = () => {
        obstacleDetector()
        if (facing == 'North') {
            if (y == 200) {
                console.log('moving rover to an invalid position');
                return
            }
            else {
                setY(y + 1)
                setFacing('North')
            }
        } else if (facing == 'East') {
            if (x == 200) {
                console.log('moving rover to an invalid position');
                return
            }
            else {
                setX(x + 1)
                setFacing('East')
            }
        } else if (facing == 'West') {
            if (x == 0) {
                console.log('moving rover to an invalid position');
                return
            }
            else {
                setX(x - 1)
                setFacing('West')
            }
        } else if (facing == 'South') {
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

        } else if (facing == 'East') {
            setFacing('South')
            console.log('Rover rotating to South');

        } else if (facing == 'West') {
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

    console.log('x:', currentPosition.x, 'y:', currentPosition.y, facing, 'obstacle :', statusObstacle);

    return (
        <div className='container'>
            <h3>Instructions</h3>
            <div className='buttons'>
                <button onClick={rotateLeft} className='btnLeft'> Left </button>

                <button onClick={goForward} className='btnForward'> Forward </button>

                <button onClick={rotateRight} className='btnRight'> Right </button>
            </div>
        </div>
    )
}