class Heap {
    constructor(data, compartor){
        this.data = data ? data : [];
        this.compartor = compartor ? compartor : (a, b) => a-b;

        this.heapify();
    }

    heapify(){
        if (this.size() <= 1) return;

        // 从第一个非叶子节点开始调整
        for (let i = Math.floor((this.size()-2)/2); i>=0; i--) {
            this.shiftDown(i);
        }
    }

    size(){
        return this.data.length;
    }

    peek(){
        if (this.size() === 0) return null;

        return this.data[0];
    }

    push(x){
        this.data.push(x);

        this.shiftUp(this.size()-1);
    }

    pop(){
        if (this.size() === 0) return null;

        let res = this.data[0];

        // 将末尾元素填充到首部
        this.data[0] = this.data[this.size()-1];
        this.data.pop();  // 也可以this.data.length = this.size()-1;

        this.shiftDown(0);

        return res;
    }

    shiftDown(i){
        let leftIndex = 2*i + 1;
        let rightIndex = 2*i + 2;
        let len = this.size();

        while(i < len){
            let findIndex = i;
            if (leftIndex < len && this.compartor(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex;
            }
            if (rightIndex < len && this.compartor(this.data[rightIndex], this.data[findIndex]) < 0) {
                findIndex = rightIndex;
            }

            if (findIndex !== i) {
                // 交换
                [this.data[i], this.data[findIndex]] = [this.data[findIndex], this.data[i]];
                i = findIndex;

                leftIndex = 2*i + 1;
                rightIndex = 2*i + 2;
            }
            else {
                break;
            }
        }
    }

    shiftUp(i){
        let parentIndex = Math.floor((i-1)/2);

        while(parentIndex >= 0){
            if (this.compartor(this.data[i], this.data[parentIndex] ) < 0) {
                [this.data[parentIndex], this.data[i]] = [this.data[i], this.data[parentIndex]];

                i = parentIndex;
                parentIndex = Math.floor((i-1)/2);
            }
            else {
                break;
            }
        }
    }
}

let arr = [2,6,7,1,5,10,3,8];
function compartor(a, b){
    return a - b;
};
const heap = new Heap(arr, compartor);
heap.push(4);
heap.push(9);

while(heap.size() > 0){
    console.log(heap.pop());
}

console.log('End');