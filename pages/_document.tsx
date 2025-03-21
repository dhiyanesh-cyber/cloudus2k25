import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { siteConfig } from '../config/site'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* SEO Meta Tags */}
                    <meta charSet="utf-8" />
                    <meta name="description" content={siteConfig.description} />

                    {/* Favicon */}
                    <link rel="icon" href="/favicon.ico" />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={siteConfig.url} />
                    <meta property="og:title" content={siteConfig.name} />
                    <meta property="og:description" content={siteConfig.description} />
                    <meta property="og:image" content={`${siteConfig.url}/og-image.png`} />

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={siteConfig.url} />
                    <meta property="twitter:title" content={siteConfig.name} />
                    <meta property="twitter:description" content={siteConfig.description} />
                    <meta property="twitter:image" content={`${siteConfig.url}/og-image.png`} />
                </Head>
                <body className="min-h-screen font-sans antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument