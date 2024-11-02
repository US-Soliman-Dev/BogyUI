export const getSavedColorsStorage = ( colors: { primaryStorage: string } | any) => {
    // const find : any = colorsStorage.same((obj: any) => obj.primaryStorage === colors?.primaryStorage)
    // const active = find?.primaryStorage === colors?.primaryStorage
    const prevColors: any = typeof window !== 'undefined' ? window?.localStorage.getItem('colorsStorage') : null
    const colorsStorage : [] | any = JSON.parse(prevColors)
    const find : any = colorsStorage?.find((obj: any) => obj?.primaryStorage === colors?.primaryStorage)
    const active : boolean= find?.primaryStorage === colors?.primaryStorage

    return active ? active : false
    }