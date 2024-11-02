import React, { useEffect, useContext } from 'react'
import ExportCode from '../../ExportCode';
import { ColorsContext } from '@/context/ColorsContext';
import { ThemeContext } from '@/context/ThemeContext';

type ShadesTypes = {
  random?: () => number;
  colorValue?: {} | any
  code?: string | any
  theme?: string | any
  openExport?: boolean | any
  activeRandomColor?: boolean | any
}



const MixColors: React.FunctionComponent<ShadesTypes> = () => {

  const { mode, setMode } = useContext(ThemeContext)
  const { defaultMode ,setColorType , setSwitchToColorsStorage, activeRandomColor, setLight, setDark, colorType, darkHex, lightHex, random } = useContext(ColorsContext)

  const { primary_darkHex, secondary_darkHex, background_darkHex, accent_darkHex, text_darkHex, muted_darkHex } = darkHex
  const { primary_lightHex, secondary_lightHex, background_lightHex, accent_lightHex, text_lightHex, muted_lightHex } = lightHex
  const { hue_a, hue_b, hue_c, hue_d, max_a, max_b } = random


  useEffect(() => {
    // const hue_a    saturation,   lightness
    if (activeRandomColor && colorType === 'random') {
      setLight({
        primary_light: `hsl(${hue_a}, 4${max_a >= 5 ? max_a : max_a + 5}%, 5${max_b <= 5 ? max_b : max_b - 5}%)`,
        secondary_light: `hsl(${hue_c}, 3${max_b >= 5 ? max_b : max_b + 5}%, 8${max_a >= 5 ? max_a : max_a + 5}%)`,
        background_light: `hsl(${hue_b <= 5 ? hue_b : hue_b - 5}, ${max_b}%, 9${max_a >= 5 ? max_a : max_a + 5}%)`,
        accent_light: `hsl(${hue_b}, 7${max_a >= 5 ? max_a : max_a + 5}%, 5${max_b >= 5 ? max_b : max_b + 5}%)`,
        text_light: `hsl(${hue_a}, 1${max_a <= 5 ? max_a : max_a - 5}%, 2${max_b}%)`,
        muted_light: `hsl(${hue_d <= 5 ? hue_d : hue_d - 5}, 5${max_a <= 5 ? max_a : max_a - 5}%, 5${max_b <= 5 ? max_b : max_b - 5}%)`
      })

      setDark({
        primary_dark: `hsl(${hue_a}, 5${max_a <= 5 ? max_a : max_a - 5}%, 6${max_b}%)`,
        secondary_dark: `hsl(${hue_c}, 1${max_a <= 5 ? max_a : max_a - 5}%, 2${max_b >= 5 ? max_b : max_b + 5}%)`,
        background_dark: `hsl(${hue_b <= 5 ? hue_b : hue_b - 5}, ${max_a >= 5 ? max_a : max_a + 5}%, ${max_b >= 5 ? max_b : max_b + 5}%)`,
        accent_dark: `hsl(${hue_b}, 8${max_a >= 5 ? max_a : max_a + 5}%, 5${max_b >= 5 ? max_b : max_b + 5}%)`,
        text_dark: `hsl(${hue_a}, 5${max_a >= 5 ? max_a : max_a + 5}%, 9${max_b >= 5 ? max_b : max_b + 5}%)`,
        muted_dark: `hsl(${hue_d <= 5 ? hue_d : hue_d - 5}, 5${max_a <= 5 ? max_a : max_a - 5}%, 6${max_b >= 5 ? max_b : max_b + 5}%)`
      })
    }
    

    defaultMode? setMode('auto') : null
    setSwitchToColorsStorage(false)
  }, [activeRandomColor, colorType, defaultMode, hue_a, hue_b, hue_c, hue_d, max_a, max_b, mode, setDark, setLight, setMode, setSwitchToColorsStorage])


  useEffect(() => {

    // setColorType('random')
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


    if (activeRandomColor && mode === 'light') {
      document.documentElement.style.setProperty('--primary', `${primary_lightHex}`)
      document.documentElement.style.setProperty('--accent', `${accent_lightHex}`)
      document.documentElement.style.setProperty('--secondary', `${secondary_lightHex}`)
      document.documentElement.style.setProperty('--background', `${background_lightHex}`)
      document.documentElement.style.setProperty('--text', `${text_lightHex}`)
      document.documentElement.style.setProperty('--muted', `${muted_lightHex}`)
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

    if (mode === 'dark') {
      document.documentElement.style.setProperty('--primary', `var(--system-primary)`)
      document.documentElement.style.setProperty('--accent', `var(--system-accent)`)
      document.documentElement.style.setProperty('--secondary', `var(--system-secondary)`)
      document.documentElement.style.setProperty('--background', `var(--system-background)`)
      document.documentElement.style.setProperty('--text', `var(--system-text)`)
      document.documentElement.style.setProperty('--muted', `var(--system-muted)`)
    }
  }, [accent_darkHex, accent_lightHex, activeRandomColor, background_darkHex, background_lightHex, mode, muted_darkHex, muted_lightHex, primary_darkHex, primary_lightHex, secondary_darkHex, secondary_lightHex, setColorType, setMode, text_darkHex, text_lightHex])




  return (
    <>
      <ExportCode schemeName={'Mix Colors'} />
    </>
  )

}

export default MixColors
