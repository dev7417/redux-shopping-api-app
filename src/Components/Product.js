import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Product() {
    const dispatch = useDispatch();
    const myData = useSelector((state)=>state.siteData.allData)
    console.log(myData)
    const {id, name,category} = myData;
  return (
    <>
        <div>{id}</div>
        <div>{category}</div>
        <div>{name}</div>
    </>
  )
}
