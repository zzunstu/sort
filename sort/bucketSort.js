function insertSort(arr){
   if(arr.length <= 1) return;

   for(let i=0; i<arr.length; i++){
      for(let j=i+1; j >=1; j--){
         if(arr[j] < arr[j-1]) {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
         }
      }
   }
}

function bucketSort(arr, bucketSize){
   if (!arr || arr.length <=1) return;

   let len = arr.length;

   let min = arr[0], max = arr[0];
   for(let i=1;i<len;i++){
       if (arr[i] > max) {
          max = arr[i];
       }
       if (arr[i] < min) {
          min = arr[i];
       }
   }

    // 计算桶的个数
    let bucketCount = Math.floor((max-min)/bucketSize) + 1;
    let buckets = new Array(bucketCount).fill(0).map(() => []);

   for(let i=0;i<len;i++){
       let index = Math.floor(arr[i]/bucketSize);
       buckets[index].push(arr[i]);
   }

   for(let i=0;i<bucketCount;i++){
      insertSort(buckets[i]);
   }

   let index = 0;
   for(let i=0;i<bucketCount;i++){
    for(let j=0;j<buckets[i].length;j++){
        arr[index++] = buckets[i][j];
    }
   }

   console.log(arr);
}


let arr = [6,3,1,5,12,53,32,7,8,2,52,63,9,10,19];
bucketSort(arr, 5);
// console.log(arr);