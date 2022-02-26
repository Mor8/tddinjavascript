const add = require('./index')

test('pass 1 and 2 returns 3',()=>{
    expect(add(1, 2)).toBe(3);
});