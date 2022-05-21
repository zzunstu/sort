function selectionSort(arr){
    if (!arr || arr.length <= 1) return;

    for(let i=0; i< arr.length; i++){
        let minIndex = i;
        for(let j=i+1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}


let arr = [6,3,1,2,9,4,7,8,5,10];
selectionSort(arr);
console.log(arr);