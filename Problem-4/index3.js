function mutation(arr) {
let regex = new RegExp("[" + arr[1].toString() + "]", "ig");
let newArr = arr[0].toString().toLowerCase().match(regex);
let newArr2 = [...arr[1]].map(letter => letter.toLowerCase());
return newArr.filter((v,i) => newArr.indexOf(v) === i).length == newArr2.filter((v,i) => newArr2.indexOf(v) === i).length;
}

mutation(["hello", "hey"]);