import React from 'react';
import classnames from 'classnames';

import InputField from "../../components/InputField";
import useDebounce from "../../hooks/useDebounce";
import apiFetch from "../../utils/apiFetch";
import {GithubUsersResponse, User} from "../../../types/github";
import GithubUser from "./GithubUser";
import {HTTP_URL} from "../../config/http";
const styles = require('./styles.module.css');

const GithubSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [isSearching, setIsSearching] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<User[]>([]);
  const [searchFocus, setSearchFocus] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setError('');
      setIsSearching(true);

      apiFetch<GithubUsersResponse>(`${HTTP_URL.GITHUB}?q=${debouncedSearchTerm}`).then(({ json, data }) => {
        if (data.status !== 200) {
          setError(data.status === 403 ? '403 Forbidden: Please check your token' : 'API Error')
        } else {
          setResults(json.items);
        }
        setIsSearching(false);
      });
    } else {
      setResults([]);
    }
  // eslint-disable-next-line
  }, [debouncedSearchTerm])

  const isUserTyping = searchTerm !== debouncedSearchTerm

  return (
    <main>
      <div className={styles.searchInput}>
        <InputField
          className={styles.inputField}
          hasFocus={setSearchFocus}
          placeholder="Search for a user: "
          id="searchInput"
          onChange={setSearchTerm}
          value={searchTerm}
        />
        <div className={styles.errorMessage}>{ error && error }</div>
        <div className={classnames(styles.userTilesWrapper, styles.hideScrollbar, {
          [styles.isOpen]: results && results.length && searchTerm && searchFocus && !error
        })}>
          {results && results.map((result, index) => (
            <GithubUser
              isLoading={isSearching || isUserTyping}
              key={index}
              user={result}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default GithubSearch
