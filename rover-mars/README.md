# Rover Mars Mission Challenge v0.2

## Introduction

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface
of the planet. Develop a software that translates the commands sent from earth to instructions
that are understood by the rover.

## Requirements

- You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W)
it is facing.
- The rover receives a collection of commands. (E.g.) FFRRFFFRL
- The rover can move forward (f).
- The rover can move left/right (l,r).
- Suppose we are on a really weird planet that is square. 200x200 for example :)
- Implement obstacle detection before each move to a new square. If a given
sequence of commands encounters an obstacle, the rover moves up to the last
possible point, aborts the sequence and reports the obstacle.

## Solution

I defined the `current location` of the rover with **x** and **y** axis in order to know its position in the map that is 200 x 200. Then I defined where the rover is facing (North, South, East or West). Moreover, rover has a `status obstacle` to know if there is an obstacle infront of it.


Moving through the map it is possible to the rover by giving orders on clicking to the buttons `Forward`, `Right` and `Left`. Moving forward simply means that the rover is moving x or y axial depending where it is facing and if there are no obstacles infront of him. By clicking right or left, the rover rotates his cardinal point.

All in all, the rover is capable to move arround the map by receiving instructions from the buttons and if his obstacle detector work correctly by sending information to him if there is and obstacle in front so that prevents to be crushed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## V 0.2

- added some style.
- obstacles now appears in random positions.

## TODO
- Improve style
- Code refactoring