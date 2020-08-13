// "use strict";

// console.log(this);

// function testThis() {
//     console.log(this);
// }

// testThis();

const user = {
    firstName: 'Gordon',
    lastName: 'Tam',
    fullName: () => {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    },
    pets: ['cat', 'dog', 'fish'],
    listPets() {
        this.pets.forEach(function(pet) {
                console.log(`${this.firstName}'s ${pet} `);
            })
            // this.pets.forEach((pet) => {
            //     console.log(`${this.firstName}'s ${pet}`);
            // })
    }
}

user.listPets();