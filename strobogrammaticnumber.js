//Objective is to see whether the flipped form of our input is the same as our
//original input

let num = '69'


//O(n) solution that maps out all of the values that match and uses a two-pointer
//approach to compare from the front and back

let map = {
    '6': '9',
    '9': '6',
    '0': '0',
    '1': '1',
    '8': '8',
}

let left = 0
let right = num.length - 1

while (left <= right) {
    if (map[num[left]] != num[right]) {
        return false
    }
    left++
    right--
}

return true