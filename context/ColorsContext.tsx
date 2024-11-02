"use client"
import React, { createContext, useState, useEffect, useMemo, useContext } from 'react'
import {ThemeContext} from './ThemeContext'
///////////////////////////////////////////////////////////////// Types
type ColorsContext = {
    scheme?: string
    setScheme: React.Dispatch<React.SetStateAction<string>>

    openExport?: boolean
    setOpenExport: React.Dispatch<React.SetStateAction<boolean>>

    activeColor?: boolean
    setActiveColor: React.Dispatch<React.SetStateAction<boolean>>

    random?: {} | any
    setRandom: React.Dispatch<React.SetStateAction<{} | any>>
}
type ColorsProviderProps = {
    children?: React.ReactNode
}
////////////////////////////////////////////////////////////////////////////////// 

const getColorsStorage = () => {
    const colorsArray: any[] = []
    const prevColor: any = typeof window !== 'undefined' ? window?.localStorage.getItem('colorsStorage') : null
    return prevColor ? JSON.parse(prevColor) : colorsArray
    }







export const ColorsContext = createContext<ColorsContext | any>(null)   ///// Context

const ColorsProvider: React.FunctionComponent<ColorsProviderProps> = ({ children }) => {

    // const storedColors = useRef<any>(null)

    const all = (el: string | any): NodeListOf<any> => document.querySelectorAll(el);
    const elm = (el: string | any) => document.querySelector(el);
    
    const { mode } = useContext(ThemeContext)
    
    
    const [scheme, setScheme] = useState<string>('mix')
    const [openExport, setOpenExport] = useState(false)
    const [activeRandomColor, setActiveRandomColor] = useState(false)
    const [activeInputColor, setActiveInputColor] = useState(false)
    const [colorType, setColorType] = useState('random')
    const [colorsStorage, setColorsStorage] = useState<never[]>([])
    const [indexColor, setIndexColor] = useState(0)
    const [activeColorsStorage, setActiveColorsStorage] = useState(false)
    const [savedColorsStorage, setSavedColorsStorage] = useState(false)
    const [switchToColorsStorage, setSwitchToColorsStorage] = useState(false)
    const [defaultMode, setDefaultMode] = useState(false)
    const [openStoredColorsList, setOpenStoredColorsList] = useState(false)



    
    const [random, setRandom] = useState<React.SetStateAction<{} | any>>({
        hue_a: null,
        hue_b: null,
        hue_c: null,
        hue_d: null,
        max_a: null,
        max_b: null
    })
    
    const [colors, setColors] = useState({
        primaryStorage: ``,
        secondaryStorage: ``,
        backgroundStorage: ``,
        accentStorage: ``,
        textStorage: ``,
        mutedStorage: ``,
        modeStorage: '',
    })
    
    
    const [light, setLight] = useState({
        primary_light: `hsl(145, 46%, 55%)`,
        secondary_light: `hsl(50, 35%, 86%)`,
        background_light: `hsl(27, 43%, 96%)`,
        accent_light: `hsl(31, 76%, 55%)`,
        text_light: `hsl(146, 11%, 25%)`,
        muted_light: `hsl(60, 50%, 50%)`
    })
    const [dark, setDark] = useState({
        primary_dark: `hsl(145, 51%, 65%)`,
        secondary_dark: `hsl(47, 11%, 25%)`,
        background_dark: `hsl(30, 7%, 10%)`,
        accent_dark: `hsl(31, 86%, 55%)`,
        text_dark: `hsl(145, 92%, 95%)`,
        muted_dark: `hsl(60, 55%, 65%)`
    })
    const { primary_dark, secondary_dark, background_dark, accent_dark, text_dark, muted_dark } = dark
    const { primary_light, secondary_light, background_light, accent_light, text_light, muted_light } = light
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    const [darkHex, setDarkHex] = useState({
        primary_darkHex: ``,
        secondary_darkHex: ``,
        background_darkHex: ``,
        accent_darkHex: ``,
        text_darkHex: ``,
        muted_darkHex: ``
    })
    const [lightHex, setLightHex] = useState({
        primary_lightHex: ``,
        secondary_lightHex: ``,
        background_lightHex: ``,
        accent_lightHex: ``,
        text_lightHex: ``,
        muted_lightHex: ``
    })
    const {primary_lightHex , secondary_lightHex , background_lightHex , accent_lightHex , text_lightHex  , muted_lightHex } = lightHex
    const {primary_darkHex , secondary_darkHex , background_darkHex , accent_darkHex , text_darkHex  , muted_darkHex } = darkHex
    const { primaryStorage} = colors

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    const [lightHsl, setLightHsl] = useState({
        primary_lightHsl: ``,
        secondary_lightHsl: ``,
        background_lightHsl: ``,
        accent_lightHsl: ``,
        text_lightHsl: ``,
        muted_lightHsl: ``
    })
    const [darkHsl, setDarkHsl] = useState({
        primary_darkHsl: ``,
        secondary_darkHsl: ``,
        background_darkHsl: ``,
        accent_darkHsl: ``,
        text_darkHsl: ``,
        muted_darkHsl: ``
    })


    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [lightRgb, setLightRgb] = useState({
        primary_lightRgb: ``,
        secondary_lightRgb: ``,
        background_lightRgb: ``,
        accent_lightRgb: ``,
        text_lightRgb: ``,
        muted_lightRgb: ``,
    })
    const [darkRgb, setDarkRgb] = useState({
        primary_darkRgb: ``,
        secondary_darkRgb: ``,
        background_darkRgb: ``,
        accent_darkRgb: ``,
        text_darkRgb: ``,
        muted_darkRgb: ``
    })

    // ////////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////////
useEffect(() => {
    setIndexColor(colorsStorage?.length ? colorsStorage?.length - 1 : 0 )
    setColorsStorage(getColorsStorage)
}, [colorsStorage?.length])




useEffect(() => {
    if (colorType === 'random') {
        setDarkHex({
            primary_darkHex: hslToHex(primary_dark),
            secondary_darkHex: hslToHex(secondary_dark),
            accent_darkHex: hslToHex(accent_dark),
            background_darkHex: hslToHex(background_dark),
            text_darkHex: hslToHex(text_dark),
            muted_darkHex: hslToHex(muted_dark),
        })

        setLightHex({
            primary_lightHex: hslToHex(primary_light),
            secondary_lightHex: hslToHex(secondary_light),
            accent_lightHex: hslToHex(accent_light),
            background_lightHex: hslToHex(background_light),
            text_lightHex: hslToHex(text_light),
            muted_lightHex: hslToHex(muted_light),
        })
    }
    
}, [accent_dark, accent_light, background_dark, background_light, colorType, muted_dark, muted_light, primary_dark, primary_light, secondary_dark, secondary_light, text_dark, text_light])



useEffect(() => {
        if (!activeColorsStorage) {
            if(scheme === 'mix' || scheme === 'shades') {
            if (mode === 'light') {
                    setColors({
                        primaryStorage: primary_lightHex,
                        secondaryStorage: secondary_lightHex,
                            backgroundStorage: background_lightHex,
                            accentStorage: accent_lightHex,
                            textStorage: text_lightHex,
                            mutedStorage: muted_lightHex,
                            modeStorage: mode,
                        })
                    }
                
                if (mode === 'dark') {
                        setColors({
                            primaryStorage: primary_darkHex,
                            secondaryStorage: secondary_darkHex,
                            backgroundStorage: background_darkHex,
                            accentStorage: accent_darkHex,
                            textStorage: text_darkHex,
                            mutedStorage: muted_darkHex,
                            modeStorage: mode,
                        })
                    }
                
                if (mode === 'auto' && window.matchMedia('(prefers-color-scheme: light)').matches) {
                        setColors({
                            primaryStorage: primary_lightHex,
                            secondaryStorage: secondary_lightHex,
                            backgroundStorage: background_lightHex,
                            accentStorage: accent_lightHex,
                            textStorage: text_lightHex,
                            mutedStorage: muted_lightHex,
                            modeStorage: mode,
                        })
                    }

                if (mode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    setColors({
                        primaryStorage: primary_darkHex,
                        secondaryStorage: secondary_darkHex,
                        backgroundStorage: background_darkHex,
                        accentStorage: accent_darkHex,
                        textStorage: text_darkHex,
                        mutedStorage: muted_darkHex,
                        modeStorage: mode,
                    })
                }

            }
        }
} ,[accent_darkHex, accent_lightHex, activeColorsStorage, background_darkHex, background_lightHex, colorType, mode, muted_darkHex, muted_lightHex, primary_darkHex, primary_lightHex, scheme, secondary_darkHex, secondary_lightHex, text_darkHex, text_lightHex])



useEffect(() => {
    if (colorType === 'hsl') {
        setLightHsl({
            primary_lightHsl: hexToHSL(primary_lightHex),
            secondary_lightHsl: hexToHSL(secondary_lightHex),
            background_lightHsl: hexToHSL(background_lightHex),
            accent_lightHsl: hexToHSL(accent_lightHex),
            text_lightHsl: hexToHSL(text_lightHex),
            muted_lightHsl: hexToHSL(muted_lightHex),
        })
        setDarkHsl({
            primary_darkHsl: hexToHSL(primary_darkHex),
            secondary_darkHsl: hexToHSL(secondary_darkHex),
            background_darkHsl: hexToHSL(background_darkHex),
            accent_darkHsl: hexToHSL(accent_darkHex),
            text_darkHsl: hexToHSL(text_darkHex),
            muted_darkHsl: hexToHSL(muted_darkHex),
        })
    }
}, [accent_darkHex, accent_lightHex, activeRandomColor, background_darkHex, background_lightHex, colorType, muted_darkHex, muted_lightHex, primary_darkHex, primary_lightHex, secondary_darkHex, secondary_lightHex, text_darkHex, text_lightHex])



useEffect(() => {
    if (colorType === 'rgb') {
        setLightRgb({
            primary_lightRgb: hexToRGB(primary_lightHex),
            secondary_lightRgb: hexToRGB(secondary_lightHex),
            background_lightRgb: hexToRGB(background_lightHex),
            accent_lightRgb: hexToRGB(accent_lightHex),
            text_lightRgb: hexToRGB(text_lightHex),
            muted_lightRgb: hexToRGB(muted_lightHex),
        })
        setDarkRgb({
            primary_darkRgb: hexToRGB(primary_darkHex),
            secondary_darkRgb: hexToRGB(secondary_darkHex),
            background_darkRgb: hexToRGB(background_darkHex),
            accent_darkRgb: hexToRGB(accent_darkHex),
            text_darkRgb: hexToRGB(text_darkHex),
            muted_darkRgb: hexToRGB(muted_darkHex),
        })
    }

}, [accent_darkHex, accent_lightHex, background_darkHex, background_lightHex, colorType, muted_darkHex, muted_lightHex, primary_darkHex, primary_lightHex, secondary_darkHex, secondary_lightHex, text_darkHex, text_lightHex])


useEffect(() => {
    console.log('activeInputColor', activeInputColor);
    console.log('scheme', scheme);
    console.log('mode', mode);
    console.log('switchToColorsStorage', switchToColorsStorage);
    console.log('colorType', colorType);
    console.log('activeRandomColor', activeRandomColor);
    console.log('activeColorsStorage', activeColorsStorage);
    console.log('savedColorsStorage', savedColorsStorage);
    console.log('primary_lightHex', primary_lightHex);
    console.log('primary_darkHex', primary_darkHex);
    console.log('primaryStorage', primaryStorage);
    console.log('hslToHex(primary_light)' , hslToHex(primary_light));
    console.log('hslToHex(primary_dark)' , hslToHex(primary_dark));

} , [activeColorsStorage, activeInputColor, activeRandomColor, colorType, mode, primaryStorage, primary_dark, primary_darkHex, primary_light, primary_lightHex, savedColorsStorage, scheme, switchToColorsStorage])


// //////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////

const handleControlColors = useMemo(() => ({
    hslToHex,
    hexToHSL,
    hexToRGB,
    all,
    elm,

        activeInputColor, setActiveInputColor,

        colorType, setColorType,

        light, setLight,
        dark, setDark,

        lightHex, setLightHex,
        darkHex, setDarkHex,

        lightHsl, setLightHsl,
        darkHsl, setDarkHsl,

        lightRgb, setLightRgb,
        darkRgb, setDarkRgb,

        scheme, setScheme,

        openExport, setOpenExport,
        activeRandomColor,setActiveRandomColor,

        random, setRandom,

        defaultMode, setDefaultMode,

        colorsStorage, setColorsStorage,
        colors, setColors,

        savedColorsStorage, setSavedColorsStorage,
        indexColor, setIndexColor,

        activeColorsStorage, setActiveColorsStorage,
        switchToColorsStorage, setSwitchToColorsStorage,
        openStoredColorsList, setOpenStoredColorsList,
    }), [activeColorsStorage, activeInputColor, activeRandomColor, colorType, colors, colorsStorage, dark, darkHex, darkHsl, darkRgb, defaultMode, indexColor, light, lightHex, lightHsl, lightRgb, openExport, openStoredColorsList, random, savedColorsStorage, scheme, switchToColorsStorage])

    return (
        <ColorsContext.Provider value={{ ...handleControlColors }}>
            {children}
        </ColorsContext.Provider>
    )

}

export default ColorsProvider







// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////





function hexToHSL(hex: string): string {
    // Remove the '#' character if present
    const cleanedHex = hex.replace('#', '');

    // Convert the cleaned hex value to RGB
    const red = parseInt(cleanedHex.substr(0, 2), 16) / 255;
    const green = parseInt(cleanedHex.substr(2, 2), 16) / 255;
    const blue = parseInt(cleanedHex.substr(4, 2), 16) / 255;

    // Find the maximum and minimum values of RGB
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);

    // Calculate the hue
    let hue = 0;
    if (max === min) {
        hue = 0;
    } else if (max === red) {
        hue = ((green - blue) / (max - min)) % 6;
    } else if (max === green) {
        hue = (blue - red) / (max - min) + 2;
    } else {
        hue = (red - green) / (max - min) + 4;
    }
    hue = Math.round(hue * 60);

    // Calculate the lightness
    const lightness = (max + min) / 2;

    // Calculate the saturation
    let saturation = 0;
    if (max !== min) {
        saturation = lightness > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
    }
    saturation = Math.round(saturation * 100);

    // console.log(hue);
    // Return the HSL value as a string
    // let hueE = hue < 0 ? hue.toString().split('').slice(1)?.join('') : hue;
    let hueE = hue < 0 ? hue.toString().replace('-' , '') : hue;
    // console.log(hueE);
    
    return `hsl(${hueE}, ${saturation}%, ${Math.round(lightness * 100)}%)`;
}


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function hexToRGB(hex: string): string {
    // Remove the '#' character if present
    const cleanedHex = hex.replace('#', '');

    // Parse the hexadecimal values for red, green, and blue
    const red = parseInt(cleanedHex.substr(0, 2), 16);
    const green = parseInt(cleanedHex.substr(2, 2), 16);
    const blue = parseInt(cleanedHex.substr(4, 2), 16);

    // Return the RGB value as a string
    return `rgb(${red}, ${green}, ${blue})`;
}


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function hslToHex(hsl: string): string {
    // Remove the 'hsl(' and ')' characters and split the values
    const values = hsl.replace('hsl(', '').replace(')', '').split(',');

    // Extract the HSL values
    const hue = parseInt(values[0].trim(), 10);
    const saturation = parseInt(values[1]?.trim(), 10);
    const lightness = parseInt(values[2]?.trim(), 10);

    // Normalize hue value to [0, 360)
    const normalizedHue = ((hue % 360) + 360) % 360;

    // Normalize saturation and lightness values to [0, 1]
    const normalizedSaturation = Math.max(0, Math.min(100, saturation)) / 100;
    const normalizedLightness = Math.max(0, Math.min(100, lightness)) / 100;

    // Calculate RGB values
    const c = (1 - Math.abs(2 * normalizedLightness - 1)) * normalizedSaturation;
    const x = c * (1 - Math.abs(((normalizedHue / 60) % 2) - 1));
    const m = normalizedLightness - c / 2;

    let red = 0,
        green = 0,
        blue = 0;

    if (normalizedHue >= 0 && normalizedHue < 60) {
        red = c;
        green = x;
    } else if (normalizedHue >= 60 && normalizedHue < 120) {
        red = x;
        green = c;
    } else if (normalizedHue >= 120 && normalizedHue < 180) {
        green = c;
        blue = x;
    } else if (normalizedHue >= 180 && normalizedHue < 240) {
        green = x;
        blue = c;
    } else if (normalizedHue >= 240 && normalizedHue < 300) {
        red = x;
        blue = c;
    } else if (normalizedHue >= 300 && normalizedHue < 360) {
        red = c;
        blue = x;
    }

    // Convert RGB values to [0, 255] range
    const normalizedRed = Math.round((red + m) * 255);
    const normalizedGreen = Math.round((green + m) * 255);
    const normalizedBlue = Math.round((blue + m) * 255);

    // Convert RGB values to hexadecimal string
    const hexRed = normalizedRed.toString(16).padStart(2, '0');
    const hexGreen = normalizedGreen.toString(16).padStart(2, '0');
    const hexBlue = normalizedBlue.toString(16).padStart(2, '0');

    // Return the hexadecimal color value
    return `#${hexRed}${hexGreen}${hexBlue}`;
}



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// useEffect( () => {
//     const script = document.createElement("script");
  
//     script.src = "/js/homepage.js";
//     script.async = true;
  
//     document.body.appendChild(script);
    
//     })