import React, { useCallback, useContext, useEffect} from 'react'
import { ColorsContext } from '@/context/ColorsContext'
import './saveColor.css'









const SaveColors = () => {
    const { setColorsStorage , setSavedColorsStorage, colorsStorage, colors, savedColorsStorage } = useContext(ColorsContext)




    // ////////////////////////////////////////////////////// //

    
    const handleSaveColors = useCallback(() => {
        setColorsStorage((prev: any) => {
            const colorsArray = [...prev, colors]
            const emptyColors = colorsArray.filter((color) => Object.values(color).some(val => val !== ''))
            const sameColor = emptyColors.filter((obj, index, self) => index === self.findIndex((t) => (JSON.stringify(t) === JSON.stringify(obj))))
            localStorage.setItem('colorsStorage', JSON.stringify(sameColor))
            return sameColor
        })

        setSavedColorsStorage(true)

    }, [colors, setColorsStorage, setSavedColorsStorage])



    useEffect(() => {
        if (!savedColorsStorage) {
            localStorage.setItem('colorsStorage', JSON.stringify(colorsStorage))
        }
        
    }, [savedColorsStorage, colorsStorage])
// ////////////////////////////////////////////////////////// //
    return (
        <>
            <button className={`save-button `} onClick={handleSaveColors}>Save</button>
        </>
    )

}

export default SaveColors