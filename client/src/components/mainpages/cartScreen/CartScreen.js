import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'


function CartScreen() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        if(window.confirm("Are you sure that you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;

        await axios.post('/api/payment', {cart, paymentID, address}, {
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }


    if(cart.length === 0)
        return (
            <div className="empty-cart-container">
              <h2>Your Cart is Empty</h2>
                <div className="empty-cart-img-box">
                   <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160235/realEstateImages/empty-cart-1_motiyh.jpg"
                   alt="cartImg" />
                </div>
            </div>
        )


    return (
        <div id="cart-container">
            {
                cart.map(product => (
                    <div className="card mb-3" id="main-cart-container" key={product._id}>
                        <div className="row g-0 inner-cart-container">
                            <div className="col-md-4 my-custom-img-cart-container">
                               <img src={product.images.url} alt="" />
                            </div>
                            <div className="col-md-8 inner-items-cart-container">
                                <div className="card-body cart-body-items-container">
                                    <h4 className="card-title">$ {product.price * product.quantity}</h4>
                                    <h5 className="card-title">{product.title}</h5>
                                    <h6 className="card-text">{product.address}</h6>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><small className="text-muted">{new Date(product.createdAt).toLocaleString() + 1}</small></p>

                                    <div className="amount cart-item-amount">
                                        <button onClick={() => decrement(product._id)}> - </button>
                                        <span>{product.quantity}</span>
                                        <button onClick={() => increment(product._id)}> + </button>
                                    </div>

                                   <div className="delete item-cart-remove-btn"
                                      onClick={() => removeProduct(product._id)}>
                                       X
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <h3>Total: $ {total}</h3>
                <PaypalButton
                total={total}
                tranSuccess={tranSuccess} />
            </div>
        </div>
    )
}


export default CartScreen
