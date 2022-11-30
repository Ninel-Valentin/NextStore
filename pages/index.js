import Layout from "../components/Layout";
import Head from "next/head";

export default function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Welcome to NextStore | The store you are gonna visit again Next time.</title>
                <meta property="title" content="Welcome to NextStore | The store you are gonna visit again Next time."></meta>
                <meta property="description" content="The store you are gonna visit again Next time."></meta>
            </Head>
            Welcome to the HomePage!
        </Layout>
    );
}