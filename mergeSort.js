function mergeSort(arr,left,right){
    if (left >= right) {
        return;
    }

    let mid = Math.floor((left+right)/2);
    mergeSort(arr,left,mid);
    mergeSort(arr,mid+1,right);
    
    merge(arr, left, mid, right);
}
function merge(arr, left, mid, right){
    let res = [];

    let i = left;
    let j = mid + 1;
    while(i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            res.push(arr[i]);
            i++;
        }
        else {
            res.push(arr[j]);
            j++;
        }
    }

    while(i <= mid){
        res.push(arr[i]);
        i++;
    }

    while(j <= right){
        res.push(arr[j]);
        j++;
    }

    for(let k=0;k<res.length;k++) {
        arr[k + left] = res[k];
    }
}

let arr = [2,5,7,9,10, 1,3,6];
mergeSort(arr, 0, 7);
console.log(arr);