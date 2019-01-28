import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubFooter from '../components/SubFooter'
import MenuMobile from '../components/MenuMobile'
import '../scss/style.scss'
import MediaQuery from 'react-responsive';

const Layout = props => {
  return (
    <React.Fragment>
      <SEO />
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          <Header />
          <MediaQuery query="(max-device-width: 500px)">
            <a href='tel:404-610-1036' style={{position: 'fixed', top: '90%', right: '5%'}}className="btn-floating btn-medium align pulse waves-effect waves-light red"><i class="material-icons">phone</i></a>
          </MediaQuery>
          {props.children}
        </div>
        <MediaQuery query="(min-device-width: 500px)">
          <Footer />
          <SubFooter />
        </MediaQuery>
      </div>
    </React.Fragment>
  )
}

export default Layout
