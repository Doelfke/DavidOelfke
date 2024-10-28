import { Document } from '@contentful/rich-text-types';

export default interface BlogPost {
  fields: {
    title: string;
    subtitle: string;
    body: Document;
  };
  sys: {
    id: string;
    createdAt: Date;
  };
}
