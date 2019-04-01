export const generateCoordinates = ({ centerX, centerY, numberOfSides, radius, rotation }) => {
    const coordinates = [ ...Array(numberOfSides) ]
    return coordinates.map((element, index) => ({
        x: parseFloat((centerX + radius * Math.cos(rotation + (index * 2 * Math.PI / numberOfSides))).toFixed(4)),
        y: parseFloat((centerY + radius * Math.sin(rotation + (index * 2 * Math.PI / numberOfSides))).toFixed(4))
    }))
}
