import React, { useEffect } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { secondProductData } from '../Actions/action';
import axios from 'axios';
import './datacard.css'
import { useNavigate } from 'react-router-dom';

export default function Datacard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const secondCartData = useSelector((state) => state.siteData.allData)
  // console.log("secondCartData============================>", secondCartData);
  const { id } = useParams();
  const data = id;
  console.log(data)


  const fetchData = async () => {

    const response = await axios.get(`https://fakestoreapi.com/products/${data}`).catch((err) => {
      console.log("err", err)
    })
    // console.log(response)
    dispatch(secondProductData(response.data))

  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
      <div className='main-container'>
        {secondCartData.map((item) => {
          const { title, description, price, image, category } = item;
          return (
            <>
              <div className='card-data'>
                <div class="card" style={{ width: '30rem' }}>
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div className="card-body ">
                    <h5 className="card-title">{item.title}</h5>
                    <p classname="card-text">{item.description}</p>
                    {/* <button classname='btn btn-danger'> */}
                    <div>
                    <NavLink to={'/products'} class='Link' style = {{color:'#fff', textDecoration:'none', border:'1px solid red', padding:'15px 20px', fontSize:'1.2rem',fontWeight:'bold'}}>Go Back</NavLink>

                    </div>
                    {/* </button> */}
                  </div>
                </div>
              </div>
            </>
          )
        })
        }
      </div>

    </>
  )
}
