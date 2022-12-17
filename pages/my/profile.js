import Layout from "../../components/Layout";
import Head from "next/head";

export default function HomePage({ name }) {
    return (
        <Layout>
            <Head>
                <title>Welcome {name || 'NextUser'}</title>
            </Head>
            Welcome to the profilePage!
            {/*if not logged in, go to login page*/}
        </Layout>
    );
}