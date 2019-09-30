//Async Await : The await operator is used to wait for a Promise. It can be used inside an Async block only. The keyword Await makes JavaScript wait until the promise returns a result.
    //Code:
        async function firstAsync() {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve("Now it's done!"), 1000)
            });
        
            // wait until the promise returns us a value
            let result = await promise; 
            return result;
            }
        
        firstAsync().then((value)=>console.log(value));


        let bikeReady = true;
        const Trip = new Promise((resolve, reject) => {
            if (bikeReady) {
                return resolve('Going to a trip');
            } else {
                var reason = new Error('Bike is not Ready');
                return reject(reason);
            }
        });
        const tour = async() => {
            const result = await Trip;
            return result;
        }
        tour()
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.error(err);
            })


