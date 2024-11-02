import React, { useState, useContext } from 'react'
import '@/components/ControllerBar/ExportCode/ExportCode.css'
import { ColorsContext } from '@/context/ColorsContext'
import ExportHexCode from './CodeColors/HexColor'
import ExportHslCode from './CodeColors/HslColor'
import ExportRgbCode from './CodeColors/RgbColor'
import ExportStorageColorsCode from './CodeColors/StorageColors'
import { SvgDark, SvgLight, SvgSystem } from '@/components/svg/icons'


type ShadesTypes = {
    schemeName?: string | any
    dark?: {} | any
    light?: {} | any
    openExport?: boolean | any
    activeRandomColor?: boolean | any
}



const ExportCode: React.FunctionComponent<ShadesTypes> = ({ schemeName }) => {

    const { switchToColorsStorage, setOpenExport, openExport, setColorType, colorType } = useContext(ColorsContext)
    const [code, setCode] = useState('all')

    const handleExportCode = (e: { target: { value: string } }) => {
        setCode(e?.target?.value);
    }
    const handleColorType = (e: { target: { value: string } }) => {
        setColorType(e?.target?.value);
    }

    return (
        <>
            {
                openExport ?
                    switchToColorsStorage ?
                        (
                            <div className='export-code'>
                                <button type='button' className='close' onClick={() => { setOpenExport(false) }}> <SvgClose /> </button>
                                <h1>The Color code ( CSS ) &#128512; </h1>
                                <div className='colorType'>
                                    <h4>CSS Color Type</h4>
                                    <label htmlFor="colorType-hex" className={`type-label hex ${colorType === 'hex' ? 'active' : ''}`} > HEX
                                        <input type="radio" id='colorType-hex' name='colorType' checked={colorType === 'hex'} value={'hex'} onChange={handleColorType} />
                                    </label>
                                    <label htmlFor="colorType-hsl" className={`type-label hsl ${colorType === 'hsl' ? 'active' : ''}`} > HSL
                                        <input type="radio" id='colorType-hsl' name='colorType' checked={colorType === 'hsl'} value={'hsl'} onChange={handleColorType} />
                                    </label>
                                    <label htmlFor="colorType-rgb" className={`type-label rgb ${colorType === 'rgb' ? 'active' : ''}`} > RGB
                                        <input type="radio" id='colorType-rgb' name='colorType' checked={colorType === 'rgb'} value={'rgb'} onChange={handleColorType} />
                                    </label>
                                </div>
                                <ExportStorageColorsCode colorType={colorType} />
                            </div>

                        ) : (

                            <div className='export-code'>
                                <button type='button' className='close' onClick={() => { setOpenExport(false) }}> <SvgClose /> </button>
                                <h3> {schemeName} &#128512; </h3>
                                { }
                                <h1>Theme ( {code?.toUpperCase()} )
                                    <div>
                                        {code === 'all' ? (<><SvgSystem />  <SvgLight />  <SvgDark /></>) : null}
                                        {code === 'auto' ? (<><SvgSystem /> <span>Only default System </span></>) : null}
                                        {code === 'light' ? (<><SvgLight /> <span>Only Light Mode</span></>) : null}
                                        {code === 'dark' ? (<><SvgDark /> <span>Only Dark Mode</span></>) : null}
                                    </div>
                                </h1>
                                <div className='colorType'>
                                    <h4>CSS Color Type</h4>
                                    <label htmlFor="colorType-hex" className={`type-label hex ${colorType === 'hex' ? 'active' : ''}`} > HEX
                                        <input type="radio" id='colorType-hex' name='colorType' checked={colorType === 'hex'} value={'hex'} onChange={handleColorType} />
                                    </label>
                                    <label htmlFor="colorType-hsl" className={`type-label hsl ${colorType === 'hsl' ? 'active' : ''}`} > HSL
                                        <input type="radio" id='colorType-hsl' name='colorType' checked={colorType === 'hsl'} value={'hsl'} onChange={handleColorType} />
                                    </label>
                                    <label htmlFor="colorType-rgb" className={`type-label rgb ${colorType === 'rgb' ? 'active' : ''}`} > RGB
                                        <input type="radio" id='colorType-rgb' name='colorType' checked={colorType === 'rgb'} value={'rgb'} onChange={handleColorType} />
                                    </label>
                                </div>

                                <div className='code-box'>
                                    <div className='code-setting'>
                                        <label htmlFor="code-auto" data-code={code === 'auto' ? 'active' : null}> Auto
                                            <input type="radio" id='code-auto' name='code' checked={code === 'auto'} value={'auto'} onChange={handleExportCode} />
                                        </label>
                                        <label htmlFor="code-light" data-code={code === 'light' ? 'active' : null}> light
                                            <input type="radio" id='code-light' name='code' checked={code === 'light'} value={'light'} onChange={handleExportCode} />
                                        </label>
                                        <label htmlFor="code-dark" data-code={code === 'dark' ? 'active' : null}> dark
                                            <input type="radio" id='code-dark' name='code' checked={code === 'dark'} value={'dark'} onChange={handleExportCode} />
                                        </label>
                                        <label htmlFor="code-all" data-code={code === 'all' ? 'active' : null}> All Theme
                                            <input type="radio" id='code-all' name='code' checked={code === 'all'} value={'all'} onChange={handleExportCode} />
                                        </label>
                                    </div>

                                    {colorType === 'hex' ? (<>
                                        <ExportHexCode code={code} />
                                    </>) : null}

                                    {colorType === 'hsl' ? (<>
                                        <ExportHslCode code={code} />
                                    </>) : null}

                                    {colorType === 'rgb' ? (<>
                                        <ExportRgbCode code={code} />
                                    </>) : null}

                                </div>
                            </div>
                        ) : null
            }
        </>

    )
}

export default ExportCode





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