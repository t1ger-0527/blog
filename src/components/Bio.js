import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../../static/profile-pic.jpeg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p>
          Written by <strong>t1ger</strong> who works and lives in Singapore.{' '}
          <del>
            <a href="https://github.com/t1ger-0527">
              You should not check his github.
            </a>
          </del>
        </p>
      </div>
    )
  }
}

export default Bio
