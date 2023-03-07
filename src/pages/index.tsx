import { GetServerSidePropsContext, NextPage } from 'next';
import { LaunchListContainer } from '../components/LaunchList/LaunchListContainer';
import Layout from '../components/Layout';
import { LaunchDocument } from '../graphql/queries/launch.graphql.interface';
import { Launch } from '../graphql/__generated__/schema.graphql';
import { addApolloState, initializeApollo } from '../lib/apollo';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo(null, ctx);

  const {
    data: { launches },
  } = await apolloClient.query({ query: LaunchDocument });

  return addApolloState(apolloClient, {
    props: {
      launches: { launches },
    },
  });
};

const IndexPage: NextPage<{ launches: Launch }> = ({ launches }) => {
  return (
    <Layout>
      <LaunchListContainer />
    </Layout>
  );
};

export default IndexPage;
