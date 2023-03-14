//Due to the nature of react-select, styling needs to be done in an object
//with values named after the Selector's inner components, like control
//which encompasses the entire component, and specifying the styles for
//control specifically, this would also allow color coding the individual
//classes for the teacher and specify the styling for the Selector options

//Note, it may be better to put selector in its own component

const classSelectStyle = {
    control: (baseStyles) => ({
        ...baseStyles,
        width: "100%"
    })
}

export default classSelectStyle