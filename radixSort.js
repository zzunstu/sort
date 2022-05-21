// function radixSort(arr){
//     if(!arr || arr.length <=1) return arr;

//     // 最大值
//     let max = arr[0];
//     for(let i=0;i<arr.length;i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     let buckets = new Array(10).fill(0).map((item) => []);
//     let divideNum = 1;
//     // 位数
//     while(max > 0) {
//         for(let i=0;i<arr.length;i++){
//             let temp = Math.floor(arr[i]/divideNum) % 10;
//             buckets[temp].push(arr[i]);
//         }

//         // 循环次数
//         max = Math.floor(max/10);
//         divideNum = divideNum * 10;

//         let index = 0;
//         for(let i=0; i<buckets.length; i++) {
//             for(let j=0; j < buckets[i].length; j++) {
//                 arr[index++] = buckets[i][j];
//             }

//             buckets[i] = [];
//         }
//     }

//     console.log(arr);
// }

// let arr = [12,6,3,34,150,60];
// radixSort(arr);