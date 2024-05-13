const findObstacleInPos = (x, y, obstacle) => {
    return obstacle.x === x && obstacle.y === y;
}

const findObstacle = (x, y, obstacles) => {
    const obstacle = obstacles.find(obstacle => findObstacleInPos(x, y, obstacle));
    return !!obstacle;
}
const isPlanetLimit = (x, y, planet) => {
    const horizontalLimit = x === 0 || planet.width === x;
    const verticalLimit = y === 0 || planet.height === y;
    return horizontalLimit || verticalLimit;
}
export const getNextPosition = (x, y, obstacles, planet, facing) => {
    const planetLimit = isPlanetLimit(x, y, planet);
    const hasObstacle = findObstacle(x, y, obstacles);

    if (planetLimit || hasObstacle) return { x, y, collision: true };

    if (facing == 'North') return { y: y - 20, x };

    if (facing == 'East') return { y, x: x + 20 };

    if (facing == 'West') return { y, x: x - 20 };

    if (facing == 'South') return { y: y + 20, x };
}