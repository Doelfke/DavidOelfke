import { WORK_HISTORY } from './workHistory';

describe('WORK_HISTORY data', () => {
  it('should be an array', () => {
    expect(Array.isArray(WORK_HISTORY)).toBe(true);
  });

  it('should not be empty', () => {
    expect(WORK_HISTORY.length).toBeGreaterThan(0);
  });

  it('should have objects with required properties', () => {
    WORK_HISTORY.forEach((job) => {
      expect(typeof job.companyName).toBe('string');
      expect(typeof job.position).toBe('string');
      expect(typeof job.startDate).toBe('string');
      expect(typeof job.endDate).toBe('string');
      expect(Array.isArray(job.accomplishments)).toBe(true);
      expect(Array.isArray(job.domains)).toBe(true);
      expect(Array.isArray(job.images)).toBe(true);
    });
  });
});
