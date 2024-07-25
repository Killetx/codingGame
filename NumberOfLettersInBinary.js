/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const start = BigInt(inputs[0]);
const n = BigInt(inputs[1]);
arr=[]
prev=''
arr.push(BigInt(start))
for(i=0;i<n;i++) {
    binary = BigInt(arr[i]).toString(2)
    ba=(binary+'').split('')
    count=0
    ba.forEach(num => num==0?count+=4:count+=3)
    if(count==prev) i=n
    prev=count
    arr.push(count)
}

console.log(count);
