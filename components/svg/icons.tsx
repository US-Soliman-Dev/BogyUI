




export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
}


export const StarFilledIcon: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                    fill={color}
                />
            </svg>
        );
    }
);

export const SvgLight: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" fill={`${color}`}>
                    <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z" />
                </svg>
            </>
        )
    })

export const SvgDark: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" fill={`${color}`}>
                    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                </svg>
            </>
        )
    })

export const SvgSystem: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" fill={`${color}`} >
                    <path d="M0-160v-80h80v-600h800v600h80v80H0Zm400-80h160v-40H400v40ZM160-360h640v-400H160v400Zm0 0v-400 400Z" stroke={`${color}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </>
        )
    })


export const SvgHome2: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <>
                <svg
                    width="15"
                    height="15"
                    fill={color}
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <path
                        d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
            </>
        )
    })

export const SvgHome: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill='transparent' strokeLinecap="round" strokeLinejoin="round" {...props}>
                    <path stroke="none" d="M0 0h24v24H0z" fill='transparent' />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" fill='transparent' />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" fill='transparent' />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" fill='transparent' />
                </svg>
            </>
        )
    })

export const SvgInfo: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill='transparent' strokeLinecap="round" strokeLinejoin="round" {...props}>
                    <path stroke="none" d="M0 0h24v24H0z" fill='transparent' />
                    <path d="M12 9h.01" fill='transparent' />
                    <path d="M11 12h1v4h1" fill='transparent' />
                    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" fill='transparent' />
                </svg>
            </>
        )
    })



export const SvgAvatar: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);


export const SvgMailIcon: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg
                width="15"
                height="15"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill='transparent' />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" fill='transparent' />
                <path d="M3 7l9 6l9 -6" fill='transparent' />
            </svg>
        );
    }
);


export const SvgYoutubeIcon: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke={color} fill='transparent' strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill='transparent' />
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" fill='transparent' />
                <path d="M10 9l5 3l-5 3z" fill='transparent' />
            </svg>

        );
    }
);



export const SvgFacebookIcon: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke={color} fill='transparent' strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill='transparent' />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" fill='transparent' />

            </svg>

        );
    }
);

export const SvgFeatures: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="transparent" >
                <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" fill="transparent" />
                <path d="M6 4v4" fill="transparent" />
                <path d="M6 12v8" fill="transparent" />
                <path d="M12 4v9.5" fill="transparent" />
                <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" fill="transparent" />
                <path d="M18 4v1" fill="transparent" />
                <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" fill="transparent" />
                <path d="M18 9v1" fill="transparent" />
            </svg>
        );
    }
);


export const SvgSettingsQuestion: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="transparent" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M14.69 18.498c-.508 .21 -.885 .65 -1.015 1.185c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572a1.67 1.67 0 0 1 1.179 .982" fill="transparent" />

                <path d="M14.95 12.553a3 3 0 1 0 -1.211 1.892" fill="transparent" />
                <path d="M19 22v.01" fill="transparent" />
                <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" fill="transparent" />
            </svg>
        );
    }
);

export const SvgPencilDollar: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="transparent" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" fill="transparent" />
                <path d="M13.5 6.5l4 4" fill="transparent" />
                <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" fill="transparent" />
                <path d="M19 21v1m0 -8v1" fill="transparent" />
            </svg>
        );
    }
);



export const SvgCheck: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="5" stroke={color} fill="transparent" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M5 12l5 5l10 -10" fill="transparent" />
            </svg>
        );
    }
);

export const SvgColorpalette: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="transparent" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" fill="transparent" />
                <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="transparent" />
                <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="transparent" />
                <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="transparent" />
            </svg>
        );
    }
);

export const SvgClock: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="transparent" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" fill="transparent" />
                <path d="M12 7v5l3 3" fill="transparent" />
                <path d="M4 12h1" fill="transparent" />
                <path d="M19 12h1" fill="transparent" />
                <path d="M12 19v1" fill="transparent" />
            </svg>
        );
    }
);

export const SvghandClick: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="transparent" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" fill="transparent" />
                <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" fill="transparent" />
                <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" fill="transparent" />
                <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" fill="transparent" />
                <path d="M5 3l-1 -1" fill="transparent" />
                <path d="M4 7h-1" fill="transparent" />
                <path d="M14 3l1 -1" fill="transparent" />
                <path d="M15 6h1" fill="transparent" />
            </svg>
        );
    }
);



export const SvgQuote: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="transparent" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" fill="transparent" />
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" fill="transparent" />
            </svg>
        );
    }
);



export const SvgQuote2: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="transparent" strokeLinecap="round" strokeLinejoin="round" >
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" fill="transparent" />
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" fill="transparent" />
            </svg>
        );
    }
);



export const SvgBlockquote: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M6 15h15" fill="transparent" />
                <path d="M21 19h-15" fill="transparent" />
                <path d="M15 11h6" fill="transparent" />
                <path d="M21 7h-6" fill="transparent" />
                <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" fill="transparent" />
                <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" fill="transparent" />
            </svg>
        );
    }
);

export const SvgarrowForward: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M15 14l4 -4l-4 -4" fill="transparent" />
                <path d="M19 10h-11a4 4 0 1 0 0 8h1" fill="transparent" />
            </svg>
        );
    }
);

export const SvgarrowBack: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M9 14l-4 -4l4 -4" fill="transparent" />
                <path d="M5 10h11a4 4 0 1 1 0 8h-1" fill="transparent" />
            </svg>
        );
    }
);


export const SvgClose: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke={color}  width={24} height={24} {...props} >
                <path d="M18 6l-12 12" fill="transparent" /> 
                <path d="M6 6l12 12" fill="transparent" />
            </svg>
        );
    }
);

