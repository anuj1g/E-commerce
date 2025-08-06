import React, { useContext, useState } from 'react';
import "../CSS/ShopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const [visibleProducts, setVisibleProducts] = useState(12);
  const [sortOrder, setSortOrder] = useState('none'); // Naya state

  // products ko filter karna
  let filteredProducts = all_product.filter(item => item.category === props.category);
  
  // Sorting logic ko yahan lagaya hai
  if (sortOrder === 'low_to_high') {
    filteredProducts.sort((a, b) => a.new_price - b.new_price);
  } else if (sortOrder === 'high_to_low') {
    filteredProducts.sort((a, b) => b.new_price - a.new_price);
  }

  const totalProducts = filteredProducts.length;

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-{Math.min(visibleProducts, totalProducts)}</span> out of {totalProducts} products
        </p>
        <div className='shopcategory-sort'>
          <select onChange={(e) => {
              setSortOrder(e.target.value);
              setVisibleProducts(12); // Sort karne ke baad, products ko reset kar denge
            }}>
            <option value="none">Sort by</option>
            <option value="low_to_high">Price: Low to High</option>
            <option value="high_to_low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.slice(0, visibleProducts).map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
      {visibleProducts < totalProducts && (
        <div 
          className="shopcategory-loadmore" 
          onClick={() => setVisibleProducts(prev => prev + 12)}
        >
          Explore More
        </div>
      )}
    </div>
  )
}

export default ShopCategory;