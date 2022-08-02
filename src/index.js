// const characters = [1, 2, 3]

// const newCh = characters.map((el) => (el * 2))

// console.log(newCh)

const characters = [
    { name: 'Picard', age: 59 },
    { name: 'Riker', age: 29 },
    { name: 'Deanna', age: 29 },
    { name: 'Maksym', age: 59 },
    { name: 'Daria', age: 18 },
    { name: 'Lyubomyr', age: 21 }
  ];

const addnew = characters.reduce((acc, el) => {
    // acc[el.age] = 0
    if (!(el.age in acc)) {
        acc[el.age] = 0;
    }
    acc[el.age] = acc[el.age] + 1; 

},{})
console.log(addnew)


