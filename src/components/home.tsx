import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import { AppBar } from './appBar'

import twitter from '../assets/twitter.svg'
import telegram from '../assets/telegram.svg'
import medium from '../assets/medium.svg'
import github from '../assets/github.svg'
import solana from '../assets/solana.svg'

import './home.less'

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Onespace Tech'
  })

  

  return (
    <div className="page-home">
      <AppBar />
      <div className="mod">
        <div className="hd">
          <h1>An innovative cross-chain DeFi aggregator on Solana and more</h1>
        </div>
        <div className="bd" />
        <div className="ft">
          <div className="socials">
            <div className="flex">
              <div className="icon">
                <a href="https://twitter.com/1space_me">
                  <img src={twitter} />
                </a>
              </div>
              <div className="icon">
                <a href="https://t.me/">
                  <img src={telegram} />
                </a>
              </div>
              <div className="icon">
                <a href="https://medium.com/">
                  <img src={medium} />
                </a>
              </div>
              <div className="icon">
                <a href="https://github.com/">
                  <img src={github} />
                </a>
              </div>
            </div>
          </div>
          <div className="powerby">
            Built on: <img src={solana} />
            <a href="https://solana.com">Solana</a>
          </div>
          <div className="buttons">
            <div className="flex btn-flex">
              
              <a
                className="lightpaper"
                href="https://1space.me/"
              >
                <Button
                  className="custom-btn purple-btn-outline"
                  type="text"
                  size="large"
                >
                  Download LightPaper
                </Button>
              </a>
              <Link to={{ pathname: '/trade' }}>
                <Button
                  className="custom-btn purple-btn-outline"
                  type="text"
                  size="large"
                >
                  Trade
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
