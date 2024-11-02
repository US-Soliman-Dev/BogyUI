"use client"
import '@/components/ControllerBar/controllerBar.css'
import React, { useContext } from 'react'

import SwitchMode from '@/components/ControllerBar/SwitchMode';
import { ColorsContext } from '@/context/ColorsContext';
import CustomColors from '@/components/ControllerBar/CustomColors';
import Schemes from './Schemes';
import RandomColors from './randomColors';
import StoredColorsList from './ColorsStorage/StoredColorsList';



type ControllerProps = {
    random?: () => number;
    colorValue?: {} | any
}


const ControllerBar: React.FunctionComponent<ControllerProps> = () => {
    const { openExport , setOpenStoredColorsList , switchToColorsStorage ,setOpenExport, setColorType } = useContext(ColorsContext)

    ////////////////////////////////////////////////////////////////////////////


    const handleOpenExport = () => {
        setOpenExport((prev: boolean) => !prev)
        setColorType('hex')
        setOpenStoredColorsList(false)
    }





    return (
        <>
            <div className={'controller'}>
                {/* <div className='shape-left'></div>
                <div className='shape-right'></div> */}
                <CustomColors />

                <div className="controller-inner">
                
                {switchToColorsStorage === false ? <RandomColors /> : null}


                {switchToColorsStorage === false ? <SwitchMode />: (
                    
                    <StoredColorsList />
                    )}


                    <Schemes />
                    <button className={`export-button ${openExport ? 'active' : ''}`} onClick={handleOpenExport}>{`</>`}</button>
                </div>

            </div>
        </>
    )
}

export default ControllerBar







{/* 
    <input type="radio" id='dark' name='theme' checked={theme === 'dark'} value={'dark'} onChange={handleMode} />
 */}


