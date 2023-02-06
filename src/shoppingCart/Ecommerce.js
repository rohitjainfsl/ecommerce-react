import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Ecommerce.css'
// useEffect: is used when we need a code to run either once / is also used when we want to run a code when a variable is modified


function Ecommerce() {

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setPhotos(response.data);
        console.log(response.data);
      })

  }, [])
  // axios.get('https://dummyjson.com/products')
  // .then((response) => {
  //   console.log(response.data.products); 
  // })

  // useEffect(() => {
  //   async function fetchData(){
  //     const response = await axios.get('https://dummyjson.com/products')
  //     console.log(response)
  //     setProduct(response.data.products)
  //   }
  //   fetchData()
  // }, [])


  // console.log(products)

  return (
    <>
      <h1>Ecommerce</h1>
      <div className='vinayParent'>
        {
          photos.map((photo, index) => {
            if (index < 100) {
              return (
                <div className='vinay' key={index}>
                  <div className='photo'><img src={photo.thumbnailUrl}></img></div>
                  <h3>{photo.title}</h3>
                </div>
              )
            }
          })
        }
      </div>
    </>
  )
}

export default Ecommerce