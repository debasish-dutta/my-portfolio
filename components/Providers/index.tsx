'use client';

import { ThemeProvider } from 'next-themes';
import { LazyMotion, domAnimation } from 'framer-motion';
import {NextUIProvider} from '@nextui-org/react'

// see: https://beta.nextjs.org/docs/rendering/server-and-client-components
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
    <ThemeProvider attribute='class'>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </ThemeProvider>
    </NextUIProvider>
  );
};
