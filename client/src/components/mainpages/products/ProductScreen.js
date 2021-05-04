import React, {useContext, useState} from 'react';
import { GlobalState } from "../../../GlobalState"
import SearchForm from "./SearchForm";
import ProductItem from "../utils/productItem/ProductItem";
import Loading from "../utils/loading/Loading"
import Sponsors from "../../helperComponents/Sponsors";
import Footer from '../../helperComponents/Footer';
import LoadMore from "./LoadMore"
import axios from "axios"


const ProductScreen = () => {
  const state = useContext(GlobalState)
  const [products, setProducts] = state.productsAPI.products
  const [isAdmin] = state.userAPI.isAdmin
  const [token] = state.token
  const [callback, setCallback] = state.productsAPI.callback
  const [loading, setLoading] = useState(false)
  const [isCheck, setIsCheck] = useState(false)


  const handleCheck = (id) => {
    products.forEach(product => {
      if(product._id === id) product.checked = !product.checked
    })
    setProducts([...products])
  }

  const deleteProduct = async(id, public_id) => {
    try {
      setLoading(true)
      const destroyImage = axios.post('/api/destroy', {public_id}, {
        headers: {Authorization: token}
      })

      const deleteProduct = axios.delete(`/api/products/${id}`, {
        headers: {Authorization: token}
      })

      await destroyImage
      await deleteProduct
      setCallback(!callback)
      setLoading(false)
    } catch (err) {
      alert(err.response.data.msg)
    }
  }

  const checkAll = () => {
    products.forEach(product => {
      product.checked = !isCheck
    })
    setProducts([...products])
    setIsCheck(!isCheck)
  }

  const deleteAll = () => {
    products.forEach(product => {
      if(product.checked) deleteProduct(product._id, product.images.public_id)
    })
  }


  if(loading) return <div><Loading /></div>

  return (
    <>
      <div id="global-top-image-container">
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">Product Listings</h1>
          </div>
        </section>
      </div>

      <SearchForm />

      <div className="container">

        {
          isAdmin &&
          <div className="delele-all">
            <span>Select all</span>
            <input type="checkbox" checked={isCheck} onChange={checkAll} />
            <button onClick={deleteAll}>Delete All</button>
          </div>
        }

        <div className="row">
          {
             products.map(product => {
              return (
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 product-items-box"
                  key={product._id}>
                  <ProductItem
                    key={product._id}
                    product={product}
                    isAdmin={isAdmin}
                    deleteProduct={deleteProduct}
                    handleCheck={handleCheck}
                  />
                </div>
              )
            })
          }
        </div>

      </div>

      <LoadMore />

      {
        products.length === 0 && <div><Loading /></div>
      }

      {
        products.length === 0 && <p className="no-product-return">No result is returned from the Database. Please try again!</p>
      }

      <Sponsors />

      <Footer />
    </>
  )
}


export default ProductScreen

