import { useState } from "react"

export function StyleBinding(){
    
    const [styles, setStyles] = useState({'fontSize':'10px','color':'black'});

    function handleFontSizeChange(e) {
        setStyles({
            fontSize: e.target.value + "px",
            color: styles.color
        })

    }
    function handleColorChange(e) {
        setStyles({
            fontSize: styles.fontSize,
            color: e.target.value
        })

    }

    return(
        <div className="container-fluid">
            <h2>Style Binding</h2>
            <dl>
                <dt>Font Size</dt>
                <dd><input type="range" onChange={handleFontSizeChange} min="10" max="100" /></dd>
                <dt>Font Color</dt>
                <dd><input type="color" onChange={handleColorChange}/></dd>
            </dl>
            <p className="text-center" style={styles} >Sample Text</p>
        </div>
    )
}