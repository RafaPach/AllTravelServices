import { Stack, Typography } from '@mui/material';
import Logo from '../../Assests/Logo.png';
import Image from 'next/image';

function FooterComp() {
  return (
    <>
      <header>{/* Content */}</header>

      <main>{/* Content */}</main>

      <footer className="footer">
        <div className="footer__addr">
          <Image src={Logo} height={45} width={100} alt="Logo" />{' '}
          <div className="nav__ul">
            <a href="#">
              All Travel Services offers transport solutions in East Anglia{' '}
              <br />
              specializing in school transport, private contracts, assisted
              travel, <br />
              and VIP chauffeur services. Our trained, DBS-certified staff
              ensures <br />
              safety and exceptional service.
            </a>{' '}
          </div>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Information</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">Request a Quote</a>
              </li>

              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Services</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Executive Travel for VIPs</a>
              </li>

              <li>
                <a href="#">Private Contracts</a>
              </li>

              <li>
                <a href="#">School Runs</a>
              </li>

              <li>
                <a href="#">Assisted Travel</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Contact Us</h2>

            <ul className="nav__ul">
              <li>
                <a href="#"> @outlook.com </a>
              </li>

              <li>
                <a href="#">+44</a>
              </li>

              <li>
                <a href="#">Norwich </a>
              </li>

              <li>
                <a href="#">Submit Enquiry Form </a>
              </li>
            </ul>
          </li>
        </ul>

        <Stack
          direction="row" // Ensure the children are aligned in a row
          justifyContent="space-between" // Space out the children
          sx={{ width: '100%', padding: '1em 8.5%' }} // Add padding for spacing and full width
        >
          <div>
            <Typography sx={{ fontSize: '12px', color: '#999' }}>
              © 2024 All Travel Services. All rights reserved.
            </Typography>
          </div>
          <div style={{ marginRight: '30px' }}>
            <Typography sx={{ fontSize: '12px', color: '#999' }}>
              Made with <span className="heart">♥</span> remotely by Burberryx
            </Typography>
          </div>
        </Stack>
      </footer>
    </>
  );
}

export default FooterComp;
