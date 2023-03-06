import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { LaunchListContainer } from './LaunchListContainer';
import { LaunchDocument } from '../../graphql/queries/launch.graphql.interface';

const MOCKS = [
  {
    request: {
      query: LaunchDocument,
    },
    result: {
      data: {
        users: [
          {
            __typename: 'Launch',
            details: 'Engine failure at 33 seconds and loss of vehicle',
            launch_date_local: '2006-03-25T10:30:00+12:00',
            mission_name: 'FalconSat',
            mission_id: [Array],
            id: '5eb87cd9ffd86e000604b32a',
          },
        ],
      },
    },
  },
];

describe('LaunchListMapper', () => {
  it('Renders without error', async () => {
    render(
      <MockedProvider mocks={MOCKS} addTypename={false}>
        <LaunchListContainer />
      </MockedProvider>,
    );

    expect(await screen.findByText('Launches loading...')).toBeInTheDocument();
    expect(await screen.findByText('user@example.com')).toBeInTheDocument();
  });
});
