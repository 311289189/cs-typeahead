import React from 'react'
import InputField from "../../components/InputField";
import useDebounce from "../../hooks/useDebounce";
import apiFetch from "../../utils/apiFetch";
import {GithubUsersResponse, User} from "../../../types/github";

const GithubSearch = () => {
  const [apiKey, setApiKey] = React.useState<string>('');
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [isSearching, setIsSearching] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<User[]>([]);
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);
  const [limits, updateLimits] = React.useState<{ limit: string, remaining: string } | null>(null)

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      const options: RequestInit = {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
      apiFetch<GithubUsersResponse>(`https://api.github.com/search/users?q=${debouncedSearchTerm}`, apiKey ? options : undefined).then(results => {
        setIsSearching(false);
        const limit = results.data.headers.get('X-RateLimit-Limit')
        const remaining = results.data.headers.get('X-RateLimit-Remaining')
        if (limit !== null && remaining !== null) {
          updateLimits({ limit, remaining })
        }
        setResults(results.json.items);
      });
    } else {
      setResults([]);
    }
  // eslint-disable-next-line
  }, [debouncedSearchTerm])

  return (
    <main>
      {
        limits && (
          <div>
            <div>Limits:</div>
            <div>Limit: {limits?.limit}</div>
            <div>Remaining: {limits?.remaining}</div>
          </div>
        )
      }
      <div>
        <label htmlFor="apiKey">If you would like to use your own API key, please enter it here </label>
        <InputField
          id="apiKey"
          onChange={(key: string) => setApiKey(key)}
          value={apiKey}
        />
      </div>
      <div>
        <InputField
          placeholder="Search for a user: "
          id="searchInput"
          onChange={setSearchTerm}
          value={searchTerm}
        />
      </div>
      <div>
        {isSearching ? 'searching' : 'not searching...'}
        {/*{results.map(result => <GithubUser user={result}/>)}*/}
      </div>
    </main>
  )
}

export default GithubSearch
