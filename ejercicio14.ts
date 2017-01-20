/**
Calculadora de expresiones. Una expresión debe implementar la interfaz:

interface Expression {
  eval(): number;
};


Crea crea las siguientes clases que implementen la interfaz Expression:
	NumberExpression: su constructor acepta un número
	AddExpression. Suma dos expresiones, que entran vía constructor
	SubstractExpression. Resta dos expresiones, que entran vía constructor
	MultiplyExpression. Multiplica dos expresiones, que entran vía constructor
	DivideExpression. Divide dos expresiones, que entran vía constructor
	PowExpression. Potencia de dos expresiones, que entran vía constructor
	
¿Qué devuelve la siguiente ejecución?

const one = new NumberExpression(1);
const two = new NumberExpression(2);
const three = new NumberExpression(3);
const four = new NumberExpression(4);
const five = new NumberExpression(5);

const addResult = (new AddExpression(one, two)).eval();
const substractResult = (new SubstractExpression(two, five)).eval();
const compositeResult = new MultiplyExpression(
  new AddExpression(three, two),
  new SubstractExpression(new AddExpression(four, four), new SubstractExpression(five, one))
).eval();

alert(addResult); 3
alert(substractResult ); -3
alert(compositeResult ); 20

Modifica el código para que todos los constructores acepten un número o una expresión.
**/

/***** SOLUCION 1 *****/
interface Expression {
  eval(): number;
};

class NumberExpression implements Expression {
  constructor(private number: number) { 
  }

  eval(): number {
    return this.number;
  }
}

class AddExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {
  }

  eval(): number {
    return new NumberExpression(this.left.eval() + this.right.eval()).eval();
  }
}

class SubstractExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {
  }

  eval(): number {
    return new NumberExpression(this.left.eval() - this.right.eval()).eval();
  }
}

class MultiplyExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {
  }

  eval(): number {
    return new NumberExpression(this.left.eval() * this.right.eval()).eval();
  }
}

class DivideExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {
  }

  eval(): number {
    return new NumberExpression(this.left.eval() / this.right.eval()).eval();
  }
}

class PowExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {
  }

  eval(): number {
    return new NumberExpression(Math.pow(this.left.eval(), this.right.eval())).eval();
  }
}

const one = new NumberExpression(1);
const two = new NumberExpression(2);
const three = new NumberExpression(3);
const four = new NumberExpression(4);
const five = new NumberExpression(5);

const addResult = (new AddExpression(one, two)).eval();
const substractResult = (new SubstractExpression(two, five)).eval();
const compositeResult = new MultiplyExpression(
  new AddExpression(three, two),
  new SubstractExpression(new AddExpression(four, four), new SubstractExpression(five, one))
).eval();

alert(addResult);
alert(substractResult );
alert(compositeResult );

/***** SOLUCION 2 *****/
type numberOrExpression = number | Expression;

interface Expression {
  eval(): number;
};

const toNumber: Function = (it: numberOrExpression):number => {
  if (typeof it === 'number') {
    return it;
  } else {
    return (<Expression>it).eval();
  }
}

const toExpression: Function = (it: numberOrExpression):Expression => {
  if (typeof it === 'number') {
    return new NumberExpression(it);
  } else {
    return it;
  }
}

class NumberExpression implements Expression {
  private number:number;
  constructor(_number: numberOrExpression) {
    this.number = toNumber(_number);
  }

  eval(): number {
    return this.number;
  }
}

class AddExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(_left: Expression, _right: Expression) {
    this.left = toExpression(_left);
    this.right = toExpression(_right);
  }

  eval(): number {
    return new NumberExpression(this.left.eval() + this.right.eval()).eval();
  }
}

class SubstractExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(_left: Expression, _right: Expression) {
    this.left = toExpression(_left);
    this.right = toExpression(_right);
  }

  eval(): number {
    return new NumberExpression(this.left.eval() - this.right.eval()).eval();
  }
}

class MultiplyExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(_left: Expression, _right: Expression) {
    this.left = toExpression(_left);
    this.right = toExpression(_right);
  }

  eval(): number {
    return new NumberExpression(this.left.eval() * this.right.eval()).eval();
  }
}

class DivideExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(_left: Expression, _right: Expression) {
    this.left = toExpression(_left);
    this.right = toExpression(_right);
  }

  eval(): number {
    return new NumberExpression(this.left.eval() / this.right.eval()).eval();
  }
}

class PowExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(_left: Expression, _right: Expression) {
    this.left = toExpression(_left);
    this.right = toExpression(_right);
  }

  eval(): number {
    return new NumberExpression(Math.pow(this.left.eval(), this.right.eval())).eval();
  }
}

const one = new NumberExpression(1);
const two = new NumberExpression(2);
const three = new NumberExpression(3);
const four = new NumberExpression(4);
const five = new NumberExpression(5);

const addResult = (new AddExpression(one, two)).eval();
const substractResult = (new SubstractExpression(two, five)).eval();
const compositeResult = new MultiplyExpression(
  new AddExpression(7, two),
  new SubstractExpression(new AddExpression(four, four), new SubstractExpression(5, one))
).eval();

alert(addResult);
alert(substractResult );
alert(compositeResult );
