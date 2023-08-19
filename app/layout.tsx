import '@/styles/globals.css';

// types
import type { Metadata } from 'next';

// library
import { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';

// components
import { NavBar } from '@/components/NavBar';
import { SideBar } from '@/components/SideBar';
import { Providers } from '@/components/Providers';
import { GoogleTagMgr } from '@/components/GoogleTagMgr';

// data
import { meta } from '@/data/constants';
import { env } from '@/data/env.mjs'

// font
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// The new Metadata API allows you to define metadata (e.g. meta and
// link tags inside your HTML head element) with an explicit metadata
// configuration in any layout or page that is a Server Component.
// https://beta.nextjs.org/docs/api-reference/metadata
//
// In addition to config-based metadata, the Metadata API now supports
// new file conventions, allowing you to conveniently customize your
// pages for improved SEO and sharing on the web:
//
// opengraph-image.(jpg|png|svg)
// twitter-image.(jpg|png|svg)
// favicon.ico
// icon.(ico|jpg|png|svg)
// sitemap.(xml|js|jsx|ts|tsx)
// robots.(txt|js|jsx|ts|tsx)
// manifest.(json|js|jsx|ts|tsx)

export const metadata: Metadata = {
  // metadataBase is a convenience option to set a base URL prefix for metadata fields
  // that require a fully qualified URL. https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
  metadataBase: new URL(meta.URL),
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#title
  title: {
    default: meta.siteName,
    template: `%s | ${meta.siteName}`,
  },
  description: meta.description,
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#basic-fields
  themeColor: meta.themeColor,
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.URL,
    siteName: meta.siteName,
    images: [
      {
        url: meta.og.ogImage,
        width: meta.og.width,
        height: meta.og.height,
      },
    ],
    locale: meta.og.locale,
    type: meta.og.type,
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true, // Prevents search engines from showing snippets of the page in search results.
    noimageindex: true,
    nocache: true, //Prevents search engines from caching the page.
  },
};

// Get Atlassian StatusPage data from public API
async function getStatus() {
  // const res = await fetch(`https://${env.STATUS_PAGE_ID}.statuspage.io/api/v2/summary.json`, {
  //   next: { revalidate: 30 },
  // });
  // return res.json();
  return;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  //https://beta.nextjs.org/docs/data-fetching/fetching
  const statusData = await getStatus();

  return (
    <html lang='en'>
      <body
        className={`${inter.variable} bg-[url('/lbg.svg')] border-0 min-h-full h-full font-sans antialiased transition-colors`}
      >
        <div className="border-0 border-emerald-500 mx-2.5 bg-light-background dark:bg-dark-background rounded-2xl flex flex-col gap-0 px-0 max-w-screen-xl xl:mx-auto">
          <Suspense>
            <GoogleTagMgr />
            <Analytics />
          </Suspense>
          <Providers>
            {/* <NavBar /> */}
            <div className="border-0 ml-auto border-red-200 bg-light-background dark:bg-dark-background overflow-hidden flex flex-nowrap justify-end col-span-12 rounded-2xl md:col-span-10 lg:col-span-9">
              <NavBar />
            </div >
            <div className="border-0 border-red-700 col-span-12 md:col-span-10 lg:col-span-9">
              <main className='border-0 border-purple-800 container max-w-screen-xl xl:m-auto' >
                <div className="grid grid-cols-12 md:col-span-10 gap-0">
                  {/* Sidebar */}
                  {/* <div className="border-2 border-purple-200 md:col-span-1 xl:hidden col-span-12 text-base text-center rounded-2xl"> */}
                    {/* //!sidebar */}
                  {/* </div> */}
                  <div className="border-0 border-purple-800 md:col-span-3 col-span-12 text-base text-center rounded-2xl">
                    {/* //!sidebar */}
                    <SideBar />
                  </div>

                  {/* Children */}
                  <div className="border-0 border-purple-500 border-green-300 bg-light-background dark:bg-dark-background md:col-span-9 col-span-12 justify-center text-base text-center rounded-2xl">
                    {children}
                  </div>
                  {/* <div className="border-2 border-purple-200  md:col-span-1 xl:hidden col-span-12 text-base text-center rounded-2xl"> */}
                    {/* //!sidebar */}
                    {/* <SideBar /> */}
                  {/* </div> */}
                </div>

              </main>
              {/* <Footer statusData={statusData} /> */}
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}

/*
Use grid instead of flex for sticky footer - puts all config onto body or single div:
  `min-h-screen grid grid-rows-[auto_1fr_auto]`

Note that it's better to use min-h-full instead of min-h-screen because it works on mobile 
safari. The problem is that the vh unit doesn't work properly on mobile devices; 100vh will 
take up more than 100% of the screen real estate, because mobile browsers do that thing where 
the browser UI comes and goes. You also need to reset html and body height manually:

```css 
@layer base {
  html,
  body,
  #__next {
    height: 100%;
  }
}
```

*/
