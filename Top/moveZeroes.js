/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/

function moveZeroes(nums){

    for (i in nums){
        if (nums[i] === 0){
            nums.splice(i,1)
            nums.push(0)
        }
    }
    return nums
}


nums = [0,1,0,3,12]
console.log(moveZeroes(nums))
console.log(moveZeroes([2,0,6,15,0]))