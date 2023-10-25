import { StyleSheet } from "react-native"

const sizes = {
    xm : 4,
    sm : 6,
    md : 8,
    lg : 10,
    xl : 12,
    ul : 14,
}

const direction = {
    all    : 'a',
    left   : 'l',
    right  : 'r',
    top    : 't',
    bottom : 'b',
}

const generatePaddingStyles  = ()=>{
    let paddings = {}
    
}

const generateMarginStyles  = ()=>{
    let paddings = {}
    
}


const padding = StyleSheet.create(generatePaddingStyles())
const margin  = StyleSheet.create(generateMarginStyles())

export {
    padding,
    margin
}