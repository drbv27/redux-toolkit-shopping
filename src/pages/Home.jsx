import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ProductsList from "../components/ProductsList"
import { unSetUser } from "../reducers/user/userSlice"

const Home = () => {
    const [products,setProducts] = useState([]);
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(json => setProducts(json.products))
    },[])


    const handleLogout = () => {
        dispatch( unSetUser());
        navigate("/")
    }
  return (
    <>
        <h2>Home</h2>
        <p>Welcome: {user.fullname} / {user.email}</p>
        <button className="btn btn-primary" onClick={ handleLogout }>Log Out</button>
        <hr/>
        <ProductsList products={products}/>
    </>
  )
}

export default Home