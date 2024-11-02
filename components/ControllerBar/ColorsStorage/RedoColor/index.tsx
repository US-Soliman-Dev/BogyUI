import React, { useCallback, useContext, useEffect} from 'react'
import '../colorsStorage.css'
import { ColorsContext } from '@/context/ColorsContext'
import { ThemeContext } from '@/context/ThemeContext'


// const parsedColors = typeof window !== 'undefined' ? window?.localStorage.getItem('colorsStorage') : null;

const RedoColor = () => {

    const {
        setColorType,
        colorsStorage,
        indexColor,
        setIndexColor,
        setSavedColorsStorage,
        setActiveInputColor,
        setOpenExport
    } = useContext(ColorsContext)

    const { mode } = useContext(ThemeContext)


    const handleRedoColor = useCallback(() => {
        setIndexColor((prev: number) => indexColor === colorsStorage.length - 1 ? colorsStorage.length - 1 : prev + 1)
        setSavedColorsStorage(true)
        setActiveInputColor(false)
        setColorType('random')
        setOpenExport(false)
    }, [colorsStorage.length, indexColor, setActiveInputColor, setColorType, setIndexColor, setOpenExport, setSavedColorsStorage])



    useEffect(() => {
        colorsStorage.length ? document.querySelector('.storage-button.redo')?.classList.remove('active') : document.querySelector('.storage-button.redo')?.classList.add('active');
    }, [colorsStorage.length, indexColor, mode, setIndexColor]);


    return (
        <>
            <button type='button' className={`storage-button redo active `} onClick={handleRedoColor}><SvgArrowForward /></button>
        </>
    )
}

export default RedoColor




// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// svg icons
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// svg icons

interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
}

export const SvgArrowForward: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M15 14l4 -4l-4 -4" fill="transparent"/>
                <path d="M19 10h-11a4 4 0 1 0 0 8h1" fill="transparent"/>
            </svg>
        );
    }
);