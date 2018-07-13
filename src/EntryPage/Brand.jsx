import React from 'react'
import './entry.scss'
import { CubeNav } from './CubeNav'

import { userActions } from '../_actions'

class Brand extends React.Component {
  componentDidMount () {
    this.prism = document.querySelector('.rec-prism')
  }

  render() {
    return (
      <div className='content'>
        <div className='entry-brand'>
          <img src='/src/_assets/images/1x/logo-square-outline.png' />
        </div>

        <CubeNav currentFace='brand'/>
      </div>
    )
  }
}

export { Brand }
