interface IPerson {
  firstName: string,
  lastName: string,
  phone: string,
  address?: string,
  age?: number
}

const thePerson = <IPerson>{
  firstName: 'Alejandro',
  lastName: 'Such',
  phone: '987654321',
  address: 'Calle de la amargura 24',
  age: 77
};

const printSomePersonData: Function = ({firstName, lastName, age}: IPerson) => `${firstName} ${lastName}'s age is ${age}`;

alert(printSomePersonData(thePerson));
