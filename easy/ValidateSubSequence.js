//Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
//A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.


function validateSubSeq(array, sequence) {
  // Create a pointer that starts at the first index of our sequence array
  let seqIdx = 0;
  // Loop through the array
  for (const val of array) {
    // If the index equals the length of our sequence then we break out of the loop and return 
    //true because we are adding 1 to the seqIdx every time seqIdx is equal to the val in the array
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === val) seqIdx++;
  }
  //when loop ends we return true if seqIdx and sequence.length are equal
  return seqIdx === sequence.length;
}


// let array = [5, 1, 22, 25, 6, -1, 8, 10]
// let sequence = [1, 6, -1, 10]