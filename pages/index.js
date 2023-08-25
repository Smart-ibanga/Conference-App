import React, { useEffect, useState } from 'react'

const random_boolean = Math.random() >=0.5;
// const [isloading , setIsLoading] = useState(true)

if (random_boolean === true) {
  const [isloading , setIsLoading] = useState(true)
} else {
  const [isloading , setIsLoading] = useState(false)
}

useEffect(()=>{
  setTimeout(() => {
    setIsLoading(false)
  })
}, 2000 )

const InputElement = () => {
  return isloading ? <div>...Loading</div> : <input placeholder='Enter some text' />
  
}

export default InputElement