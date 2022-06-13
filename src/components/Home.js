import React from 'react'
import '../styles/home.css'
import Product from "./Product";


function Home() {
  return (
	<div className='home'>
		<div className='home_container'>
			<img 
			className='home_image'
			src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
			alt="" 
			/>
			<div className="home_row">
				<Product
					id="1"
					title="OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)"
					price={229.99}
					rating={5}
					image="https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UL480_QL65_.jpg"
				/>
				<Product
					id="2"
					title="Redgear Pro Wireless Gamepad (Compatible with Windows 7/8/8.1/10 only)"
					price={14.56}
					rating={4}
					image="https://m.media-amazon.com/images/I/51fCmfd8CML._AC_UY327_FMwebp_QL65_.jpg"
				/>
			</div>
			<div className="home_row">
				<Product
					id="3"
					title="KRISHNA ENTERPRISES Men's Rayon Cotton Lining Digital Printed Stitched Half Sleeve Shirt"
					price={5.00}
					rating={3}
					image="https://m.media-amazon.com/images/I/71wR2K2OQSL._AC_UL480_QL65_.jpg"
				/>
				<Product
					id="4"
					title="Harry Potter and the Philosopher's Stone"
					price={5.45}
					rating={4}
					image="https://m.media-amazon.com/images/I/81gP4fFhsbL._AC_UY327_FMwebp_QL65_.jpg"
				/>
				<Product
					id="5"
					title="Sunfeast YiPPee! Magic Masala, Instant Noodles (Pack of 12)"
					price={1.5}
					rating={4}
					image="https://m.media-amazon.com/images/I/51WgVtkUE3L._AC_SY250_.jpg"
				/>
			</div>
			<div className="home_row">
				<Product
					id="6"
					title="ASUS ROG Strix Radeon RX 6600 XT OC Edition 8GB GDDR6 Graphics Card"
					price={699.99}
					rating={4}
					image="https://m.media-amazon.com/images/I/713j8CMbrXL._AC_UY327_FMwebp_QL65_.jpg"
				/>
			</div>
		</div>
	</div>
  )
}

export default Home