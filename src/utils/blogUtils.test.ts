import { blogUtils } from './blogUtils';

describe('blogUtils.generateUrl', () => {
  it('should generate a URL with kebab-case title and id', () => {
    const url = blogUtils.generateUrl('123', 'My Blog Post');

    expect(url).toBe('/blog/my-blog-post-123');
  });

  it('should handle titles with multiple spaces', () => {
    const url = blogUtils.generateUrl('456', 'Another   Test Post');

    expect(url).toBe('/blog/another---test-post-456');
  });

  it('should handle empty title', () => {
    const url = blogUtils.generateUrl('789', '');

    expect(url).toBe('/blog/-789');
  });
});
