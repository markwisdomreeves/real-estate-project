
import React, {useContext, Suspense, lazy} from 'react'

import {Switch, Route} from 'react-router-dom'

import {GlobalState} from '../../GlobalState'

import Loading from "../mainpages/utils/loading/Loading"

import HomeScreen from "../pages/HomeScreen"
import LoginScreen from "./auth/LoginScreen"
import RegisterScreen from "./auth/RegisterScreen"
import PageNotFoundScreen from './utils/pageNotFoundScreen/PageNotFoundScreen'

const ProductScreen = lazy(() => import("./products/ProductScreen"))
const ProductDetailScreen = lazy(() => import("./productDetailScreen/ProductDetailScreen"))
const BlogScreen = lazy(() => import("../mainpages/blogScreen/BlogScreen"))
const BlogDetailScreen = lazy(() => import("./blogDetailScreen/BlogDetailScreen"))
const AboutUsScreen = lazy(() => import("../pages/AboutUsScreen"))
const ContactScreen = lazy(() => import("../pages/ContactScreen"))

const CategorieScreen = lazy(() => import("./categorieScreen/CategorieScreen"))
const CreateProductScreen = lazy(() => import("./createProductScreen/CreateProductScreen"))
const OrderHistoryScreen = lazy(() => import("./historyScreen/OrderHistoryScreen"))
const OrderDetailScreen = lazy(() => import("./historyScreen/OrderDetailScreen"))
const CartScreen = lazy(() => import("./cartScreen/CartScreen"))


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/login" exact component={isLogged ? PageNotFoundScreen : LoginScreen} />
            <Route path="/register"  component={isLogged ? PageNotFoundScreen : RegisterScreen} />

            <Suspense fallback={<span><Loading /></span>}>
                <Route path="/products" exact component={ProductScreen} />
                <Route path="/detail/:id" exact component={ProductDetailScreen} />

                <Route path="/blogs/:id" exact component={BlogDetailScreen} />

                <Route path="/category" exact component={isAdmin ? CategorieScreen : PageNotFoundScreen} />
                <Route path="/create_product" exact component={isAdmin ? CreateProductScreen :  PageNotFoundScreen} />
                <Route path="/edit_product/:id" component={isAdmin ? CreateProductScreen :  PageNotFoundScreen} />

                <Route path="/history" exact component={isLogged ? OrderHistoryScreen :  PageNotFoundScreen} />
                <Route path="/history/:id" exact component={isLogged ? OrderDetailScreen :  PageNotFoundScreen} />

                <Route path="/cart" exact component={CartScreen} />
                <Route path="/about-us" exact component={AboutUsScreen} />
                <Route path="/contact" exact component={ContactScreen} />
                <Route path="/blogs" exact component={BlogScreen} />
            </Suspense>

            <Route path="*" component={PageNotFoundScreen} />

        </Switch>
    )
}


export default Pages
