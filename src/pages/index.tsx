import { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import { useApolloClient } from '@apollo/client';
import Layout from '../components/Layout';
import { addApolloState, initializeApollo } from '../lib/apollo';
import { LaunchDocument } from '../graphql/queries/launch.graphql.interface';
import { LaunchListContainer } from '../components/LaunchList/LaunchListContainer';
import { Launch } from '../graphql/__generated__/schema.graphql';

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
