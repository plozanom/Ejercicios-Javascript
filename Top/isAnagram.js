/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

function isAnagram(s,t){
    
    let sArray = []
    let tArray = []
    let counter = 0

    for (i of t){
        tArray.push(i)
    }
    
    for (i of s){
        sArray.push(i)
    }
        
    let sortedS = sArray.sort()
    let sortedT = tArray.sort()

    for (i in sortedS){
        if (sortedS[i] === sortedT[i]){
            counter ++
        }
    }
    
    if (counter === tArray.length){
        return true
    }else{
        return false
    }

}

s = "anagram" 
t = "nagaram"

console.log(isAnagram(s,t))
console.log(isAnagram("rat","car"))
console.log(isAnagram("arnold","ronald"))
console.log(isAnagram("sas","saa"))
