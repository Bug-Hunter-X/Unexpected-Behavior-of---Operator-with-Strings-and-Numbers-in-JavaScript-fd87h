function foo(a, b) {  if (typeof a === 'number' && typeof b === 'number') {    return a + b;  } else {    return "Error: Operands must be numbers";  } }console.log(foo(1, 2)); // 3console.log(foo(1, "2")); // Error: Operands must be numbersconsole.log(foo("1", 2)); // Error: Operands must be numbersconsole.log(foo("1", "2")); // Error: Operands must be numbers