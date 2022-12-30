// Daily Challenge: Stars

// 1 Write a JavaScript program that recreates the pattern below.
// 2 Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).

// with one loop
for(let indexStar = 1; indexStar <= 6; indexStar++){
    console.log(`* `.repeat(indexStar));
}


// with two nested loops
for(let indexStar = 1; indexStar <= 6; indexStar++) {
    let str = ''
    for(let indexStarS = 0; indexStarS < i; indexStarS++){
        str += `* `
    }
    console.log(str)
}