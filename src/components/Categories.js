import React from 'react';
import "../styles/categories.css";
import DehazeIcon from '@mui/icons-material/Dehaze';

function Categories() {
  return (
	<div className="categories">
		<div className="categories_1">
			<a href=''><div className="all"><DehazeIcon style={{paddingRight:"5px"}}/>All</div></a>
			<a href=''>Fresh</a>
			<a href=''>Today's Deals</a>
			<a href=''>Clearance Store</a>
			<a href=''>Electronics</a>
			<a href=''>Mobiles</a>
			<a href=''>Amazon Pay</a>
			<a href=''>Pet Supplies</a>
			<a href=''>Gift Cards</a>
		</div>
		<div className="cat_ad">

		</div>
	</div>
  )
}

export default Categories