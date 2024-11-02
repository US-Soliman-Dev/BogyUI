import React, { useCallback, useContext, useEffect} from 'react'
import { ColorsContext } from '@/context/ColorsContext'
import './storedColorsList.css'









const StoredColorsList = () => {




    const { openStoredColorsList, setOpenStoredColorsList, setIndexColor, setActiveColorsStorage, setColorsStorage, activeColorsStorage, colorsStorage, indexColor,  setColorType,  setActiveInputColor,  setOpenExport } = useContext(ColorsContext)




    // ////////////////////////////////////////////////////// //

    const handleOpenStoredColorsList = useCallback(() => {
        setOpenExport(false)
        setOpenStoredColorsList((prev: boolean) => !prev)
    }, [setOpenExport, setOpenStoredColorsList])

    const handleStoredColorsList = useCallback((index: number) => {
        setIndexColor(index)
        setActiveColorsStorage(true)
        setActiveInputColor(false)
        setColorType('random')
    }, [setActiveColorsStorage, setActiveInputColor, setColorType, setIndexColor])


    const deleteColor = useCallback((index: number) => {
        const unDeletedColors = [...colorsStorage]?.filter((color: any) => color !== colorsStorage[index])
        localStorage.setItem('colorsStorage', JSON.stringify(unDeletedColors))
        setColorsStorage(unDeletedColors);
    }, [colorsStorage, setColorsStorage])


    useEffect(() => {
        if (localStorage.getItem('colorsStorage') !== '') {
            const localStorageColors: never[] = JSON.parse(localStorage.getItem('colorsStorage') as string)
            localStorageColors.length > 0 ? setOpenStoredColorsList(true) : setOpenStoredColorsList(false)
        }
    }, [colorsStorage, setOpenStoredColorsList])
    // ////////////////////////////////////////////////////////// //
    return (
        <>
            <button className={`storedColorsList-button ${openStoredColorsList ? 'active' : ''}`} onClick={handleOpenStoredColorsList}>Colors</button>

            {
                openStoredColorsList ?
                    <aside className={`storedColorsList-container ${activeColorsStorage ? 'active' : ''}`}>
                        <button type='button' className='storedColorsList-colse-button' onClick={() => setOpenStoredColorsList(false)}><SvgClose /></button>
                        <h3 className='title'>All Stored Colors</h3>
                        <div className='colors-field'>
                            {
                                [...colorsStorage]?.map((color: any, index: number) => (
                                    <>
                                        <div className={`colors-box ${index === indexColor ? 'active' : ''}`}>
                                            <h6 className='colors-header' 
                                            // style={{ backgroundColor: color.backgroundStorage }}
                                            >{index + 1}</h6>
                                            <button type='button' className='delete-color' onClick={() => deleteColor(indexColor)}><SvgClose /></button>
                                            <div className={`colors`}
                                                style={{ backgroundColor: color.backgroundStorage }}
                                                key={index}
                                                onClick={() => handleStoredColorsList(index)}>
                                                <span className={`color`} style={{ backgroundColor: color.primaryStorage }}></span>
                                                <span className={`color`} style={{ backgroundColor: color.mutedStorage }}></span>
                                                <span className={`color`} style={{ backgroundColor: color.accentStorage }}></span>
                                                <span className={`color`} style={{ backgroundColor: color.secondaryStorage }}></span>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>

                    </aside> : null
            }
        </>
    )

}

export default StoredColorsList









export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
}

export const SvgClose: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke={color} width={24} height={24} {...props} >
                <path d="M18 6l-12 12" fill="transparent" />
                <path d="M6 6l12 12" fill="transparent" />
            </svg>
        );
    }
);