import React from 'react'
import InputField from "../../components/InputField";
import throttle from "../../utils/debounce";

const GithubSearch = () => {
  const handleInputChange = throttle((value: string) => {
    console.log(value)
  }, 1000)

  return <InputField onChange={handleInputChange}/>
}

export default GithubSearch
