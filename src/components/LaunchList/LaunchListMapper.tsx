import { Launch } from '../../graphql/__generated__/schema.graphql';
import LaunchListItem from '../LaunchList/LaunchListItem';

interface UsersListProps {
  launches: Launch[];
}

export const LaunchListMapper: React.FC<UsersListProps> = ({ launches }) => {
  return (
    <ul className="p-3 flex flex-col space-y-5">
      {launches.map((launch) => (
        <LaunchListItem key={launch.id} {...launch} />
      ))}
    </ul>
  );
};
