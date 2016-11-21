'use strict'

const DELETE = 0
const INSERT = 1

function diff_arr (arr1, arr2) {

    const c = []

    // Computing the length of the LCS
    for(let x = 0; x < arr1.length; x++) {
        const arr = []
        c.push(arr)
        for(let y = 0; y < arr2.length; y++) {
            const diagonal = x === 0 || y === 0 ? 0 : c[x-1][y-1]
            const vertical = x === 0 ? 0 : c[x-1][y]
            const horizontal = y === 0 ? 0 : c[x][y-1]
            if(arr1[x] === arr2[y]) {
                c[x][y] = diagonal + 1
            } else {
                c[x][y] = Math.max(vertical, horizontal)
            }
        }
    }

    const lcs = []

    let x = arr1.length - 1, y = arr2.length - 1
    while(x >= 0 || y >= 0) {
        if(x >=0 && y >= 0 && arr1[x] === arr2[y]) {
            lcs.unshift(arr1[x])
            x--, y--
        } else if(y >= 0 && (x < 0 || (c[x][y-1] || 0) >= c[x-1][y])) {
            y--
        } else if(x >=0 && (y < 0 || c[x][y-1] < (c[x-1][y]) || 0)) {
            x--
        }
    }

    const patches = {delete: [], insert: []}
    // patch delete
    x = 0, y = 0
    while(x < arr1.length) {
        if(arr1[x] !== lcs[y]) {
            patches.delete.push(x)
            x++
        } else {
            x++, y++
        }
    }

    // patch insert
    x = 0, y = 0
    let inserted = false, inserted_patch = null
    while(x < arr2.length) {
        inserted = false
        if(arr2[x] !== lcs[y]) {
            inserted = true
            if(inserted_patch) {
                inserted_patch.content.push(arr2[x])
            } else {
                inserted_patch = {
                    index: y,
                    content: [arr2[x]]
                }
                patches.insert.push(inserted_patch)
            }
            x++
        } else {
            x++, y++
        }
        if(!inserted) {
            inserted_patch = null
        }
    }

    return patches
}

function diff(str1, str2) {
    return diff_arr(str1.split(''), str2.split(''))
}

function patch_arr(arr, patches) {
    let index = 0
    patches.delete.forEach((deleteIndex) => {
        arr.splice(deleteIndex + index, 1)
        index--
    })

    index = 0
    patches.insert.forEach((patch) => {
        arr.splice(patch.index + index, 0, ...patch.content)
        index += patch.content.length
    })
}

function patch(str, patches) {
    const arr = str.split('')
    patch_arr(arr, patches)
    return arr.join('')
}


function test(str1, str2) {
    const patches = diff(str1, str2)
    const str = patch(str1, patches)
    console.assert(str === str2, str, str2)
}

(function main() {
    const arr_str1 = [
        'XMJYAUZ',
        '',
        'XMJYAUZ'
    ], arr_str2 = [
        'MZJAWXU',
        'MZJAWXU',
        ''
    ]

    arr_str1.forEach((str1, index) => {
        const str2 = arr_str2[index]
        test(str1, str2)
    })
})()