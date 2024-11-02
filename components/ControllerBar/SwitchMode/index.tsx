import React, {useCallback, useContext, useLayoutEffect, useState} from 'react'
import {ThemeContext} from '@/context/ThemeContext';
import '@/components/ControllerBar/SwitchMode/switchMode.css'
import {SvgDark, SvgLight, SvgSystem} from '@/components/svg/icons';
import {ColorsContext} from '@/context/ColorsContext';

type SwitchModeProps = {
  theme?: string
  handleSwitchMode?: () => void
}

function getIndex() {
  const labels: any = typeof window !== 'undefined' ? document.querySelectorAll('div.switch label') : null,
      elArr: any = typeof window !== 'undefined' ? Array.from(labels) : null,
      activeElement: Element | null = typeof window !== 'undefined' ? document.querySelector('div.switch label.active') : null;
  return activeElement ? elArr.indexOf(activeElement) : 0
}


const SwitchMode: React.FunctionComponent<SwitchModeProps> = () => {


  const all = (el: string | any): NodeListOf<any> => document.querySelectorAll(el);


  const [index, setIndex] = useState(getIndex)

  const { mode, setMode } = useContext(ThemeContext)
  const { setDefaultMode , setOpenExport } = useContext(ColorsContext)
  const [transition, setTransition] = useState(true)
  const [switchStart, setSwitchStart] = useState(false)

  // const handleMode = (e: { target: { name: string } }) => {
  //   setMode((prevState: string) => e.target?.name || prevState);
  //   console.log(e.target?.name);
  // }

  const handleSwitchMode = useCallback(() => {
    setDefaultMode(false)
    setOpenExport(false)
    all('div.switch label').forEach(el => el?.classList.remove('active'));


    //   setIndex(prev => ({
    //     ...prev,
    //     indexState: activeIndex,
    //     prevIndex: indexState === 0 ? 2 : activeIndex - 1,
    //     nextIndex: indexState === elArr.length - 1 ? 0 : activeIndex + 1
    //   }))

    // ///////////////////////////////////////////////////////////////
    setIndex((prev: number) => index === all('div.switch label').length - 1 ? 0 : prev + 1)
    document?.querySelectorAll('div.switch label')[index]?.classList.add('active')
    setSwitchStart(true)

    // mode === 'auto' ? all('div.switch label')[1].classList.add('active') : null
    // mode === 'light' ? all('div.switch label')[2].classList.add('active') : null
    // mode === 'dark'? all('div.switch label')[0].classList.add('active') : null

    // const input: any = document.querySelector('div.switch label.active input')
    const input: any = all('div.switch label input')[index]
    const value = input?.value
    // console.log(value);
    setMode(value)

    // console.log('switch', switchToColorsStorage);
  }, [index, setDefaultMode, setMode, setOpenExport])





  useLayoutEffect(() => {

    if (switchStart) {
      handleSwitchMode()
      setTransition(true)
      document?.querySelectorAll('div.switch label')[index]?.classList.add('transition')
      setSwitchStart(false)

      if (document.querySelector('div.switch label.active')?.classList.contains('transition')) {
        setIndex(index)
        setTransition(false)
      } else {
        setTransition(true)
      }
      all('div.switch label').forEach(el => {
        el.addEventListener('animationend', () => {
          el.classList.remove('transition')
          setTransition(true)
        })
      })
    }

  }, [handleSwitchMode, index, setSwitchStart, switchStart])


  // //////////////////////////////////////////////////////////////////////////////////////////////////////////



  return (
    <>
      <div className={'switch'} onClick={() => transition && handleSwitchMode()}>

        <div className='flex switch-inner'>

          <label htmlFor="autoID" className='mode active'>
            <input type='radio' id='autoID' name='SwitchMode' onChange={() => { }} value='auto' checked={mode === 'auto'} />
            <SvgSystem />
          </label>

          <label htmlFor="lightID" className='mode '>
            <input type='radio' id='lightID' name='SwitchMode' onChange={() => { }} value='light' checked={mode === 'light'} />
            <SvgLight />
          </label>

          <label htmlFor="darkID" className='mode '>
            <input type='radio' id='darkID' name='SwitchMode' onChange={() => { }} value='dark' checked={mode === 'dark'} />
            <SvgDark />
          </label>

        </div>
      </div >

    </>
  )
}

export default SwitchMode





