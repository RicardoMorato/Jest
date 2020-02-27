const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 10 + 0 to equal 10', () => {
  expect(sum(10, 0)).toBe(10);
});

test('adds 10 + (-10) to equal 0', () => {
  expect(sum(10, -10)).toBe(0);
});
