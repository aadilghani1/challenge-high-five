import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import LaunchContext from '../../context/LaunchesContext';

import { LaunchDocument } from '../../graphql/queries/launch.graphql.interface';
import { LaunchListMapper } from './LaunchListMapper';

export const LaunchListContainer = () => {
  const { data, loading } = useQuery(LaunchDocument);
  const { updateLaunchContext } = useContext(LaunchContext);

  if (loading) {
    return <div>Launches loading...</div>;
  }

  updateLaunchContext(data.launches);

  return <LaunchListMapper launches={data.launches} />;
};
