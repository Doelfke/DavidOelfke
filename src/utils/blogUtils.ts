const generateUrl = (id: string, title: string) => {
  return `/blog/${title.toLowerCase().replaceAll(" ", "-")}-${id}`;
};

export const blogUtils = {
  generateUrl,
};
