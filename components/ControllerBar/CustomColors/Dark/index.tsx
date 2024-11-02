import { ColorsContext } from '@/context/ColorsContext'
import React, { useContext } from 'react'


type CustomDarkProps = {
    onChange: (e: { target: { name: string, value: string, parentNode: any } }) => void
    onClick: () => void
}

const CustomDark: React.FunctionComponent<CustomDarkProps> = ({ onChange, onClick }) => {

    const {  dark, darkHex,hslToHex, activeInputColor } = useContext(ColorsContext)
    const { primary_dark, secondary_dark, background_dark, accent_dark, text_dark, muted_dark } = dark
    const { primary_darkHex, secondary_darkHex, background_darkHex, accent_darkHex, text_darkHex, muted_darkHex } = darkHex




    return (
        <>
            <label className='muted' htmlFor="muted-id" onClick={onClick}>
                <input
                    type="color"
                    id='muted-id'
                    name='muted_darkHex'
                    value={activeInputColor ? muted_darkHex : hslToHex(muted_dark)}
                    onChange={onChange}
                />
                <p>Muted</p>
            </label>

            <label className='text' htmlFor="text-id" onClick={onClick}>
                <input
                    type="color"
                    id='text-id'
                    name='text_darkHex'
                    // value={text_darkHex}
                    value={activeInputColor ? text_darkHex : hslToHex(text_dark)}
                    onChange={onChange}
                />
                <p>Text</p>
            </label>

            <label className='background' htmlFor="background-id" onClick={onClick}>
                <input
                    type="color"
                    id='background-id'
                    name='background_darkHex'
                    value={activeInputColor ? background_darkHex : hslToHex(background_dark)}
                    onChange={onChange}
                />
                <p>Background</p>

            </label>

            <label className='accent' htmlFor="accent-id" onClick={onClick}>
                <input
                    type="color"
                    id='accent-id'
                    name='accent_darkHex'
                    value={activeInputColor ? accent_darkHex : hslToHex(accent_dark)}
                    onChange={onChange}
                />
                <p>Accent</p>
            </label>

            <label className='secondary' htmlFor="secondary-id" >
                <input
                    type="color"
                    id='secondary-id'
                    name='secondary_darkHex'
                    value={activeInputColor ? secondary_darkHex : hslToHex(secondary_dark)}
                    onChange={onChange}
                />
                <p>Secondary</p>
            </label>


            <label className='primary' htmlFor="primary-id" onClick={onClick}>
                <input
                    type="color"
                    id='primary-id'
                    name='primary_darkHex'
                    value={activeInputColor ? primary_darkHex : hslToHex(primary_dark)}
                    onChange={onChange}
                />
                <p>Primary</p>
            </label>
        </>
    )
}

export default CustomDark