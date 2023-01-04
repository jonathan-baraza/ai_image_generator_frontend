import Head from "next/head";
import Nav from "../components/Nav";
import ImageGenerator from "../components/ImageGenerator";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI IMAGE GENERATOR</title>
        <meta
          name="description"
          content="This AI powered application generates images from natural language"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <main style={{ minHeight: "80vh", position: "relative" }}>
        <ImageGenerator />
      </main>
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
