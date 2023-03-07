import { useRouter } from 'next/router';
import React, { FC, ReactNode, useContext, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import LaunchContext from '../../context/LaunchesContext';
import { Launch } from '../../graphql/__generated__/schema.graphql';

const getSuggestionValue = (suggestion: Launch) => suggestion.mission_name;

const renderSuggestionsContainer = ({ containerProps, children, query }) => {
  return (
    <div
      {...containerProps}
      className="w-full border rounded-lg flex flex-col space-y-4"
    >
      {children}
    </div>
  );
};

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState('');
  const { launches } = useContext(LaunchContext);
  const router = useRouter();

  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : launches.filter(
          (launch) =>
            launch.mission_name.toLowerCase().slice(0, inputLength) ===
              inputValue ||
            launch.launch_date_utc.slice(0, inputLength) === inputValue,
        );
  };

  const renderSuggestion = (suggestion: Launch) => (
    <button
      type="button"
      className="w-full text-left border p-2"
      onClick={() => router.push(`/launch/${suggestion.id}`)}
    >
      {suggestion.mission_name}
    </button>
  );

  const inputProps = {
    placeholder: 'Search something',
    value: value,
    className:
      'px-3 py-3 focus:outline-none border border-gray-100 w-full rounded-lg relative',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  };

  return (
    <div className="flex flex-col">
      <header className="px-3">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={({ value }) =>
            setSuggestions(getSuggestions(value))
          }
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSuggestionsContainer={renderSuggestionsContainer}
          inputProps={inputProps}
        />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
