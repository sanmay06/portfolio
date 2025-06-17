import React from "react";

export default function Background() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -10,
                // height: '100%',
                // width: '100%',
                // alignItems: 'center',
                padding: '6rem 1.25rem', // py-24 = 6rem, px-5 = 1.25rem
                background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
            }}
        >
        </div>
    )
}