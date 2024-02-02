import { useRef } from "react"

const FilterName = ({setNameUnput}) => {

  const inputSearch = useRef()

  const handleSumit = e => {
    e.preventDefault()
    setNameUnput(inputSearch.current.value.trim().toLowerCase())
    inputSearch.current.value = ''
  }

  return (
    <form onSubmit={handleSumit}>
      <input ref={inputSearch} type="text" />
      <button>Search</button>
    </form>
  )
}

export default FilterName