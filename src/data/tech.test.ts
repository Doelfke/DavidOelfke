import { TECH } from './tech';

describe('TECH data', () => {
  it('TECH should be an array of strings', () => {
    expect(Array.isArray(TECH)).toBe(true);
    expect(TECH.length).toBeGreaterThan(0);
    TECH.forEach((item) => {
      expect(typeof item).toBe('string');
    });
  });
});
