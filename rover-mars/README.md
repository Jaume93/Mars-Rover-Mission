# Rover Mars Mission Challenge v0.3

## Introduction

It has been developed a very expensive sofware to start a mission of expliration in Mars with a rover.
You’re giving instructions remotely from the Earth to a rover to explore Mars suface of the planet.
Be aware of the rocks and do not take collision with them.

## Requirements

- You are given the initial starting point of a rover and the direction (N,S,E,W)
  it is facing.
- The rover receives a collection of commands. (E.g.) FFRRFFFRL
- The rover can move forward (f).
- The rover can rotate left/right (l,r).
- We are supposing the planet is very weird being a square.
- Implement obstacle detection before each move to a new square. If a given
  sequence of commands encounters an obstacle, the rover moves up to the last
  possible point, aborts the sequence and reports the obstacle.

## Solution

I defined the `current location` of the rover with **x** and **y** axis in the middle of the map in order to know its position. Then I defined the rover always start facing North. Moreover, rover has a `status obstacle` to know if there is an obstacle infront of it.

Moving through the map it is possible to the rover by giving orders on clicking to the buttons `Forward`, `Right` and `Left`. Moving forward simply means that the rover is moving x or y axial depending where it is facing and if there are no obstacles infront of him. By clicking right or left, the rover rotates his cardinal point.

All in all, the rover is capable to move arround the map by receiving instructions from the buttons and if his obstacle detector work correctly by sending information to him if there is and obstacle in front so that prevents to be crushed.

## Available Scripts

First ensure you're in rover-mars folder, do `cd rover-mars` and then `npm i`.

Then in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
By defalut it will be open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## V 0.3.1

- Added some style.
- Obstacles now appears in random positions.
- Added images for rover, rocks and planet.
- Code refactored
- Improved Readme
- Changed favicon & title
- Cleared console warnings

## TODO

- Improve style
- Alert message when its facing a collision
- Spawning again after a collision
- Randomize starting position of the rover
- Extract visible data from console to the page (position, facing, collision).
- Add compass rose to know the directions
