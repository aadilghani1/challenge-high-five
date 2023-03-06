import { NextPage, GetServerSidePropsContext } from 'next';
import { LaunchListContainer } from '../components/LaunchList/LaunchListContainer';
import { LaunchDocument } from '../graphql/queries/launch.graphql.interface';
import { addApolloState, initializeApollo } from '../lib/apollo';

const UsersSSRPage: NextPage = () => {
  return (
    <section>
      <h1>Server-Side Rendering</h1>
      <LaunchListContainer />
    </section>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const apolloClient = initializeApollo(null, ctx);

  const {
    data: { launches },
  } = await apolloClient.query({ query: LaunchDocument });

  return addApolloState(apolloClient, {
    props: {
      launches: { launches },
    },
  });
}

export default UsersSSRPage;
