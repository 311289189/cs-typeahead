import React from 'react'
import InputField from "../../components/InputField";

const GithubSearch = () => {
  const [apiKey, setApiKey] = React.useState<string>('');
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <main>
      <div>
        <label htmlFor="apiKey">If you would like to use your own API key, please enter it here </label>
        <InputField
          id="apiKey"
          onChange={(key: string) => setApiKey(key)}
          value={apiKey}
        />
      </div>
      <div>
        <label htmlFor="searchInput">Search for a user: </label>
        <InputField
          id="searchInput"
          onChange={setSearchTerm}
          value={searchTerm}
        />
      </div>
    </main>
  )
}

export default GithubSearch
