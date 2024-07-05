import React from 'react'


const EZTitle = ({content}) => {
    return (
        <div className={`ez-title ${content.class ?? ''}`}>
            {content.text ?? ""}
        </div>
    )
}

export {EZTitle as default}