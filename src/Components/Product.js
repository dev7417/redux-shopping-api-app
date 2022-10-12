/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setProductData } from '../Actions/action';
import {  NavLink, Outlet } from 'react-router-dom';
import './product.css'

export default function Product() {
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.siteData.allData)
  console.log(myData)
  // const {id, name,category} = myData;
  const fetchApiData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log("Err", err)
    })
    // console.log(response)
    dispatch(setProductData(response.data))
  }
  // fetchApiData()
  useEffect(() => {

    fetchApiData();

  }, [])
  setTimeout(() => {

    // console.log(myData);
  }, 3000)
  return (
    <>

      <div className='container-fluid'>
        <div className='row'>
          {myData.map((item) => {
            const { description, id, title } = item;
            const cartDescription = description.substring(0, 100);
            return <>
              <div className='col-lg-3 col-md-4 my-4' key={id} >
                <NavLink to={`/cart/${id}`}>
                  <div className="card" style={{ width: '18rem' }}>
                    <img src={item.image} className="card-img-top card-img img-fluid" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{cartDescription.length >= 90 ? `${cartDescription}...` : cartDescription}</p>
                      {/* <a href={`/${id}`} className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                </NavLink>
              </div>
            </>

          })}
        </div>


      </div>
     

    </>
    /* <div>{id}</div>
    <div>{category}</div>
    <div>{name}</div> */
  )
}
