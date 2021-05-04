import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { GlobalState } from "../../../../GlobalState"


function RenderBtn({product, deleteProduct}) {
  const state = useContext(GlobalState)
  const [isAdmin] = state.userAPI.isAdmin
  const [isLogged] = state.userAPI.isLogged
  const addCart = state.userAPI.addCart


  return (
    <div className="card-body my-custom-cart-footer">
      {
        isAdmin ?
        <>
          <Link to={`/edit_product/${product._id}`}
          className="card-link success" id="my-custom-product-info">Edit</Link>

          <Link to="##!!"
          onClick={() => deleteProduct(product._id, product.images.public_id)}
          className="card-link danger" id="my-custom-add-cart">Delete</Link>
        </>
        :
        <>
          <Link to={`/detail/${product._id}`} className="card-link info" id="my-custom-product-info">
            Details
          </Link>
          {
            !isLogged ?
              <>
                <Link to="/login"
                  className="card-link" id="my-custom-add-cart">
                  Buy Now
                </Link>
              </>
            :
              <>
                <Link to="#!###"
                  onClick={() => addCart(product)}
                  className="card-link"
                  id="my-custom-add-cart">
                  Buy Now
                </Link>
              </>
          }

        </>
      }
    </div>
  )

}


export default RenderBtn;
