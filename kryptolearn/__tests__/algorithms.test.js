
import { Euclid, extendedEuclid, precrt, crt } from "../algorithms";

test('calculates gcd(5567, 57684) equals 19 with correct steps', () => {
    expect(Euclid(5567, 57684)).toEqual([19,["Schritt 1: 5567 = 0 * 57684 + 5567", "Schritt 2: 57684 = 10 * 5567 + 2014", "Schritt 3: 5567 = 2 * 2014 + 1539", "Schritt 4: 2014 = 1 * 1539 + 475", "Schritt 5: 1539 = 3 * 475 + 114", "Schritt 6: 475 = 4 * 114 + 19", "Schritt 7: 114 = 6 * 19 + 0"]]);
});

test('calculate x = 371 and y = -25 for 456 and 6767', () => {
    expect(extendedEuclid(456, 6767).x).toBe(371);
    expect(extendedEuclid(456, 6767).y).toBe(-25);
});

test('calcualte product of mods 2,3,5,7 to be 210, 105, 70, 42, 30', () => {
    expect(precrt([2,3,5,7]).bigM).toEqual([210, 105, 70, 42, 30]);
});

test('calculate crt of mods 2,3,5,7 and remainders 1,1,1,0 sum equal to 91', () => {
    expect(crt([2,3,5,7], [1,1,1,0]).x).toBe(91);
});
