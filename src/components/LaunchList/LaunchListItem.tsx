import Link from 'next/link';
import React from 'react';
import { Launch } from '../../graphql/__generated__/schema.graphql';
type LaunchListItemProps = Pick<
  Launch,
  'id' | 'mission_name' | 'details' | 'launch_date_utc' | 'launch_date_unix'
>;

const LaunchListItem: React.FC<LaunchListItemProps> = ({
  id,
  mission_name,
  details,
  launch_date_utc,
}) => {
  return (
    <Link href={`/launch/${id}`}>
      <a className="px-5 py-8 w-full rounded-lg bg-gray-50 border border-gray-300 relative text-left hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 ease-out">
        <div className="flex flex-col space-y-3">
          <p className="absolute top-3 right-3 text-gray-400 text-xs">{id}</p>
          <p className="text-lg font-semibold">Mission Name: {mission_name}</p>
          <p>
            Launch Date: {launch_date_utc}
            <span className="text-xs">(UTC)</span>
          </p>
          <p className="italic">
            {details ?? 'Details not available yet, Stay tuned!'}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default LaunchListItem;
