import React, { useContext } from 'react'
import { GlobalState } from "../../../GlobalState"


const loadMoreStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const loadMoreButtonStyle = {
  width: "150px",
  textTranform: "capitalize",
  fontSize: "1.4rem",
  margin: "5px",
  backgroundColor: "darkgray",
  color: "#f1f1f1",
}


function LoadMore() {
  const state = useContext(GlobalState)
  const [page, setPage] = state.productsAPI.page
  const [result] = state.productsAPI.result


  return (
    <div style={loadMoreStyle}>
      {
        result < page * 3 ? ""
        : <button
           style={loadMoreButtonStyle}
           onClick={() => setPage(page+1)}
          >Load More</button>
      }
    </div>
  )
}


export default LoadMore

