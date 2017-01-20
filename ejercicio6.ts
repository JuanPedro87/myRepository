// Qué devuelven estos bloques?

// ----
if (true) {
  let x = 0;
}

alert(x);

// ----
let x = 0;
if (true) {
  x += 1;
}
alert(x);

// ----
for (let x = 0; x < 5; x++) {
    console.log(x);
}
alert(x);

// ----
let x = 0;
while (x < 5) {
  x++;
}
alert(x);

// ----
let x = 0;
if (true) {
  let y = x;
}
alert(y); 

// ----
function foo() {
  let x = 0;
  if (true) {
    var y = x + 1;
  }
  return y;
}

alert(foo())

// ----
function func() {
  let foo = 0;
  if (true) {
     let foo = 10;
  }
  alert(foo);
}

func();

// ----
const x = {};
x.name = 'Paco';
alert(JSON.stringify(x));

// ----
const x = [];
x.push('Paco');
alert(JSON.stringify(x));
