// Santa Claus needs to review his gift boxes to make sure he can pack them all in his sleigh. He has a series of boxes of different sizes, characterized by their length, width, and height.

// Your task is to write a function that, given a list of boxes with their sizes, determines whether it is possible to pack all the boxes in one so that each box contains another (which in turn contains another, and so on).

// Each box represents its measures with an object. For example: {l: 2, w: 3, h: 2}. This means that the box has a length of 2, a width of 3 and a height of 2.

// A box fits into another box if all the sides of the first are smaller than the sides of the second. The elves have told us that the boxes cannot be rotated, so you cannot put a box of 2x3x2 in a box of 3x2x2. Let's see some examples:

// In the previous example, the smallest box fits into the largest box. Therefore, it is possible to pack all the boxes in one. Now let's see a case that does not:

// fitsInOneBox(boxes) // false
// In the previous example, the smallest box fits into the middle box, but the middle box does not fit into the largest box. Therefore, it is not possible to pack all the boxes in one.

// Note that the boxes may not come in order:

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 3, w: 3, h: 3 },
//   { l: 2, w: 2, h: 2 }
// ]

// fitsInOneBox(boxes) // true
// In the previous example, the first box fits into the third, and the third into the second. Therefore, it is possible to pack all the boxes in one.

// Things to keep in mind:

// The boxes cannot be rotated because the elves have told us that the machine is not ready.
// The boxes may come in any order.
// The boxes are not always squares, they could be rectangles.

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 1, h: 3 },
    { l: 2, w: 2, h: 2 },
]
const boxes2 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
] // true

// sort
function fitsInOneBox(boxes) {
    let theReturn

    let boxesSort = boxes.sort((a, b) => { 
       return a.l - b.l && a.h - b.h && a.w - b.w
    });
  console.log(boxesSort);
    for (let i = 0; i < boxesSort.length - 1; i++) {
        const element = boxesSort[i]
        const element2 = boxesSort[i + 1]

        if ((element.l < element2.l) && (element.w < element2.w) && (element.h < element2.h)) {
            console.log(element.h, element2.h);
            theReturn = true
            
        } else {
            theReturn = false
            break;
        }
    }

    console.log(theReturn);
    return theReturn

}
    
// fitsInOneBox(boxes2) // true
// console.log(fitsInOneBox(boxes)) // false
fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
]
) // false



// function fitsInOneBox(boxes) {
//     let theReturn

//     let boxesSort = boxes.sort((a, b) => { 
//         a.l - b.l
//     });
//     console.log(boxes);
//     console.log(boxesSort);
  
//     for (let i = 0; i < boxesSort.length - 1; i++) {
//         const element = boxesSort[i]
//         const element2 = boxesSort[i + 1]

//         if ((element.l < element2.l) && (element.w < element2.w) && (element.h < element2.h)) {
//             console.log("true");
//             console.log(element);
//             console.log(element2);

//             theReturn = true
//         } else {
//             console.log("false");
//             theReturn = false
//         }
//     }


//     console.log(theReturn);
//     return theReturn


// }