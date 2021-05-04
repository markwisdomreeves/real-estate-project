import React from 'react';
import RenderBtn from "./RenderBtn"


const imgWidth = {
  width: "18rem"
}

const ProductItem = ({product, isAdmin, deleteProduct, handleCheck}) => {

  return (
    <div className="container" id="product-card-parent-container">
      <div className="row">
          <div className="card product-items-box product-items-container" style={imgWidth}>
            {
              isAdmin && <input type="checkbox" checked={product.checked}
              onChange={() => handleCheck(product._id)} />
            }
            <img src={product.images.url} className="card-img-top" alt="cart1" />

            <span className="badge bg-secondary product-price">$ {product.price}</span>

            <div className="card-body my-custom-cart-body">
              <h5 className="card-title my-custom-cart-title">{product.title}</h5>
              <p className="card-text my-custom-cart-paragraph">{product.address}</p>
            </div>
            <ul className="list-group list-group-flush my-custom-cart-ul">
              <li className="list-group-item">
                <span>
                  <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                  600 Square foot
                </span>
                <span>
                  <i className="fa fa-car" aria-hidden="true"></i>
                  2 Garages
                </span>
                <span>
                  <i className="fa fa-bed" aria-hidden="true"></i>
                  10 Bedrooms
                </span>
                <span>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  Mark Reeves
                </span>
                <span>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                  3 days ago
                </span>
              </li>
            </ul>
            <RenderBtn product={product} deleteProduct={deleteProduct} />
          </div>
        </div>
      </div>
  )
}


export default ProductItem;

