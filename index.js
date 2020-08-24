const bruteForceTwoSum = (array, sum) => {
    const output = []
    if (array.length > 1) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i+1; j < array.length; j++) {
                if (array[i] + array[j] === sum) {
                    output.push([array[i], array[j]])
                }
            }
        }
        return output
    }
}

const binarySearchTwoSum = (array, sum) => {
    const output = []
    const sorted = array.sort()
    if (sorted.length > 1) {
        for (let i = 0; i < sorted.length; i++) {
            const target = sum - sorted[i]
            if (binaryMatch(sorted.slice(i), target)) {
                output.push([array[i], target])
            
            }
        }
        return output
    }
}

const binaryMatch = (sortedArray, target) => {
    if (sortedArray.length <= 1) {return false}
    let startIndex = 0;
    let endIndex = sortedArray.length;
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (sortedArray[middleIndex] === target) {
        return true
    } else if (sortedArray[middleIndex] > target) {
        return binaryMatch(sortedArray.slice(startIndex, middleIndex),target)
    } else {
        return binaryMatch(sortedArray.slice(middleIndex, endIndex-1),target)
    }
}

const hashTwoSum = (array, sum) => {
    const dictionary = {}
    array.forEach(element => {
        if (!!dictionary[element]) {
            dictionary[element] += 1
        } else {
            dictionary[element] = 1
        }
    })
    const output = []
    array.forEach((element) => {
        if (dictionary[sum - element] > 0) {
            dictionary[sum - element] -= 1
            dictionary[element] -= 1
            output.push([element, sum - element])
        }
    })
    return output
}