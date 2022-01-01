import Link from 'next/link';

// `getStaticProps`, and similar Next.js methods like `getStaticPaths` and `getServerSideProps`
// only run in Node.js. Check the terminal to see the environment variables

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <p>{process.env.NEXT_PUBLIC_DB_HOST}</p>
    </>
  );
}
