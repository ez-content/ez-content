/*
import React from 'react'

const e = React.createElement;


export default class EZTag extends React.Component {

    constructor(props){
        super(props)
    }
    
    render() {

      const content = this.props

      return e(
        (content?.el || content?.element) ?? 'div',
        { 
          className: (content?.cn  || content?.className) ?? 'ez-html-render', 
          dangerouslySetInnerHTML: {
            __html: String(
              (content?.txt || content?.text) 
              ?? (content?.def || content?.default) 
              ?? ""
            ).replaceAll(
                (content?.rep||content.replaceTag) ?? "\n", 
                (content?.br || content?.breakTag) ?? "<br />"
            ),
          }
        },
      );
    }


  }
  */