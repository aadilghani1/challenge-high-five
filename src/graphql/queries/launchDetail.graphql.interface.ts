import * as Types from '../__generated__/schema.graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type LaunchDetailQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type LaunchDetailQuery = {
  __typename?: 'Query';
  launch?: {
    __typename?: 'Launch';
    id?: string | null;
    details?: string | null;
    is_tentative?: boolean | null;
    launch_date_utc?: any | null;
    mission_id?: Array<string | null> | null;
    mission_name?: string | null;
    static_fire_date_utc?: any | null;
    tentative_max_precision?: string | null;
    upcoming?: boolean | null;
    links?: {
      __typename?: 'LaunchLinks';
      wikipedia?: string | null;
      article_link?: string | null;
    } | null;
    rocket?: {
      __typename?: 'LaunchRocket';
      rocket_name?: string | null;
      rocket_type?: string | null;
      fairings?: {
        __typename?: 'LaunchRocketFairings';
        recovered?: boolean | null;
        recovery_attempt?: boolean | null;
        reused?: boolean | null;
      } | null;
    } | null;
    telemetry?: {
      __typename?: 'LaunchTelemetry';
      flight_club?: string | null;
    } | null;
  } | null;
};

export const LaunchDetailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'LaunchDetail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'launch' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'details' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'is_tentative' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'launch_date_utc' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'links' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'wikipedia' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'article_link' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'mission_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mission_name' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'rocket' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'rocket_name' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'rocket_type' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fairings' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'recovered' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'recovery_attempt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'reused' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'static_fire_date_utc' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'telemetry' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'flight_club' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tentative_max_precision' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'upcoming' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LaunchDetailQuery, LaunchDetailQueryVariables>;
