// Read a text file in JavaScript using Node.js

const fs = require( 'fs' );  // Hover on require and click 'Enable coding assistance for Node.js'
const filePath = 'jsReadFile/input.txt';  // Replace with your file path
const maps = 'jsReadFile/maps.txt';

fs.readFile( filePath, 'utf8', ( err, content ) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(content);
    myarray = content.split("\r\n");
    const instructions = myarray[0]
    myarray.splice(0, 2)
    const nodes = myarray
// const keysArray = []
// const nodesArray = []
    const nodesMap = new Map();
    for (let i = 0; i < nodes.length; i++) {
        const split = nodes[i].split(" = ")
// keysArray[i] = split[0]
// nodesArray[i] = split[1]
        const valueArray = split[1].replace("(", "").replace(")", "").split(", ")
        nodesMap.set(split[0], valueArray)

    }
    console.log(nodesMap);
    // let start = nodesMap.get("AAA")
    // console.log(start);
    let start ="AAA"
    let count = 0;

    let keepgoing = true;
    while (keepgoing) {
        for (let i = 0; i < instructions.length; i++) {
            let index = -1;
            if (instructions.charAt(i) === "R") {
                index = 1;
            } else {
                index = 0;
            }
            const values = nodesMap.get(start);
            start = values[index];
            count++

        }
        console.log(start)
        if (start === "ZZZ") {
            keepgoing = false;
        }
    }
 console.log(count)
});
