import React from 'react'

const e = React.createElement;

export default class EZParagraph extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const content = this.props.content

      return e(
        content?.element ?? 'img',
        { 
            className: content?.className ?? 'ez-image',
            src: content?.image 

        }
      );
    }


  }
  