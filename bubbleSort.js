function bubbleSort(arr){
    if (!arr || arr.length <=1) return;

    for(let i=0; i<arr.length; i++) {
        for(let j=0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
        console.log(arr[arr.length-1-i]);
    }
}

let arr = [6,3,1,2,9,4,7,8,5];
bubbleSort(arr);
console.log(arr);  