import '@/components/ControllerBar/Schemes/schemes.css'
import React, {useCallback, useContext, useEffect, useState , useLayoutEffect} from 'react'
import Shades from '@/components/ControllerBar/Schemes/Colors/Shades'
import MixColors from '@/components/ControllerBar/Schemes/Colors/MixColors';
import Storage from '@/components/ControllerBar/Schemes/Colors/Storage';
import {ColorsContext} from '@/context/ColorsContext';
import {ThemeContext} from '@/context/ThemeContext';


function getIndex() {
   const labels : any = typeof window !== 'undefined' ? document.querySelectorAll('div.switch-scheme label') : null
   const elArr : any = typeof window !== 'undefined' ? Array.from(labels) : null 
   const activeElement: Element | null = typeof window !== 'undefined' ? document.querySelector('div.switch-scheme label.active') : null
   return activeElement ? elArr.indexOf(activeElement) : 0
}



const Schemes = () => {

   const all = (el: string | any): NodeListOf<any> => document.querySelectorAll(el);
   const { mode, setMode } = useContext(ThemeContext)

   const { setColorType, setActiveRandomColor, colorsStorage, scheme, colors, setActiveInputColor, setOpenExport, setSavedColorsStorage, setScheme, setActiveColorsStorage, colorType } = useContext(ColorsContext)


   const [transition, setTransition] = useState(true)
   const [index, setIndex] = useState(getIndex)
   const [switchStart, setSwitchStart] = useState(false)



   // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   const handleSwitchScheme = useCallback(() => {
      all('div.switch-scheme label').forEach(el => el?.classList?.remove('active'));
      // setColorType('random')
      setOpenExport(false)
      setActiveInputColor(false)

      setIndex((prev: number) => index === document.querySelectorAll('div.switch-scheme label').length - 1 ? 0 : prev + 1)
      all('div.switch-scheme  label')[index]?.classList.add('active')
      setSwitchStart(true)


      const input: any = document.querySelector('div.switch-scheme label.active input')
      const value = input?.value
      setScheme(value)

   }, [index, setActiveInputColor, setOpenExport, setScheme])


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   useLayoutEffect(() => {
      if (switchStart) {
         handleSwitchScheme()
         setTransition(true)
         all('div.switch-scheme  label')[index]?.classList.add('transition')
         setSwitchStart(false)

         all('div.switch-scheme label').forEach(el => {
            el.addEventListener('animationend', () => {
               el.classList.remove('transition')
               setTransition(true)
            })
         })

         if (document.querySelector('div.switch-scheme label.active')?.classList.contains('transition')) {
            setIndex(index)
            setTransition(false)
         } else {
            setTransition(true)
         }

      }

   }, [handleSwitchScheme, index, switchStart])


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   useEffect(() => {
      if (scheme === 'storage') {
         setActiveColorsStorage(true)
      } else {
         setActiveColorsStorage(false)
         setColorType('random')
      }
   }, [mode, scheme, setActiveColorsStorage, setActiveRandomColor, setColorType, setMode])

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
useLayoutEffect(() => {
      if (colorType === 'random') {
         const find: any = [...colorsStorage].find((obj: any) => obj.primaryStorage === colors?.primaryStorage)
         const active: any = [...colorsStorage].some((obj: any) => obj.primaryStorage === find?.primaryStorage && obj.mutedStorage === colors?.mutedStorage && obj.accentStorage === colors?.accentStorage && obj.backgroundStorage === colors?.backgroundStorage && obj.textStorage === colors?.textStorage && obj.secondaryStorage === colors?.secondaryStorage)
         setSavedColorsStorage(active)
      }
   }, [colorType, colors?.accentStorage, colors?.backgroundStorage, colors?.mutedStorage, colors?.primaryStorage, colors?.secondaryStorage, colors?.textStorage, colorsStorage, setSavedColorsStorage])


   // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   return (
      <>

         <div className={'switch-scheme'} onClick={() => transition && handleSwitchScheme()} >

            <div className='flex switch-inner' >

               <label htmlFor='mix-id' className='mode active'>Mix
                  <input type='radio' id='mix-id' name='scheme' value={'mix'} onChange={() => { }} checked={scheme === 'mix'} />
                  {/* <SvgLight /> */}
               </label>

               <label htmlFor='shades-id' className='mode'>Shades
                  <input type='radio' id='shades-id' name='scheme' value={'shades'} onChange={() => { }} checked={scheme === 'shades'} />
                  {/* <SvgSystem /> */}
               </label>


               <label htmlFor='storage-id' className='mode'>Storage
                  <input type='radio' id='storage-id' name='scheme' value={'storage'} onChange={() => { }} checked={scheme === 'storage'} />
                  {/* <SvgSystem /> */}
               </label>


            </div>
         </div >

         {/* ////////////////////////////////////////////////////// */}

         {
            scheme === 'shades' ? (
               <>
                  <Shades />
               </>
            ) : null
         }
         {
            scheme === 'mix' ? (
               <>
                  <MixColors />
               </>
            ) : null
         }

         {
            scheme === 'storage' ? (
               <>
                  <Storage />
               </>
            ) : null
         }

      </>
   )
}

export default Schemes





