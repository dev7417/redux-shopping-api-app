import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { secondProductData } from '../Actions/action';
import axios from 'axios';

export default function Datacard() {
  const dispatch = useDispatch();
  const secondCartData = useSelector((state) => state.siteData.allData)
  console.log("secondCartData============================>", secondCartData);
  const { id } = useParams();
  const data = id;
  console.log(data)


  const fetchData = async () => {

    const response = await axios.get(`https://fakestoreapi.com/products/${data}`).catch((err) => {
      console.log("err", err)
    })
    console.log(response)
    dispatch(secondProductData(response.data))

  }
  useEffect(() => {
    fetchData();
  }, [ ])
  return (
  
      <div>

      
        {secondCartData.map((item) => {
    
            return (
            <>
              <p>{item.title}</p>
            </>


                 )         })
        }
        </div>


  )
}
