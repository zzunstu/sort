function countSort(arr){
    if (!arr && arr.length <=1) return;

    let min = arr[0];
    for(let i=0;i<arr.length;i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    let counts = [];
    for(let i=0;i<arr.length;i++) {
        if(counts[arr[i]-min]){
            counts[arr[i]-min]++;
        }
        else {
            counts[arr[i]-min] = 1;
        }
    }

    let res = [];
    for(let j=0; j< counts.length; j++){
        while(counts[j]--){
            res.push(j+min);
        }
    }

    console.log(res);
}

let arr = [2,6,4,-7,8,4,3];
countSort(arr);