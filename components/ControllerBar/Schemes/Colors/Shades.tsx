import React, { useEffect, useContext } from 'react'
import ExportCode from '../../ExportCode';
import { ColorsContext } from '@/context/ColorsContext';
import { ThemeContext } from '@/context/ThemeContext';

type ShadesTypes = {
  random?: () => number;
  colorValue?: {} | any
  theme?: string | any
  openExport?: boolean | any
  activeRandomColor?: boolean | any
}



const Shades: React.FunctionComponent<ShadesTypes> = () => {

  const { mode } = useContext(ThemeContext)
  const { setColorType ,setSwitchToColorsStorage, darkHex, lightHex, setLight, setDark, colorType, activeRandomColor, random } = useContext(ColorsContext)

  const { primary_darkHex, secondary_darkHex, background_darkHex, accent_darkHex, text_darkHex, muted_darkHex } = darkHex
  const { primary_lightHex, secondary_lightHex, background_lightHex, accent_lightHex, text_lightHex, muted_lightHex } = lightHex
  const { hue_a, max_a, max_b } = random


  useEffect(() => {
    if (activeRandomColor && colorType === 'random') {
      setLight({
        primary_light: `hsl(${hue_a <= 20 ? hue_a : hue_a - 20}, 4${max_a >= 5 ? max_a : max_a + 5}%, 5${max_b}%)`,
        secondary_light: `hsl(${hue_a}, 3${max_a}%, 8${max_b}%)`,
        background_light: `hsl(${hue_a}, 4${max_a}%, 9${max_b >= 5 ? max_b : max_b + 5}%)`,
        accent_light: `hsl(${hue_a <= 329 ? hue_a + 5 : hue_a}, 5${max_a >= 5 ? max_a : max_a + 5}%, 5${max_b >= 5 ? max_b : max_b + 5}%)`,
        text_light: `hsl(${hue_a}, 1${max_a}%, 1${max_b}%)`,
        muted_light: `hsl(${hue_a}, 4${max_a}%, 4${max_b}%)`
      })
      setDark({
        primary_dark: `hsl(${hue_a <= 15 ? hue_a : hue_a - 15}, 6${max_a >= 5 ? max_a : max_a + 5}%, 5${max_b >= 5 ? max_b : max_b + 5}%)`,
        secondary_dark: `hsl(${hue_a}, 2${max_a}%, 2${max_b}%)`,
        background_dark: `hsl(${hue_a}, ${max_a >= 5 ? max_a : max_a + 5}%, 1${max_b <= 5 ? max_b : max_b - 5}%)`,
        accent_dark: `hsl(${hue_a <= 329 ? hue_a + 5 : hue_a}, 8${max_a}%, 5${max_b >= 5 ? max_b : max_b + 5}%)`,
        text_dark: `hsl(${hue_a}, 9${max_a >= 5 ? max_a : max_a + 5}%, 9${max_b >= 5 ? max_b : max_b + 5}%)`,
        muted_dark: `hsl(${hue_a}, 7${max_a}%, 8${max_b}%)`
      })
    }
    setSwitchToColorsStorage(false)
  }, [activeRandomColor, colorType, hue_a, max_a, max_b, setDark, setLight, setSwitchToColorsStorage])



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

  }, [accent_darkHex, accent_lightHex, activeRandomColor, background_darkHex, background_lightHex, mode, muted_darkHex, muted_lightHex, primary_darkHex, primary_lightHex, secondary_darkHex, secondary_lightHex, setColorType, text_darkHex, text_lightHex])







  return (
    <>
      <ExportCode schemeName={'Shades'} />
    </>
  )

}

export default Shades
