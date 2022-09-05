import React from 'react';
import "../../css/topButton.css"
import { useState, useEffect } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

  }
  useEffect(() => {
    const ShowButtonClick = () => {
      if (window.scrollY > 800) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener("scroll", ShowButtonClick)
    return () => {
      window.removeEventListener("scroll", ShowButtonClick)
    }
  }, [])
  return (
    <>
      {showButton &&
          <div>
            <button
            className='topButton'
            onClick={scrollToTop}>
            <KeyboardArrowUpIcon
            />
            </button>
          </div>
      }
    </>
  )
}

export default TopButton;