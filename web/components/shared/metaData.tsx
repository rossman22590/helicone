import Head from "next/head";

interface MetaDataProps {
  children: React.ReactNode;
  title: string;
}

const MetaData = (props: MetaDataProps) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>
          {`${title} | ChatConsole - Providing meaningful and insightful analytics for
          your GPT-3 usage`}
        </title>
        <link rel="icon" href="/assets/heli-logo.png" />
        <meta
          property="og:title"
          content="ChatConsole - Providing meaningful and insightful analytics for
          your GPT-3 usage"
        />
        <meta
          property="og:description"
          name="description"
          content="Monitoring your GPT-3 usage and costs shouldn't be a hassle. With ChatConsole, you can focus on building your product, not building and maintaining your own analytics solution."
          key="desc"
        />
        <meta property="og:image" content="/assets/heli-logo.png" />
      </Head>
      {children}
    </>
  );
};

export default MetaData;
