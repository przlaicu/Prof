const getName = require('./script');

test('Gets the name of the user', () => {
    expect(getName('Nino')).toBe('Hello Nino');
})