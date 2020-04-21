let x_1={
    user:{
        name:'',
        age: 0
    }
};

console.log(x_1.user.name ?? 'Abhijit');
console.log(x_1.user.age ?? 26);


let x_2={
    user:{
        name:'Abhijit',
        age: 26
    }
};

console.log(x_2.user.name ?? '');
console.log(x_2.user.age ?? 0);
