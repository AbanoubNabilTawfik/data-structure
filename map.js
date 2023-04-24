//unordered collection of key value pairs
//both of key and value of any data type
//map is iteratble ==.for loop

const map = new Map([['a',1],['b',2]]);

map.set('c',3);
map.clear();
console.log(map.has('b'));

map.delete('a');
console.log('size of map is ',map.size);

for(const [key,value] of map)
{
    console.log(`${key} : ${value}`)
}