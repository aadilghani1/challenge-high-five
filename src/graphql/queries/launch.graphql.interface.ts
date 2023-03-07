import * as Types from '../__generated__/schema.graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type LaunchQueryVariables = Types.Exact<{ [key: string]: never }>;

export type LaunchQuery = {
  __typename?: 'Query';
  launches?: Array<{
    __typename?: 'Launch';
    id?: string | null;
    mission_name?: string | null;
    details?: string | null;
    launch_date_utc?: any | null;
  } | null> | null;
};

export const LaunchDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Launch' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'launches' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mission_name' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'details' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'launch_date_utc' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LaunchQuery, LaunchQueryVariables>;
