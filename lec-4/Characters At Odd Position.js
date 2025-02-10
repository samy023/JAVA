let course="withe";
let result =[];
let n=course.length;

for(let i=0; i<n; i++){

    if(i%2!=0)
    {
       result.push(course[i]);
        
    }
}
result.reverse().forEach(console.log(result));
