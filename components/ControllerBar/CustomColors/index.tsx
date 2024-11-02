import React, { useEffect, useContext, useCallback } from 'react'
import '@/components/ControllerBar/CustomColors/customColors.css'
import { ColorsContext } from '@/context/ColorsContext'
import { ThemeContext } from '@/context/ThemeContext'
import SaveColors from '../ColorsStorage/SaveColor'
import RedoColor from '../ColorsStorage/RedoColor'
import UndoColor from '../ColorsStorage/UndoColor'
import CustomLight from './Light'
import CustomDark from './Dark'
import CustomColorStorage from './colorStorage'



const CustomColors = () => {

    // const { primary, secondary, accent, background, text } = inputColor
    const { mode } = useContext(ThemeContext)
    const { setColorsStorage, setColors, setSavedColorsStorage, setActiveColorsStorage, activeColorsStorage, colorsStorage, colors, indexColor, savedColorsStorage,  darkHex, lightHex, setColorType,scheme, setLightHex, setDarkHex, activeInputColor, setActiveInputColor,  setOpenExport } = useContext(ColorsContext)







    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // console.log(inputColor );


    const handleInputDarkColors = useCallback((e: { target: { name: string, value: string, parentNode: any } }) => {
        setColorType('hex')
        setActiveInputColor(true)
        setDarkHex({ ...darkHex, [e.target.name]: e.target.value })
        e.target.parentNode.style.backgroundColor = e.target.value
        setSavedColorsStorage(false)
    }, [darkHex, setActiveInputColor, setColorType, setDarkHex, setSavedColorsStorage])




    const handleInputLightColors = useCallback((e: { target: { name: string, value: string, parentNode: any } }) => {
        setColorType('hex')
        setActiveInputColor(true)
        setLightHex({ ...lightHex, [e.target.name]: e.target.value })
        e.target.parentNode.style.backgroundColor = e.target.value
        setSavedColorsStorage(false)
    }, [lightHex, setActiveInputColor, setColorType, setLightHex, setSavedColorsStorage])


    const handleColorType = useCallback(() => {
        setColorType('hex')
        setOpenExport(false)
        if (activeInputColor === false) {
            setColorType('random')
        }

        // const find: any = [...colorsStorage].find((obj: any) => obj.primaryStorage === colors?.primaryStorage)
        // const active = colors?.primaryStorage === find?.primaryStorage
        // console.log('sheme', find?.primaryStorage, active);
        // setSavedColorsStorage(active)

    }, [activeInputColor, setColorType, setOpenExport])

    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const handleInputColorsStorage = (e: { target: { name: string, value: string, parentNode: any } }) => {
        setActiveInputColor(true)

        const updatedColorStorage = [...colorsStorage];
        updatedColorStorage[indexColor] = {
            ...updatedColorStorage[indexColor],
            [e.target.name]: e.target.value
        };

        localStorage.setItem('colorsStorage', JSON.stringify(updatedColorStorage));
        setColorsStorage(updatedColorStorage);
        setColors({ ...colors, [e.target.name]: e.target.value })
        e.target.parentNode.style.backgroundColor = e.target.value
    }

    const handleColorTypeStorage = () => {
        setActiveColorsStorage(true)
        setColorType('colorsStorage')
        setOpenExport(false)
    }


    useEffect(() => {
        const labels = document.querySelectorAll('div.custom-color label')
        if (activeInputColor === false) {
            labels.forEach(label => {
                label.setAttribute('style', '')
                // label?.style?.backgroundColor = ''
            })
        }
    }, [activeInputColor])



    return (
        <>
            <div className='custom-color'>
                {
                    scheme !== 'storage' && mode === "auto" ? (
                        <>
                            <h5 className='title-auto'>{'<<'} {scheme?.toUpperCase()} {'>>'} </h5>
                        </>
                    ) : null
                }

                {
                    !activeColorsStorage && mode === "dark" ? (
                        <>
                            <h5> {'( '} {scheme.toUpperCase()} {' )'} Custom Dark Mode</h5>
                            <div className='input-box'>
                                {!savedColorsStorage && <SaveColors />}
                                <CustomDark onChange={handleInputDarkColors} onClick={handleColorType} />
                            </div>
                        </>
                    ) : null
                }


                {
                    !activeColorsStorage && mode === "light" ? (
                        <>
                            <h5>{'( '} {scheme.toUpperCase()} {' )'} Custom Light Mode</h5>

                            <div className='input-box'>
                                {!savedColorsStorage && <SaveColors />}
                                <CustomLight onChange={handleInputLightColors} onClick={handleColorType} />
                            </div>
                        </>
                    ) : null
                }

                {
                    activeColorsStorage ? (<>
                        {
                            colorsStorage.length && colorsStorage.length >= 1 ? (
                                <>
                                    <h5> {scheme.toUpperCase()} : {'( Edit theme '} {indexColor + 1 }{' )'}  {colorsStorage[indexColor]?.modeStorage} Mode   </h5>
                                    <div className='input-box'>
                                        <UndoColor />
                                        <CustomColorStorage onChange={handleInputColorsStorage} onClick={handleColorTypeStorage} />
                                        <RedoColor />
                                    </div>
                                </>

                            ) : (

                                <>
                                    <h3 className='no-color'>No color has been saved.</h3>

                                </>
                            )

                        }
                    </>) : null
                }


            </div>
        </>
    )
}

export default CustomColors