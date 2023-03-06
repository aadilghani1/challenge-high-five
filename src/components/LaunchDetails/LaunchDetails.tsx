import Link from 'next/link';
import React from 'react';
import { Launch } from '../../graphql/__generated__/schema.graphql';

type Props = {
  launch: Launch;
};

const LaunchDetails = ({ launch }: Props) => {
  return (
    <div className="flex flex-col space-y-5 p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{launch.mission_name}</h2>
        <Link href={launch.links.wikipedia}>
          <a target="_blank" className="text-blue-500 underline">
            Learn more
          </a>
        </Link>
      </div>
      <hr />
      <section>
        <h4 className="text-lg">Rocket name: {launch.rocket.rocket_name}</h4>
        <ul className="list-disc list-inside flex flex-col space-y-2">
          <p className="font-semibold text-lg">Rocket fairings:</p>
          <li>Recovered: {`${launch.rocket.fairings.recovered}`}</li>
          <li>
            Recovery Attempt: {`${launch.rocket.fairings.recovery_attempt}`}
          </li>
          <li>Reused: {`${launch.rocket.fairings.reused}`}</li>
        </ul>
      </section>
      <hr />
      <section>
        <h4 className="text-lg font-semibold">Details</h4>
        <p className="italic">{launch.details}</p>
      </section>
      <hr />
      <section>
        <h4 className="text-lg font-semibold">Article Link</h4>
        <Link href={launch.links.article_link ?? ''}>
          <a target="_blank" className="text-blue-500 underline">
            Here is a link to the article
          </a>
        </Link>
      </section>
    </div>
  );
};

export default LaunchDetails;
