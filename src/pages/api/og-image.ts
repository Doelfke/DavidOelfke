import type { NextApiRequest, NextApiResponse } from 'next';
import nodeHtmlToImage from 'node-html-to-image';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const image = await nodeHtmlToImage({
    html: `<html>
              <head>
                <style>
                  .title {
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-size: 75px;
                    padding: 0 10px;
                    color: rgb(55, 65, 81);
                  }
                  .footer {
                    position: absolute;
                    right: 16px;
                    bottom: 16px;
                  }
                </style>
              </head>
              <body>
                <div class="title">${req.query.text}</div>
                <div class="footer">DavidOelfke.dev</div>
              </body>
           </html>`,
    quality: 100
  });

  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.end(image, 'binary');
}
