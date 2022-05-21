function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, from, to) {
    // 递归出口
    if(from > to) {
        return;
    }

    // 设置基准元素
    let flag = arr[from];
    // 设置两个哨兵
    let left = from;
    let right = to;

    while(left < right) {
        // 1.必须先移动右侧哨兵
        while(left < right && arr[right] > flag){
            right--;
        }

        // 2. 移动左侧哨兵
        while(left < right && arr[left] <= flag){
            left++;
        }

        if(left < right) {
            swap(arr, left, right);
        }
    }

    arr[from] = arr[left];
    arr[left] = flag;

    // 递归
    quickSort(arr, from, left-1);
    quickSort(arr, left+1, to);
}

let arr = [6,3,1,2,9,4,7,8,5];
// let arr = [4,7,6,5,3,2,8,1];
// let arr = [5,1,1,2,0,0];
// let arr = [5,2,3,1];
quickSort(arr,0,arr.length-1);
console.log(arr);