//key-value pairs
//not iteratble ==>for loop

const obj = {
    firstName:"Abanoub",
    age:31,
    sayName:function(){
        console.log("Your name is ",this.firstName);
    }
}

for(const item of Object.keys(obj))
{
    console.log(item)
}

obj.hobby="football";
delete obj.hobby;

console.log(obj)
console.log(obj.firstName)
console.log(obj["age"])
obj.sayName();