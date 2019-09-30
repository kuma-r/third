//Generators:In contrast, a generator is a function that can stop midway and then continue from where it stopped.
   //Code:
        function *Loop(){
            let i=0;
            while(true)
            {
                yield i;
                i++;
            }
        }
        let x=Loop();
        console.log(x.next());
        console.log(x.next());
        console.log(x.next());