import React from 'react';
import "../styles/footer.css";
import {Link} from "react-router-dom";

function Footer() {
  return (
  <div className="footer">
    <div className="back_to_top">
      <p>Back to top</p>
    </div>
    <div className="info">
      <div className="top_part">
        <div className="know_us">
          <h4>Get to Know Us</h4>
          <a href="">About Us</a>
          <a href="">Careers</a>
          <a href="">Press Releases</a>
          <a href="">Amazon Cares</a>
          <a href="">Gift a Smile</a>
          <a href="">Amazon Science</a>
        </div>
        <div className="connect_with_us">
          <h4>Connect with Us</h4>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
        </div>
        <div className="make_money">
          <h4>Make Money with Us</h4>
          <a href="">Sell on Amazon</a>
          <a href="">Sell under Amazon Accelerator</a>
          <a href="">Amazon Global Selling</a>
          <a href="">Become an Affiliate</a>
          <a href="">Fulfilment by Amazon</a>
          <a href="">Advertise Your Products</a>
          <a href="">Amazon Pay on Merchants</a>
        </div>
        <div className="help">
          <h4>Let Us Help You</h4>
          <a href="">COVID-19 and Amazon</a>
          <a href="">Your Account</a>
          <a href="">Returns Centre</a>
          <a href="">100% Purchase Protection</a>
          <a href="">Amazon App Download</a>
          <a href="">Amazon Assistant Download</a>
          <a href="">Help</a>
        </div>
      </div>
      <hr />
      <div className="bottom_part">
        <div className="row_1">
          <Link to="/">
            <img 
            className='header_logo' 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt=""
            />
			    </Link>
          <button>English</button>
        </div>
        <div className="row_2">
          <div className="countries">
            <a href="">Australia</a>
            <a href="">Brazil</a>
            <a href="">Canada</a>
            <a href="">China</a>
            <a href="">France</a>
            <a href="">Germany</a>
            <a href="">Italy</a>
            <a href="">Japan</a>
            <a href="">Mexico</a>
            <a href="">Netherlands</a>
            <a href="">Poland</a>
            <a href="">Singapore</a>
            <a href="">Spain</a>
            <a href="">Turkey</a>
          </div>
          <div className='countries'>
            <a href="">United Arab Emirates</a>
            <a href="">United Kingdom</a>
            <a href="">United States</a>
          </div>
        </div>
      </div>
    </div>
    <div className="services">
      <div className="service_table">
        <table>
          <tr>
            <td>
              <a style={{textDecoration:"none"}} className="block" href="/">
                <h5  >AbeBooks</h5>
                <p>Books, art</p>
                <p>& collectibles</p>
              </a>
            </td>
            <td>
              <a className="block" href="">
                <h5>Amazon Web Services</h5>
                <p>Scalable Cloud</p>
                <p>Computing Services</p>
              </a>
            </td>
            <td>
              <a className="block" href="">
                <h5>Audible</h5>
                <p>Download</p>
                <p>Audio Books</p>
              </a>
            </td>
            <td>
              <a className="block" href="">
                <h5>DPReview</h5>
                <p>Digital</p>
                <p>Photography</p>
              </a>
            </td>
            <td>
              <a className="block" href="">
                <h5>IMDb</h5>
                <p>Movies, TV</p>
                <p>& Celebrities</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a className="block" href="">
                <h5>Shopbop</h5>
                <p>Designer</p>
                <p>Fashion Brands</p>
              </a>
            </td>
            <td>
              <a className="block" href="">
                <h5>Amazon Business</h5>
                <p>Everything For</p>
                <p>Your Business</p>
              </a>
            </td>
            <td>
              <a className="block" href="">
                <h5>Prime Now</h5>
                <p>2-Hour Delivery</p>
                <p>on Everyday Items</p>
              </a>
            </td>
            <td>
              <a className="block" href="">
                <h5>Amazon Prime Music</h5>
                <p>90 million songs, ad-free</p>
                <p>Over 15 million podcast episodes</p>
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div className='conditions'>
        <a href="">Conditions of Use & Sale</a>
        <a href="">Privacy Notice</a>
        <a href="">Interest-Based Ads</a>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  </div>
  )
}

export default Footer