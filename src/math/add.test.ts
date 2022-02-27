import add from '@src/math/add';

describe('Simple Addition', () => {
  it('should pass', () => {
    expect(add(1, 2)).toBe(3);
  });
});
