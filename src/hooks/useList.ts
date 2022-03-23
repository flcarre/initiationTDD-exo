import { useState } from "react"

const useList = ({elPerPages = 10, page = 1} : {elPerPages?: number, page?: number} = {}) => {
  const [elPerPagesValue, setElPerPages] = useState(elPerPages)
  const [pageValue, setPage] = useState(page)

  return {
    elPerPages: elPerPagesValue,
    setElPerPages,
    page: pageValue,
    setPage
  } 
}

export default useList
