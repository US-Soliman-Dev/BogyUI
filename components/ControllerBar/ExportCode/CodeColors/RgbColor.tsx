import React, { useContext } from 'react'
import '@/components/ControllerBar/ExportCode/ExportCode.css'
import { ColorsContext } from '@/context/ColorsContext'


type ExportRgbCodeProps = {
    schemeName?: string | any
    dark?: {} | any
    light?: {} | any
    code?: string | any
    openExport?: boolean | any
    activeRandomColor?: boolean | any
}



const ExportRgbCode: React.FunctionComponent<ExportRgbCodeProps> = ({ code }) => {
    const { darkRgb, lightRgb} = useContext(ColorsContext)
    
    const { primary_darkRgb, secondary_darkRgb, background_darkRgb, accent_darkRgb, text_darkRgb, muted_darkRgb } = darkRgb
    const { primary_lightRgb, secondary_lightRgb, background_lightRgb, accent_lightRgb, text_lightRgb, muted_lightRgb } = lightRgb



    return (
        <>
            {code === 'all' ? (
                <pre >
                    <code>
                        <h3>{`:root , `}</h3>
                        <h3>{`:root[data-theme="light"] {`}</h3>
                        <p>{`  --primary: ${primary_lightRgb};`}</p>
                        <p>{`  --secondary: ${secondary_lightRgb};`}</p>
                        <p>{`  --background: ${background_lightRgb};`}</p>
                        <p>{`  --accent: ${accent_lightRgb};`}</p>
                        <p>{`  --text: ${text_lightRgb};`}</p>
                        <p>{`  --muted: ${muted_lightRgb};`}</p>
                        <br />
                        <p>{`  --system-primary: ${primary_darkRgb};`}</p>
                        <p>{`  --system-secondary: ${secondary_darkRgb};`}</p>
                        <p>{`  --system-background: ${background_darkRgb};`}</p>
                        <p>{`  --system-accent: ${accent_darkRgb};`}</p>
                        <p>{`  --system-text: ${text_darkRgb};`}</p>
                        <p>{`  --system-muted: ${muted_darkRgb};`}</p>
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
                        <p>{`  --primary: ${primary_lightRgb};`}</p>
                        <p>{`  --secondary: ${secondary_lightRgb};`}</p>
                        <p>{`  --background: ${background_lightRgb};`}</p>
                        <p>{`  --accent: ${accent_lightRgb};`}</p>
                        <p>{`  --text: ${text_lightRgb};`}</p>
                        <p>{`  --muted: ${muted_lightRgb};`}</p>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            ) : null
            }

            {code === 'dark' ? (
                <pre >
                    <code>
                        <h3>{`:root[data-theme="dark"] {`}</h3>
                        <p>{`  --primary: ${primary_darkRgb};`}</p>
                        <p>{`  --secondary: ${secondary_darkRgb};`}</p>
                        <p>{`  --background: ${background_darkRgb};`}</p>
                        <p>{`  --accent: ${accent_darkRgb};`}</p>
                        <p>{`  --text: ${text_darkRgb};`}</p>
                        <p>{`  --muted: ${muted_darkRgb};`}</p>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            ) : null
            }

            {code === 'auto' ? (
                <pre >
                    <code>
                        <h3>{`@media (prefers-color-scheme: light) {`}</h3>
                        <h3>{`:root {`}</h3>
                        <p>{`  --primary: ${primary_lightRgb};`}</p>
                        <p>{`  --secondary: ${secondary_lightRgb};`}</p>
                        <p>{`  --background: ${background_lightRgb};`}</p>
                        <p>{`  --accent: ${accent_lightRgb};`}</p>
                        <p>{`  --text: ${text_lightRgb};`}</p>
                        <p>{`  --muted: ${muted_lightRgb};`}</p>
                        <h3>{` }`}</h3>
                        <h3>{`}`}</h3>

                        <h3>{`@media (prefers-color-scheme: dark) {`}</h3>
                        <h3>{`:root {`}</h3>
                        <p>{`  --primary: ${primary_darkRgb};`}</p>
                        <p>{`  --secondary: ${secondary_darkRgb};`}</p>
                        <p>{`  --background: ${background_darkRgb};`}</p>
                        <p>{`  --accent: ${accent_darkRgb};`}</p>
                        <p>{`  --text: ${text_darkRgb};`}</p>
                        <p>{`  --muted: ${muted_darkRgb};`}</p>
                        <h3>{` }`}</h3>
                        <h3>{`}`}</h3>
                    </code>
                </pre>
            ) : null
            }
        </>

    )
}

export default ExportRgbCode