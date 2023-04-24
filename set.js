//collection of values
//values must be unique
//mix of different data types
//set are iteratable

const set =new Set([1,2,3]);

set.add(4);
console.log(set.has(3));
set.delete(2);

console.log(set.size);

set.clear();

for(const item of set)
{
    console.log(item)
}
