
/* goal */
// a-[p-m][a-l-r-t-b]-[none-xm-sm-md-lg-xl-ul]

/* todo */
// dynamic default sizes for mobile and web
// sizes override option 


// default spacing sizes
const sizes = {
    none:0,
    xm : 4,
    sm : 6,
    md : 8,
    lg : 10,
    xl : 12,
    ul : 14,
}

const directions= {
    all    : 'a',
    left   : 'l',
    right  : 'r',
    top    : 't',
    bottom : 'b',
}

const padding_property = {
    all    : 'padding',
    left   : 'paddingLeft',
    right  : 'paddingRight',
    top    : 'paddingTop',
    bottom : 'paddingBottom'
}

const margin_property = {
    all    : 'margin',
    left   : 'marginLeft',
    right  : 'marginRight',
    top    : 'marginTop',
    bottom : 'marginBottom'
}

const generatePaddingStyles  = ()=>{
    let paddings = {}
    for(let direction in directions){
        for(let size in sizes){
            paddings[`a-p${directions[direction]}-${size}`] = { [padding_property[direction]] : sizes[size] }
        }
    }
    return paddings;
}

const generateMarginStyles  = ()=>{
    let margins = {}
    for(let direction in directions){
        for(let size in sizes){
            margins[`a-m${directions[direction]}-${size}`] = { [margin_property[direction]] : sizes[size] }
        }
    }
    return margins;
}

const padding = generatePaddingStyles()
const margin  = generateMarginStyles()

export default {
    padding,
    margin
}
