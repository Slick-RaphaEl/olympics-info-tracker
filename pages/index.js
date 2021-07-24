import Head from "next/head";
import Header from "../components/Header";
import Results from "../components/Results";

export default function Home({results}) {
  return (
    <div className="">
      <Head>
        <title>Olympics Info Live</title>
        <meta name="description" content="Olympics, Information about current events in the olympics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Results results={results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://newsapi.org/v2/everything?q=olympics&sortBy=publishedAt&language=en&apiKey=${process.env.apiKey}`
  ).then((res) => res.json());

  return {
    props:{
      results: request.articles
    }
  };
}
