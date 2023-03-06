import { useQuery } from '@apollo/client';
import { FC } from 'react';

import { LaunchDocument } from '../../graphql/queries/launch.graphql.interface';
import { LaunchDetailDocument } from '../../graphql/queries/launchDetail.graphql.interface';
import LaunchDetails from './LaunchDetails';

export const LaunchDetailsLoader: FC<{ id: string }> = ({ id }) => {
  const { data, loading } = useQuery(LaunchDetailDocument, {
    variables: { id: id },
  });

  if (loading) {
    return <div>Launch loading...</div>;
  }

  return <LaunchDetails launch={data.launch} />;
};
