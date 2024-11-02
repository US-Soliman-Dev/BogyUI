import React, { useState, useContext, useEffect } from 'react'
import '@/components/ControllerBar/ExportCode/ExportCode.css'
import { ColorsContext } from '@/context/ColorsContext'
import { ThemeContext } from '@/context/ThemeContext'


type ExportRgbCodeProps = {
    schemeName?: string | any
    dark?: {} | any
    light?: {} | any
    colorType?: string | any
    openExport?: boolean | any
    activeRandomColor?: boolean | any
}



const ExportStorageColorsCode: React.FunctionComponent<ExportRgbCodeProps> = ({ colorType }) => {
    const { colors, hexToHSL, hexToRGB, darkRgb, lightRgb, lightHsl, darkHsl } = useContext(ColorsContext)
    const { primaryStorage, secondaryStorage, backgroundStorage, accentStorage, textStorage, mutedStorage, modeStorage } = colors

    const { primary_darkRgb, secondary_darkRgb, background_darkRgb, accent_darkRgb, text_darkRgb, muted_darkRgb } = darkRgb
    const { primary_lightRgb, secondary_lightRgb, background_lightRgb, accent_lightRgb, text_lightRgb, muted_lightRgb } = lightRgb
    const { mode, setMode } = useContext(ThemeContext)



    return (
        <>
            {colorType === 'hex' && <pre className=''>
                <code>
                    <h3>{`:root {`}</h3>
                    <p>{`  --primary: ${primaryStorage};`}</p>
                    <p>{`  --secondary: ${secondaryStorage};`}</p>
                    <p>{`  --background: ${backgroundStorage};`}</p>
                    <p>{`  --accent: ${accentStorage};`}</p>
                    <p>{`  --text: ${textStorage};`}</p>
                    <p>{`  --muted: ${mutedStorage};`}</p>
                    <h3>{`}`}</h3>
                </code>
            </pre>
            }

            {
                colorType === 'rgb' && <pre className='code'>
                    <code>
                        <h3>{`:root {`}</h3>
                        <p>{`  --primary: ${hexToRGB(primaryStorage)};`}</p>
                        <p>{`  --secondary: ${hexToRGB(secondaryStorage)};`}</p>
                        <p>{`  --background: ${hexToRGB(backgroundStorage)};`}</p>
                        <p>{`  --accent: ${hexToRGB(accentStorage)};`}</p>
                        <p>{`  --text: ${hexToRGB(textStorage)};`}</p>
                        <p>{`  --muted: ${hexToRGB(mutedStorage)};`}</p>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            }
            {
                colorType === 'hsl' && <pre className='code'>
                    <code>
                        <h3>{`:root {`}</h3>
                        <p>{`  --primary: ${hexToHSL(primaryStorage)};`}</p>
                        <p>{`  --secondary: ${hexToHSL(secondaryStorage)};`}</p>
                        <p>{`  --background: ${hexToHSL(backgroundStorage)};`}</p>
                        <p>{`  --accent: ${hexToHSL(accentStorage)};`}</p>
                        <p>{`  --text: ${hexToHSL(textStorage)};`}</p>
                        <p>{`  --muted: ${hexToHSL(mutedStorage)};`}</p>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            }
        </>

    )
}

export default ExportStorageColorsCode