import React , { useContext } from 'react'
import {ColorsContext} from '@/context/ColorsContext'



type CustomLightProps = {
    onChange: (e: { target: { name: string, value: string, parentNode: any } }) => void
    onClick: () => void
}


const CustomColorStorage : React.FunctionComponent<CustomLightProps> = ({ onChange, onClick }) => {

    const { colorsStorage, colors, indexColor, activeInputColor } = useContext(ColorsContext)
    const { primaryStorage, secondaryStorage, backgroundStorage, accentStorage, textStorage, mutedStorage } = colors


    return (
        <>
            <label className='muted' htmlFor="muted-id" onClick={onClick}>
                <input
                    type="color"
                    id='muted-id'
                    name={'mutedStorage'}
                    value={activeInputColor ? mutedStorage : colorsStorage[indexColor]?.mutedStorage}
                    onChange={onChange}
                />
                <p>Muted</p>
            </label>

            <label className='text' htmlFor="text-id" onClick={onClick}>
                <input
                    type="color"
                    id='text-id'
                    name='textStorage'
                    value={activeInputColor ? textStorage : colorsStorage[indexColor]?.textStorage}
                    onChange={onChange}
                />
                <p>Text</p>
            </label>

            <label className='background' htmlFor="background-id" onClick={onClick}>
                <input
                    type="color"
                    id='background-id'
                    name='backgroundStorage'
                    value={activeInputColor ? backgroundStorage : colorsStorage[indexColor]?.backgroundStorage}
                    onChange={onChange}
                />
                <p>Background</p>
            </label>

            <label className='accent' htmlFor="accent-id" onClick={onClick}>
                <input
                    type="color"
                    id='accent-id'
                    name='accentStorage'
                    value={activeInputColor ? accentStorage : colorsStorage[indexColor]?.accentStorage}
                    onChange={onChange}
                />
                <p>Accent</p>
            </label>

            <label className='secondary' htmlFor="secondary-id" onClick={onClick}>
                <input
                    type="color"
                    id='secondary-id'
                    name='secondaryStorage'
                    value={activeInputColor ? secondaryStorage : colorsStorage[indexColor]?.secondaryStorage}
                    onChange={onChange}
                />
                <p>Secondary</p>
            </label>

            <label className='primary' htmlFor="primary-id" onClick={onClick}>
                <input
                    type="color"
                    id='primary-id'
                    name='primaryStorage'
                    value={activeInputColor ? primaryStorage : colorsStorage[indexColor]?.primaryStorage}
                    onChange={onChange}
                />
                <p>Primary</p>
            </label>
        </>
    )
}

export default CustomColorStorage