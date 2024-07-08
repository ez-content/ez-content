import React from 'react'

const e = React.createElement;

export default class EZHTML extends React.Component {
    constructor(props){
        super(props)
    }
    render() {

      const content = this.props

      return e(
        (content?.el || content?.element) ?? 'div',
        { 
          className: content?.className ?? 'ez-html-render',
          dangerouslySetInnerHTML: {
            __html: String(
              (content?.text) 
              ?? ( content?.default) 
              ?? ""
            ).replaceAll(
                (content.replaceTag) ?? "\n", 
                ( content?.breakTag) ?? "<br />"
            ),
          }
        },
      );
    }


  }
  