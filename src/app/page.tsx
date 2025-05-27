import Head from "next/head";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fathurrahman | Frontend Developer dari SMK Plus Pagelaran</title>
        <meta
          name="description"
          content="Website pribadi Fathurrahman, seorang Frontend Developer lulusan SMK Plus Pagelaran. Temukan proyek, pengalaman, dan informasi kontak."
        />
        <meta
          name="keywords"
          content="Fathurrahman, Fathurrahman SMK Plus Pagelaran, Frontend Developer, Portofolio Web Developer, Web Developer Bekasi"
        />
        <meta name="author" content="Fathurrahman" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Fathurrahman | Frontend Developer dari SMK Plus Pagelaran"
        />
        <meta
          property="og:description"
          content="Lihat koleksi proyek dan perjalanan karier Fathurrahman sebagai Frontend Developer lulusan SMK Plus Pagelaran."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ffathur.my.id" />
        <meta
          property="og:image"
          content="https://ffathur.my.id/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fathurrahman | Frontend Developer dari SMK Plus Pagelaran | Frontend Developer dari Universitas Bina Informatika | Full Stack Developer dari Bearmentor dan Wahidev"
        />
        <meta
          name="twitter:description"
          content="Website pribadi Fathurrahman, seorang Frontend Developer dengan karya dan proyek terbaik."
        />
        <meta
          name="twitter:image"
          content="https://ffathur.my.id/twitter-image.jpg"
        />
      </Head>

      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}
