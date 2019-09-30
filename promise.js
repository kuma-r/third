//A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved
    //Code:
    const students=[
        {Name:"Kumar",Age:21},
        {Name:"Rahul",Age:22}
    ]
    function newStudent(details){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            students.push(details);
            const x=false;
            if(!x){
                resolve();
            }
            else{
                reject(`sorry,its rejected`)
            }
        },5000)
    })
    }
    function getDetails(){
        students.map((value)=>{
            console.log(value.Name);
        })
    }
    newStudent({Name:"Vikram",Age:22}).then(getDetails).catch((msg)=>console.log(msg))