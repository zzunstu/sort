function shellSort(arr){
    if(!arr || arr.length <=1) return;

    let len = arr.length;
    for(let gap = Math.floor(len/2); gap > 0; gap=Math.floor(gap/2)){
        for(let i=gap; i<len; i++){
            for(let j=i-gap; j>=0; j-=gap){
                if (arr[j] > arr[j+gap]) {
                    [arr[j], arr[j+gap]] = [arr[j+gap], arr[j]];
                }
            }
        }
    }
}

let arr = [3,5,7,1,2,6,9,8,4,15,10,18,11];
shellSort(arr);
console.log(arr);