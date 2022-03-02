/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/


//nums = [3,2,4] 
//target = 6
function twoSums(nums,target){

    indices = []

    for (i in nums){
        for (j in nums){
            if (i === j){
                continue
            }else if (nums[i]+nums[j]===target){
                if (indices.includes(i) || indices.includes(j)){
                    continue
                }else{
                    indices.push(i)
                    indices.push(j)
                }
            }
        }
    }

    return indices
}

let nums = [2,7,11,15] 
let target = 9
console.log(twoSums(nums,target))

target = 13
console.log(twoSums(nums,target))

target = 17
console.log(twoSums(nums,target))

target = 22
console.log(twoSums(nums,target))

target = 18
console.log(twoSums(nums,target))

target = 26
console.log(twoSums(nums,target))