const fish = {
    name: 'king hilsa',
    address: 'chadpur',
    color: 'silver',
    phone: '01838445',
    price: 4000
}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone} = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);


const {age, name} = {name: 'Aslam', age:66, profession: 'makeup artist'}
console.log(age);

const {address} =fish;
console.log(address);


// destructure by array

const [first, another] = [44, 99]
console.log(first, another);