export const rotateRight = (facing, setFacing, newFacing) => {
    if (facing == 'North') {
        setFacing(newFacing = 'East')
        console.log('Rover rotating to', { newFacing });
        return
    }
    if (facing == 'East') {
        setFacing(newFacing = 'South')
        console.log('Rover rotating to', { newFacing });
        return
    }
    if (facing == 'West') {
        setFacing(newFacing = 'North')
        console.log('Rover rotating to', { newFacing });
        return
    }
    if (facing == 'South') {
        setFacing(newFacing = 'West')
        console.log('Rover rotating to', { newFacing });
        return
    }
    console.log('moving rover to an invalid position');
}

export const rotateLeft = (facing, setFacing, newFacing) => {
    if (facing == 'North') {
        setFacing(newFacing = 'West')
        console.log('Rover rotating to', { newFacing });
        return
    }
    if (facing == 'East') {
        setFacing(newFacing = 'North')
        console.log('Rover rotating to', { newFacing });
        return
    }
    if (facing == 'West') {
        setFacing(newFacing = 'South')
        console.log('Rover rotating to', { newFacing });
        return
    }
    if (facing == 'South') {
        setFacing(newFacing = 'East')
        console.log('Rover rotating to', { newFacing });
        return
    }
    console.log('moving rover to an invalid position');
}