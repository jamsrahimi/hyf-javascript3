/* ES5 */
let isMomHappy = true;

// Promise
let willIGetNewPhone = new Promise( (resolve, reject)=> {
        if (isMomHappy) {
            let phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

let askMom = () => {
    willIGetNewPhone
        .then(fulfilled => { console.log(fulfilled); })
        .catch(error => { console.log(error.message); });
};

askMom();

let smartPhones = [
    { name: 'iphone', price: 649 },
    { name: 'Galaxy S6', price: 576 },
    { name: 'Galaxy Note 5', price: 489 }
];

console.log(smartPhones.map(
    smartPhone => smartPhone.price, smartPhones.name));
      
//aAsync().then( ()=> bAsync()).then(()=>cAsync()).done(()=> finish());
