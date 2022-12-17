import Head from "next/head";

function SEO({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}| NEXT movies</title>
    </Head>
  );
}

export default SEO;
