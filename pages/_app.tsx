import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Providers } from '../components/providers'
import { Navbar } from '../components/navbar'
import '../styles/globals.css'
import '../styles/background.css'
import { Link } from '@heroui/link'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            <Providers>
                <div className="relative flex flex-col h-screen">
                    <Navbar />
                    <main className="container mx-auto max-w-7xl pt-24 px-6 flex-grow">
                        <Component {...pageProps} />
                    </main>
                    <footer
                        className="w-full flex items-center justify-center py-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                    >
                        <Link
                            href="https://heroui.com?utm_source=next-app-template"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-current"
                        >
                            <span className="text-default-600">Powered by</span>
                            <p className="text-primary">SSMIET</p>
                        </Link>
                    </footer>
                </div>
            </Providers>
        </ThemeProvider>
    )
}

export default MyApp