import React from 'react'

const e = React.createElement;

export default class EZTitle extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const content = this.props.content

      return e(
       content?.element ?? 'h2',
        { className: content?.className ?? 'ez-title' },
       content?.text ?? ''
      );
    }



  }
  