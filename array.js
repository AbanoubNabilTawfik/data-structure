//array is a data structure that can hold a collection of values
//mix of data ==>hold
//0
//is iteratable ==>for loop

const arr = [1,2,3,'Abanoub'];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for(const item of arr)
{
    console.log(item)
}