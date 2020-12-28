import Head from "next/head";
import Link from "next/link";

const name = "Sridhar Reddy";
export const siteTitle = "Next.js Sample Website"

const Layout = ({ children, home }) => {
    return (

        <div className="container">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="header">
                {
                    home ? (
                        <>
                            <img src="/images/profile.jpg" className="headerHomeImage borderCircle" alt={name} />
                            <h1 className="heading2Xl">{name}</h1>

                        </>
                    ) : (
                            <>
                                <Link href="/">
                                    <a>
                                        <img src="/images/profile.jpg" className="headerImage borderCircle" alt={name} />
                                    </a>
                                </Link>
                                <h2 className="headingLg">
                                    <Link href="/">
                                        <a className="colorInherit">
                                            {name}
                                        </a>
                                    </Link>
                                </h2>
                            </>

                        )

                }
            </header>
            <main>
                {
                    children
                }
            </main>
            {
                !home && (
                    <div className="backToHome">
                        <Link href="/" >
                            <a>back To Home</a>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Layout;