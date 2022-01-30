function twoNumberSum(array, targetSum) {
	// Write your code here.
  let nums = {};
  //Hash table to store nums

  for (const num of array) {
    //loop through each number in the array
    const potentialMatch = targetSum - num;
    //find the two numbers by taking our target sum (10 and subtracting the current number we are looping through)

    if (potentialMatch in nums) {
      //if the potential number exists in our hash then we return the potential match and num
      return [potentialMatch, num]
      //otherwise we add the num to our hash and continue looping on to next number
    } else {
      nums[num]++
    }
  }
  //if we loop through every number in the array and don't find a match
  return [];
}


