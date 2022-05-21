function insertSort(arr){
    if(!arr || arr.length <= 1) return;

    for(let i=1; i<arr.length; i++){
        for(let j=i-1; j>=0; j--){
            if (arr[j+1] < arr[j]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }
            else {
                break;
            }
        }
    }
}
// 6 3
// 3 1 6
let arr = [6,3,1,2,9,4,7,8];
insertSort(arr);
console.log(arr);  