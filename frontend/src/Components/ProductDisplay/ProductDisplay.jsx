import React, { useContext, useState } from 'react'
import "./ProductDisplay.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addTocart } = useContext(ShopContext);

  const [mainImage, setMainImage] = useState(product.image);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };
  
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<img key={i} src={star_icon} alt="star" height="20px" />);
    }
    if (rating % 1 !== 0) {
      stars.push(<img key="half" src={star_dull_icon} alt="half-star" height="20px" />);
    }
    while (stars.length < 5) {
      stars.push(<img key={stars.length} src={star_dull_icon} alt="dull-star" height="20px" />);
    }
    return stars;
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {product.image_gallery && product.image_gallery.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`thumbnail-${index}`} 
              height="150px" 
              onClick={() => handleThumbnailClick(img)} 
            />
          ))}
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={mainImage} alt={product.name} height="300px" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          {renderStars(product.rating)}
          <p>({product.review_count})</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => { addTocart(product.id) }}>ADD TO CART</button>
        <div className="productdisplay-right-category">
          <span>Category: <span>{product.category}</span></span>
        </div>
        <div className="productdisplay-right-category">
          <span>Tags: <span>{product.tags.join(', ')}</span></span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;