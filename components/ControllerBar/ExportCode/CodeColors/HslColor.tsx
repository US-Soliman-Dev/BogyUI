import React, { useContext } from 'react'
import '@/components/ControllerBar/ExportCode/ExportCode.css'
import { ColorsContext } from '@/context/ColorsContext'


type ExportHslCodeProps = {
    schemeName?: string | any
    dark?: {} | any
    light?: {} | any
    code?: string | any
    openExport?: boolean | any
    activeRandomColor?: boolean | any
}



const ExportHslCode: React.FunctionComponent<ExportHslCodeProps> = ({ code }) => {
    const { darkHsl, lightHsl} = useContext(ColorsContext)
    
    const { primary_darkHsl, secondary_darkHsl, background_darkHsl, accent_darkHsl, text_darkHsl, muted_darkHsl } = darkHsl
    const { primary_lightHsl, secondary_lightHsl, background_lightHsl, accent_lightHsl, text_lightHsl, muted_lightHsl } = lightHsl



    return (
        <>
            {code === 'all' ? (
                <pre >
                    <code>
                        <h3>{`:root , `}</h3>
                        <h3>{`:root[data-theme="light"] {`}</h3>
                        <p>{`  --primary: ${primary_lightHsl};`}</p>
                        <p>{`  --secondary: ${secondary_lightHsl};`}</p>
                        <p>{`  --background: ${background_lightHsl};`}</p>
                        <p>{`  --accent: ${accent_lightHsl};`}</p>
                        <p>{`  --text: ${text_lightHsl};`}</p>
                        <p>{`  --muted: ${muted_lightHsl};`}</p>
                        <br />
                        <p>{`  --system-primary: ${primary_darkHsl};`}</p>
                        <p>{`  --system-secondary: ${secondary_darkHsl};`}</p>
                        <p>{`  --system-background: ${background_darkHsl};`}</p>
                        <p>{`  --system-accent: ${accent_darkHsl};`}</p>
                        <p>{`  --system-text: ${text_darkHsl};`}</p>
                        <p>{`  --system-muted: ${muted_darkHsl};`}</p>
                        <h3>{`}`}</h3>

                        <h3>{`:root[data-theme="dark"] {`}</h3>
                        <p>{`  --primary: var(--system-primary);`}</p>
                        <p>{`  --secondary: var(--system-secondary);`}</p>
                        <p>{`  --background: var(--system-background);`}</p>
                        <p>{`  --accent: var(--system-accent);`}</p>
                        <p>{`  --text: var(--system-text);`}</p>
                        <p>{`  --muted: var(--system-muted);`}</p>

                        <h3>{`}`}</h3>

                        <h3>{`@media (prefers-color-scheme: dark) { `}</h3>
                        <h3>{`  :root ,`}</h3>
                        <h3>{`  :root[data-theme="auto"] {`}</h3>
                        <p>{`   --primary: var(--system-primary);`}</p>
                        <p>{`   --secondary: var(--system-secondary);`}</p>
                        <p>{`   --background: var(--system-background);`}</p>
                        <p>{`   --accent: var(--system-accent);`}</p>
                        <p>{`   --text: var(--system-text);`}</p>
                        <p>{`   --muted: var(--system-muted);`}</p>
                        <h3>{` }`}</h3>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            ) : null
            }

            {code === 'light' ? (
                <pre >
                    <code>
                        <h3>{`:root[data-theme="light"] {`}</h3>
                        <p>{`  --primary: ${primary_lightHsl};`}</p>
                        <p>{`  --secondary: ${secondary_lightHsl};`}</p>
                        <p>{`  --background: ${background_lightHsl};`}</p>
                        <p>{`  --accent: ${accent_lightHsl};`}</p>
                        <p>{`  --text: ${text_lightHsl};`}</p>
                        <p>{`  --muted: ${muted_lightHsl};`}</p>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            ) : null
            }

            {code === 'dark' ? (
                <pre>
                    <code>
                        <h3>{`:root[data-theme="dark"] {`}</h3>
                        <p>{`  --primary: ${primary_darkHsl};`}</p>
                        <p>{`  --secondary: ${secondary_darkHsl};`}</p>
                        <p>{`  --background: ${background_darkHsl};`}</p>
                        <p>{`  --accent: ${accent_darkHsl};`}</p>
                        <p>{`  --text: ${text_darkHsl};`}</p>
                        <p>{`  --muted: ${muted_darkHsl};`}</p>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            ) : null
            }

            {code === 'auto' ? (
                <pre>
                    <code>
                        <h3>{`@media (prefers-color-scheme: light) {`}</h3>
                        <h3>{`:root {`}</h3>
                        <p>{`  --primary: ${primary_lightHsl};`}</p>
                        <p>{`  --secondary: ${secondary_lightHsl};`}</p>
                        <p>{`  --background: ${background_lightHsl};`}</p>
                        <p>{`  --accent: ${accent_lightHsl};`}</p>
                        <p>{`  --text: ${text_lightHsl};`}</p>
                        <p>{`  --muted: ${muted_lightHsl};`}</p>
                        <h3>{` }`}</h3>
                        <h3>{`}`}</h3>

                        <h3>{`@media (prefers-color-scheme: dark) {`}</h3>
                        <h3>{`:root {`}</h3>
                        <p>{`  --primary: ${primary_darkHsl};`}</p>
                        <p>{`  --secondary: ${secondary_darkHsl};`}</p>
                        <p>{`  --background: ${background_darkHsl};`}</p>
                        <p>{`  --accent: ${accent_darkHsl};`}</p>
                        <p>{`  --text: ${text_darkHsl};`}</p>
                        <p>{`  --muted: ${muted_darkHsl};`}</p>
                        <h3>{` }`}</h3>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            ) : null
            }
        </>

    )
}

export default ExportHslCode