import React from "react";
import img from "./images/navLogo.png";
import {Link} from 'react-router-dom'

export default function footer(props) {
  return (
    <>
      <div>
        <div className="contact-short">
          <div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <h1>
                Ready to get started? <span> </span>
              </h1>
              <Link to ="../Login">
              <button type="button"  className=" btn btn-outline-light btn-lg">
                Get Started
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container1 footerbg">
        <div className="column">
          <br />
          <br />
          <br />
          <br />
          <br />

          <img
            src={img}
            alt="Logo"
            width="300"
            height="150"
            style={{
              borderRadius: 250,
            }}
          />
        </div>
        <div className="column">
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2> Contacts</h2>
          <p className="quicksand " style={{ fontSize: 20 }}>
            {" "}
            986100000000
            <br />
            guidedtravels@gmail.com
          </p>
        </div>
        <div className="column">
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2> Guided Travels </h2>
          <ul className=" navbar-nav me-auto mb-2 mb-lg-0 quicksand ">
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: 20 }} href="/">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: 20 }} href="https://www.sparkcar.org/" target="_blank5">
                Car Rental<span> </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: 20 }} href="https://www.magicalnepal.com/blog/best-treks-nepal/" target="_blank6">
                Trekking Route<span> </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2> Guides and resources </h2>
          <ul className=" navbar-nav me-auto mb-2 mb-lg-0 quicksand ">
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ fontSize: 20 }}
                href="https://www.google.com/travel/explore?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4308227,4597339,4757164,4814050,4850738,4864715,4874190,4886480,4893075,4920132,4924070,4936396,4965990,4968087,4972345,4985712,4988072,4991446,72248652,72253158&hl=en-NP&gl=np&ssta=1&tfs=CB4QAxofag4IAxIKL20vMDRsazEyZnINCAQSCS9tLzAxNnp3dBofag0IBBIJL20vMDE2end0cg4IAxIKL20vMDRsazEyZkABSAFSA05QUnACmAEB&curr=NPR&sa=X&ved=2ahUKEwjowa-049X-AhUKRmwGHWHKDvIQ7MIGegQIHBAT"
                target="_blank4"
              >
                Best places to visit by category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: 20 }} href="/">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ fontSize: 20 }}
                href="http://nepal.gov.np:8080/NationalPortal/view-page?id=89"
                target="_blank2 "
              >
                Heritages Site
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ fontSize: 20 }}
                href="https://weather.com/weather/today/l/47da5d036151c88cb7c11179f0a193adbee6dd3d9a197240483506f5f1d23963"
                target="_blank1 "
              >
                Weather In Nepal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: 20 }} href="https://www.google.com/search?rlz=1C1BNSD_enNP986NP986&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=APwXEddpbk9AJ-ewddg2S6tOZzZcoAyfbg:1683001318338&q=restaurant+in+nepal&rflfq=1&num=10&sa=X&ved=2ahUKEwjBoPG95NX-AhWMS2wGHdjtAe8QjGp6BAgREAE&biw=1396&bih=656&dpr=1.38#rlfi=hd:;si:;mv:[[27.716610451206623,85.54976583488033],[27.564235563020176,85.26618124015377]]" target="_blank">
                Restaurant around the destination
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
