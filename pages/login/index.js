import Head from 'next/head';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Login | Blue Born Official</title>
                <meta name="description" content="Blue Born Jewelry Website" />
            </Head>

            <div
                className="relative min-h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/background.jpg')" }}
            ></div>
            
        </>
    );
  }
  