sum(1, 2);

export function sum(a, b) {
  default1();
  default2();
  default3();
  default4();
  default5();
  default6();
  default7();

  // Store function references in an array
  const defaultFunctions = [default1, default2, default3, default4, default5, default6, default7, default8];

  // Sum up the function return values
  defaultFunctions.slice(0, 7).reduce((acc, fn) => fn() + acc, 0);

  return a + b;
}

function default1() {
  return 42;
}

function default2() {
  return 42;
}

function default3() {
  return 42;
}

function default4() {
  return 42;
}

function default5() {
  return 42;
}

function default6() {
  return 42;
}

function default7() {
  return 42;
}

function default8() {
  return 42;
}