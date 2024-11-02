import {ColorsContext} from '@/context/ColorsContext'
import React, { useContext } from 'react'


type CustomLightProps = {
    onChange: (e: { target: { name: string, value: string, parentNode: any } }) => void
    onClick: () => void
}

const CustomLight : React.FunctionComponent<CustomLightProps> = ({ onChange, onClick }) => {

    const { light, lightHex, hslToHex, activeInputColor,   } = useContext(ColorsContext)
    const { primary_light, secondary_light, background_light, accent_light, text_light, muted_light } = light
    const { primary_lightHex, secondary_lightHex, background_lightHex, accent_lightHex, text_lightHex, muted_lightHex } = lightHex




    return (
        <>
            <label className='muted' htmlFor="muted-id" onClick={onClick}>
                <input
                    type="color"
                    id='muted-id'
                    name='muted_lightHex'
                    value={activeInputColor ? muted_lightHex : hslToHex(muted_light)}
                    onChange={onChange}
                />
                <p>Muted</p>
            </label>

            <label className='text' htmlFor="text-id" onClick={onClick}>
                <input
                    type="color"
                    id='text-id'
                    name='text_lightHex'
                    value={activeInputColor ? text_lightHex : hslToHex(text_light)}
                    onChange={onChange}
                />
                <p>Text</p>
            </label>

            <label className='background' htmlFor="background-id" onClick={onClick}>
                <input
                    type="color"
                    id='background-id'
                    name='background_lightHex'
                    value={activeInputColor ? background_lightHex : hslToHex(background_light)}
                    onChange={onChange}
                />
                <p>Background</p>
            </label>


            <label className='accent' htmlFor="accent-id" onClick={onClick}>
                <input
                    type="color"
                    id='accent-id'
                    name='accent_lightHex'
                    value={activeInputColor ? accent_lightHex : hslToHex(accent_light)}
                    onChange={onChange}
                />
                <p>Accent</p>
            </label>

            <label className='secondary' htmlFor="secondary-id" onClick={onClick}>
                <input
                    type="color"
                    id='secondary-id'
                    name='secondary_lightHex'
                    value={activeInputColor ? secondary_lightHex : hslToHex(secondary_light)}
                    onChange={onChange}
                />
                <p>Secondary</p>
            </label>

            <label className='primary' htmlFor="primary-id" onClick={onClick}>
                <input
                    type="color"
                    id='primary-id'
                    name='primary_lightHex'
                    value={activeInputColor ? primary_lightHex : hslToHex(primary_light)}
                    onChange={onChange}
                />
                <p>Primary</p>
            </label>
        </>
    )
}

export default CustomLight