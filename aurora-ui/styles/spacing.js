import { StyleSheet } from "react-native"

const padding_sizes = {
    xm : 4,
    sm : 6,
    md : 8,
    lg : 10,
    xl : 12,
    ul : 14,
}

const padding = StyleSheet.create({
    'a-pa-xm':{
        padding:padding_sizes.xm
    },
    'a-pa-sm':{
        padding:padding_sizes.sm
    },
    'a-pa-md': {
        padding:padding_sizes.md
    },
    'a-pa-lg' : {
        padding:padding_sizes.lg
    },
    'a-pa-xl' : {
        padding:padding_sizes.xl
    },
    'a-pa-ul' : {
        padding : padding_sizes.ul
    }
})

export {
    padding
}