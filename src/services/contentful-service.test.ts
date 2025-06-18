import { contentfulService } from './contentful-service';

jest.mock('@next/env', () => ({
  loadEnvConfig: jest.fn()
}));

const mockGetEntries = jest.fn();
const mockGetEntry = jest.fn();

jest.mock('contentful', () => ({
  createClient: jest.fn(() => ({
    getEntries: mockGetEntries,
    getEntry: mockGetEntry
  }))
}));

describe('contentfulService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.CONTENTFUL_SPACE = 'test_space';
    process.env.CONTENTFUL_ACCESS_TOKEN = 'test_token';
  });

  describe('getPosts', () => {
    it('should call getEntries with correct params and return posts', async () => {
      const mockPosts = {
        items: [{ sys: { id: '1', createdAt: new Date() }, fields: { title: 'Test', subtitle: 'Sub', body: {} } }],
        total: 1,
        limit: 10,
        skip: 0
      };
      mockGetEntries.mockResolvedValueOnce(mockPosts);

      const posts = await contentfulService.getPosts();

      expect(mockGetEntries).toHaveBeenCalledWith({
        content_type: 'blogPost',
        select: ['fields.title', 'fields.subtitle', 'sys.id', 'sys.createdAt']
      });
      expect(posts).toEqual(mockPosts);
    });
  });

  describe('getPost', () => {
    it('should call getEntry with correct id and return post', async () => {
      const mockPost = {
        sys: { id: '1', createdAt: new Date() },
        fields: { title: 'Test', subtitle: 'Sub', body: {} }
      };
      mockGetEntry.mockResolvedValueOnce(mockPost);

      const post = await contentfulService.getPost('1');

      expect(mockGetEntry).toHaveBeenCalledWith('1');
      expect(post).toEqual(mockPost);
    });
  });
});
