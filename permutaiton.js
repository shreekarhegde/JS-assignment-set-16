
  let array = [];

function permutation(string){
  let splitted = string.split('');
  for(let i = 0; i < 2; i++){
      let x = splitted[i];
      splitted[i] = splitted[i+1];
      splitted[i+1] = x;
      let joined = splitted.join('');
      if(!array.includes(joined)){
        array.push(joined);
        permutation(joined);
      }
    }
  return array;
}

console.log(permutation('xyz'));