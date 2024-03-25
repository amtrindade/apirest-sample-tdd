test('Test assertions with Jest', () => {
    let number = null;
    expect(number).toBeNull();

    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9)
    expect(number).toBeLessThan(11);
});

test('Test work with objects', () => {
    const obj = {name: 'John', email: 'john@mail.me'};
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'John');
    expect(obj.name).toBe('John');

    const obj2 = {name: 'John', email: 'john@mail.me'};
    expect(obj).toEqual(obj2);
});