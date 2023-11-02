nums = [0, 1, 2, 3, 4, 5,6, 7, 8, 8,9,20]
function linearSearch(num, arr) {
  let found;
// For loop is iteration
  for(let i = 0; i < arr.length; i++){
    // evaluations if statements are selection
    if(arr[i] === num){
      found = arr[i];
      break
    }
    else{
      console.log("still looking")
    }
  }
  if (found == null) {
    console.log("not found")
  } else{
  console.log(found);
}
}

linearSearch(0, nums);