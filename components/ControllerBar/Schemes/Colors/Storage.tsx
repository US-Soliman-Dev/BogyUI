import React, { useEffect, useContext } from 'react'
import ExportCode from '../../ExportCode';
import { ColorsContext } from '@/context/ColorsContext';
import { ThemeContext } from '@/context/ThemeContext';





const Storage = () => {

    const {
        darkHex,
        lightHex,
        colors,
        colorType,
        colorsStorage,
        indexColor,
        setDefaultMode,
        activeColorsStorage,
        setActiveColorsStorage,
        setColors,
        setSwitchToColorsStorage,
    } = useContext(ColorsContext)

    const { mode, setMode } = useContext(ThemeContext)

    const { primaryStorage, secondaryStorage, backgroundStorage, accentStorage, textStorage, mutedStorage, modeStorage } = colors
    const { primary_darkHex, secondary_darkHex, background_darkHex, accent_darkHex, text_darkHex, muted_darkHex } = darkHex
    const { primary_lightHex, secondary_lightHex, background_lightHex, accent_lightHex, text_lightHex, muted_lightHex } = lightHex



    useEffect(() => {
        setDefaultMode(true)
        setActiveColorsStorage(true)
        setSwitchToColorsStorage(true)
        colorsStorage.length ? document.querySelector('.storage-button.undo')?.classList.remove('active') : document.querySelector('.storage-button.undo')?.classList.add('active');

        if (colorsStorage.length === 0) {

            document.documentElement.style.setProperty('--primary', `${primary_lightHex}`)
            document.documentElement.style.setProperty('--accent', `${accent_lightHex}`)
            document.documentElement.style.setProperty('--secondary', `${secondary_lightHex}`)
            document.documentElement.style.setProperty('--background', `${background_lightHex}`)
            document.documentElement.style.setProperty('--text', `${text_lightHex}`)
            document.documentElement.style.setProperty('--muted', `${muted_lightHex}`)

            document.documentElement.style.setProperty('--system-primary', `${primary_darkHex}`)
            document.documentElement.style.setProperty('--system-accent', `${accent_darkHex}`)
            document.documentElement.style.setProperty('--system-secondary', `${secondary_darkHex}`)
            document.documentElement.style.setProperty('--system-background', `${background_darkHex}`)
            document.documentElement.style.setProperty('--system-text', `${text_darkHex}`)
            document.documentElement.style.setProperty('--system-muted', `${muted_darkHex}`)
        

            if (mode === 'dark') {
                document.documentElement.style.setProperty('--primary', `var(--system-primary)`)
                document.documentElement.style.setProperty('--accent', `var(--system-accent)`)
                document.documentElement.style.setProperty('--secondary', `var(--system-secondary)`)
                document.documentElement.style.setProperty('--background', `var(--system-background)`)
                document.documentElement.style.setProperty('--text', `var(--system-text)`)
                document.documentElement.style.setProperty('--muted', `var(--system-muted)`)
            }
        
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                if (mode === 'light') {
                    document.documentElement.style.setProperty('--primary', `${primary_lightHex}`)
                    document.documentElement.style.setProperty('--accent', `${accent_lightHex}`)
                    document.documentElement.style.setProperty('--secondary', `${secondary_lightHex}`)
                    document.documentElement.style.setProperty('--background', `${background_lightHex}`)
                    document.documentElement.style.setProperty('--text', `${text_lightHex}`)
                    document.documentElement.style.setProperty('--muted', `${muted_lightHex}`)
                }
            }
        }

        if (colorsStorage.length === 0) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                if (mode === 'auto') {
                    document.documentElement.style.setProperty('--primary', `var(--system-primary)`)
                    document.documentElement.style.setProperty('--accent', `var(--system-accent)`)
                    document.documentElement.style.setProperty('--secondary', `var(--system-secondary)`)
                    document.documentElement.style.setProperty('--background', `var(--system-background)`)
                    document.documentElement.style.setProperty('--text', `var(--system-text)`)
                    document.documentElement.style.setProperty('--muted', `var(--system-muted)`)
                }
            }
        }

        // console.log(' undo', modeStorage);
    }, [accent_darkHex, accent_lightHex, background_darkHex, background_lightHex, colorsStorage.length, mode, muted_darkHex, muted_lightHex, primary_darkHex, primary_lightHex, secondary_darkHex, secondary_lightHex, setActiveColorsStorage, setDefaultMode, setSwitchToColorsStorage, text_darkHex, text_lightHex]);


    //// تخزين اللون الجديد فى استيت الالوان
    useEffect(() => {
        if (colorType === 'random' && colorsStorage.length >= 1) {
            setColors({
                primaryStorage: colorsStorage[indexColor]?.primaryStorage,
                secondaryStorage: colorsStorage[indexColor]?.secondaryStorage,
                backgroundStorage: colorsStorage[indexColor]?.backgroundStorage,
                accentStorage: colorsStorage[indexColor]?.accentStorage,
                textStorage: colorsStorage[indexColor]?.textStorage,
                mutedStorage: colorsStorage[indexColor]?.mutedStorage,
                modeStorage: colorsStorage[indexColor]?.modeStorage
            })
        }

        if (activeColorsStorage && colorsStorage.length >= 1) {
            document.documentElement.style.setProperty('--primary', `${primaryStorage}`)
            document.documentElement.style.setProperty('--accent', `${accentStorage}`)
            document.documentElement.style.setProperty('--secondary', `${secondaryStorage}`)
            document.documentElement.style.setProperty('--background', `${backgroundStorage}`)
            document.documentElement.style.setProperty('--text', `${textStorage}`)
            document.documentElement.style.setProperty('--muted', `${mutedStorage}`)
            // document.documentElement.dataset.theme = `${modeStorage}`
            setMode(modeStorage)
        }
    }, [accentStorage, activeColorsStorage, backgroundStorage, colorType, colorsStorage, indexColor, modeStorage, mutedStorage, primaryStorage, secondaryStorage, setColors, setMode, textStorage])




    return (
        <>
            <ExportCode schemeName={'Storage'} />
        </>
    )
}

export default Storage