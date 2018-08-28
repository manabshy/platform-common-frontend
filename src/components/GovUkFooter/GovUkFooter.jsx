import React from "react"
import "./GovUkFooter.scss"
import { Link } from "react-router-dom"

const copyrightUrl =
  "http://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright-and-re-use/crown-copyright/"
const tcUrl = "https://www.ncsc.gov.uk/terms-and-conditions"

class GovUkFooter extends React.Component {
  render() {
    return (
      <footer className="group js-footer" id="footer" role="contentinfo">
        <div className="footer-wrapper">
          <div className="footer-meta">
            <div className="footer-meta-inner">
              <nav>
                <ul id="menu-footer" className="menu">
                  {this.props.contactEmail && (
                    <li>
                      <a id="footer-contact-us" href={this.props.contactEmail}>
                        Contact us
                      </a>
                    </li>
                  )}
                  <li>
                    <a
                      id="footer-terms-and-conditions"
                      target="_blank"
                      href={tcUrl}
                    >
                      Terms and Conditions
                    </a>
                  </li>
                  {this.props.footerNavigation &&
                    this.props.footerNavigation.map(link => {
                      return (
                        <li key={link.heading}>
                          {link.external ? 
                            <a id={link.heading} target="_blank" href={link.to}>
                              {link.heading}
                            </a>
                            :
                            <Link to={link.to}>{link.heading}</Link> 
                          }
                        </li>
                      )
                    })}
                </ul>
              </nav>
            </div>
            <div className="copyright">
              <a id="footer-copyright" target="_blank" href={copyrightUrl}>
                {"\u00A9 Crown copyright"}
              </a>
            </div>
          </div>
          {this.props.version && (
            <div className="version-info">{this.props.version}</div>
          )}
        </div>
      </footer>
    )
  }
}

export default GovUkFooter
