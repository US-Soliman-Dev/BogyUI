import React, { useCallback, useContext, useEffect } from 'react'
import '../colorsStorage.css'
import { ColorsContext } from '@/context/ColorsContext'


const UndoColor = () => {


    const {
        setColorType,
        colorsStorage,
        indexColor,
        setIndexColor,
        setSavedColorsStorage,
        setActiveInputColor,
        setOpenExport,
    } = useContext(ColorsContext)





    const handleUndoColor = useCallback(() => {
        setIndexColor((prev: number) => indexColor === 0 ? 0 : prev - 1)
        setSavedColorsStorage(true)
        setActiveInputColor(false)
        setColorType('random')
        setOpenExport(false)
    }, [indexColor, setActiveInputColor, setColorType, setIndexColor, setOpenExport, setSavedColorsStorage])



    useEffect(() => {
        colorsStorage.length ? document.querySelector('.storage-button.undo')?.classList.remove('active') : document.querySelector('.storage-button.undo')?.classList.add('active');
    }, [colorsStorage.length]);

    return (
        <>
            <button type='button' className={`storage-button undo active`} onClick={handleUndoColor}><SvgArrowBack /></button>
        </>
    )
}

export default UndoColor





// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// svg icons
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// svg icons


interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
}

export const SvgArrowBack: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} >
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M9 14l-4 -4l4 -4" fill="transparent" />
                <path d="M5 10h11a4 4 0 1 1 0 8h-1" fill="transparent" />
            </svg>
        );
    }
);

