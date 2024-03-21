import React, { useEffect, useState } from 'react'
import './style.css'
import interier_1 from '../../public/interier.png'
import interier_2 from '../../public/interier_2.png'
import interier_3 from '../../public/interier_3.png'

export default function FirstSection() {
  // старая реализация состояния для картинок
  // const [image, setImage] = useState(interier_1)

  // if (image == interier_1) {
  //   setTimeout(() => {
  //     setImage(interier_2)
  //     return true
  //   }, 3000);
  // }
  // if (image == interier_2) {
  //   setTimeout(() => {
  //     setImage(interier_3)
  //     return true
  //   }, 3000);
  // }
  // if (image == interier_3) {
  //   setTimeout(() => {
  //     setImage(interier_1)
  //     return true
  //   }, 3000);
  // }


  // рефакторинг
  const images = [interier_1, interier_2, interier_3];

  const [imageIndex, setImageIndex] = useState(0);
  const [isFirstImageVisible, setIsFirstImageVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstImageVisible(!isFirstImageVisible);
    }, 3000);

    return () => clearTimeout(timer);
  }, [imageIndex, isFirstImageVisible]);

  return (
    <div className='FirstSection'>
      <img
        src={images[(imageIndex + 1) % images.length]}
        className={`fade-in-out ${isFirstImageVisible ? '' : 'hidden'}`}
      />
      <img
        src={images[imageIndex]}
        className={`fade-in-out ${isFirstImageVisible ? 'hidden' : ''}`}
      />
    </div>
  )
}
