export function Euclid(a, b) {
  let stepsArray = [];
  let i = 1;
  while (b != 0) {
    const r = a % b;
    stepsArray.push(`Schritt ${i}: ${a} = ${Math.floor(a / b)} * ${b} + ${r}`);
    a = b;
    b = r;
    i += 1;
  }
  return [a, stepsArray];
}

export function extendedEuclid(a, b) {
  // variables for output
  let stepsArray = [];
  let i = 1;

  // algorithm variables
  let xs = [1, 0];
  let ys = [0, 1];
  let sign = 1; // relevant for minus 1

  while (b != 0) {
    const q = Math.floor(a / b);
    const r = a - q * b;
    a = b;
    b = r;
    const xx = xs[1];
    const yy = ys[1];
    xs[1] = q * xs[1] + xs[0];
    ys[1] = q * ys[1] + ys[0];
    xs[0] = xx;
    ys[0] = yy;
    sign = -sign;

    stepsArray.push(`Schritt ${i}: ${r} = ${a} - ${q} * ${b}`);
    i += 1;
  }
  x = sign * xs[0];
  y = -sign * ys[0];
  return { a, x, y, stepsArray };
}

export function precrt(m) {
  console.log(m);
  let bigM = [];
  bigM[0] = 1;
  let y = [];

  for (let i = 0; i < m.length; i++) {
    bigM[0] = bigM[0] * m[i];
    console.log(`BigM ${bigM}`);
  }
  let j = 1;
  for (let i = 0; i < m.length; i++) {
    bigM[j] = bigM[0] / m[i];
    console.log(bigM[j], m[i]);
    ee = extendedEuclid(bigM[j], m[i]);
    console.log(ee);
    y[i] = ee.x; // confusing var change tbs
    console.log(y);
    j++;
  }
  return { y, bigM };
}

export function crt(m, a) {
  const pc = precrt(m);
  console.log(pc);
  let stepsArray = [];
  let x = 1;
  let r = 0;
  let j = 1;
  for (let i = 0; i < m.length; i++) {
    stepsArray.push(
      `Schritt ${j}: ${x} = (${r} + ${a[i]} * ${pc.y[i]} * ${pc.bigM[j]}) mod ${pc.bigM[0]}`
    );
    x = (r + a[i] * pc.y[i] * pc.bigM[j]) % pc.bigM[0];
    r = x;
    console.log(x);
    j++;
  }
  return { x, stepsArray };
}
