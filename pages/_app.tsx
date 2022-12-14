import type { AppProps } from 'next/app';

import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

import Main from '../components/Layouts/Main';

import '../styles/globals.css';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

interface PageProps {
  [key: string]: any;
}

interface MyAppProps extends AppProps<PageProps> {
  pageProps: PageProps;
}

export default function App({ Component, pageProps, router }: MyAppProps) {
  return (
    <ThemeProvider attribute="class">
      <Main seoTitle="CIO Services" router={router}>
        <AnimatePresence
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Main>
    </ThemeProvider>
  );
}
