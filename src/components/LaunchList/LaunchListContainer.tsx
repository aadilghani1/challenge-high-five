import { useQuery } from '@apollo/client';

import { LaunchDocument } from '../../graphql/queries/launch.graphql.interface';
import { LaunchListMapper } from './LaunchListMapper';

export const LaunchListContainer = () => {
  const { data, loading } = useQuery(LaunchDocument);

  if (loading) {
    return <div>Launches loading...</div>;
  }

  return <LaunchListMapper launches={data.launches} />;
};
