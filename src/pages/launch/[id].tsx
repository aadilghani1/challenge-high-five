import { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react';
import { LaunchDetailsLoader } from '../../components/LaunchDetails/LaunchDetailsLoader';
import { LaunchDetailDocument } from '../../graphql/queries/launchDetail.graphql.interface';
import { Launch } from '../../graphql/__generated__/schema.graphql';
import { addApolloState, initializeApollo } from '../../lib/apollo';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const {
    params: { id },
  } = ctx;
  const apolloClient = initializeApollo(null, ctx);

  const {
    data: { launch },
  } = await apolloClient.query({
    query: LaunchDetailDocument,
    variables: { id },
  });

  return addApolloState(apolloClient, {
    props: {
      [`launch-${id}`]: { launch },
      id,
    },
  });
};

const LaunchPage: NextPage<{ launch: Launch; id: string }> = ({ id }) => {
  return <LaunchDetailsLoader id={id} />;
};

export default LaunchPage;
