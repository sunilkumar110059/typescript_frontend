import React from 'react'


type Greet8Props = {
    styles1: React.CSSProperties;
    styles2: React.CSSProperties;
    flexboxStyle: React.CSSProperties;
}

function Greet8(props: Greet8Props) {
    const { styles1, styles2, flexboxStyle } = props
    return (
        <div className="cover">
            <div style={styles1}>inline Style 1</div>
            <div style={styles2}>inline Style 2</div>
            <div style={styles1}>inline Style 1</div>

            <div style={flexboxStyle}>
                <div style={styles1}>Inline Flexbox CSS Vertical and Horizental Center</div>
            </div>

        </div>
    )
}

export default Greet8