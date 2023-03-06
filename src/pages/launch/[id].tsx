import { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react';
import { initializeApollo } from '../../lib/apollo';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const {
    params: { id },
  } = ctx;

  return {
    props: {
      id: id,
    },
  };
};

const LaunchPage: NextPage<{ id: number }> = ({ id }) => {
  return <div>{id}</div>;
};

export default LaunchPage;
