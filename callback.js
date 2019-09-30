    //callBack:A callback is a function that is to be executed after another function has finished executing.
    //Code:
    const students=[
        {Name:"Kumar",Age:21},
        {Name:"Rahul",Age:22}
    ]
    function newStudent(details,callBack){
        setTimeout(()=>{
            students.push(details)
            callBack();
        },5000);
    }
    function getDetails(){
        students.map((value)=>{
            console.log(value.Name);
        })
    }
    newStudent({Name:"Vikram",Age:22},getDetails)