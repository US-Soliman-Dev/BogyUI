import React, { useCallback, useContext, useState } from 'react'
import { ColorsContext } from '@/context/ColorsContext'
import { StarFilledIcon } from '@/components/svg/icons'
import './randomColors.css'



const RandomColors = () => {


  const [act, setAct] = useState(false)
  // const [oneEffect, setOneEffect] = useState(true)

  const { 
    colorsStorage,
    setOpenExport,
    setActiveRandomColor,
    setRandom,
    setColorType,
    setActiveInputColor,
    savedColorsStorage,
    setSavedColorsStorage,
    setActiveColorsStorage
  } = useContext(ColorsContext)
  

  
  // ////////////////////////////////////////////////////// //

  
  // ////////////////////////////////////////////////////// //
  const handleColors = useCallback( () => {
    setColorType('random')
    setActiveInputColor(false)
    setOpenExport(false)
    setRandom({
      hue_a: Math.floor(Math.random() * 359),
      hue_b: Math.floor(Math.random() * 359),
      hue_c: Math.floor(Math.random() * 359),
      hue_d: Math.floor(Math.random() * 359),
      max_a: Math.floor(Math.random() * 10),
      max_b: Math.floor(Math.random() * 10),
    })

    setActiveRandomColor(true)
    setAct(prev => !prev)



    if (!savedColorsStorage) {
      localStorage.setItem('colorsStorage', JSON.stringify(colorsStorage))
    }
    setSavedColorsStorage(false)
    setActiveColorsStorage(false) 

  } , [colorsStorage, savedColorsStorage, setActiveColorsStorage, setActiveInputColor, setActiveRandomColor, setColorType, setOpenExport, setRandom, setSavedColorsStorage])
  

  return (
    <>
      <button className={`random-button ${act ? 'active' : null}`} onClick={handleColors}>
        <div className='d1'>
          <span className={`s1 ${act ? 'active' : null}`}><StarFilledIcon /></span>
          <span className={`s2 ${act ? 'active' : null}`}><StarFilledIcon /></span>
        </div>
        <div className='d2'>

          <span className={`s3 ${act ? 'active' : null}`}><StarFilledIcon /></span>
          <span className={`s4 ${act ? 'active' : null}`}><StarFilledIcon /></span>
          <span className={`s5 ${act ? 'active' : null}`}><StarFilledIcon /></span>
        </div>
        <div className='d3'>
          <span className={`s6 ${act ? 'active' : null}`}><StarFilledIcon /></span>
          <span className={`s7 ${act ? 'active' : null}`}><StarFilledIcon /></span>
        </div>

      </button>
    </>
  )
}

export default RandomColors