import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge'
};

export default async function handler(req: NextRequest) {
  const text = req.nextUrl.searchParams.get('text');

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          color: 'rgb(55, 65, 81)',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {text}
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
