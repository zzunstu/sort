function shellSort(arr){
    if (!arr || arr.length <=1) return;

    let len = arr.length;
    for(let gap=Math.floor(len/2); gap >= 1; gap=Math.floor(gap/2)){
        for(let i=gap;i< len;i++){
            for(let j=i-gap;j>=0;j-=gap){
                if (arr[j] > arr[j+gap]){
                    [arr[j], arr[j+gap]] = [arr[j+gap], arr[j]];
                }
            }
        }
    }
}

let arr = [6,3,1,5,12,53,32,7,8,2,52,63,9,10,19];
shellSort(arr);
console.log(arr);