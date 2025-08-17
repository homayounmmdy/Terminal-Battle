min([10,2,8,-2])
max([10,2,8,-2])

function min(array) {
    if (array.length < 0) {
        console.log("Your array is empty")
        return;
    }

    let minNumber = array[0];

    for(let i = 1; i < array.length;i++) {
        if(array[i] < minNumber) {
            minNumber = array[i]
        }
    }

    console.log(minNumber)
}

function max(array) {
    if (array.length < 0) {
        console.log("Your array is empty")
        return;
    }

    let max = array[0];

    for(let i = 1; i < array.length;i++) {
        if(array[i] > max) {
            max = array[i]
        }
    }

    console.log(max)
}
