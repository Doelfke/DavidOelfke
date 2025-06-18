import { dateUtils } from './dateUtils';

describe('dateUtils.format', () => {
  it('should format a Date object to string', () => {
    const date = new Date(2023, 0, 15);
    expect(dateUtils.format(date)).toBe('Jan 15, 2023');
  });

  it('should handle invalid date strings', () => {
    expect(dateUtils.format('invalid-date')).toBe('Invalid Date');
  });
});
