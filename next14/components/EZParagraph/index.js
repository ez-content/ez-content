import React, {dangerouslySetInnerHTML} from 'react'

const e = React.createElement;

export default class EZParagraph extends React.Component {
    constructor(props){
        super(props)
    }
    render() {

      const content = this.props.content

      return e(
        content?.element ?? 'p',
        { className: content?.className ?? 'ez-paragraph',
          dangerouslySetInnerHTML: {
            __html: String(
              (content?.body) 
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
  