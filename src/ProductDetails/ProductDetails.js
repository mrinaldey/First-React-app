import React from 'react';
import classes from './ProductDetails.module.css';


const ProductDetails = (properties) => {
    const colorOptions = properties.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage]
        if(pos === properties.currentPreviewImagePos) {
            classArr.push(classes.SelectedProductImage);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => properties.onColorOptionClick(pos)} />
        )
    })
    const featureList = properties.data.featureList.map((item, pos) => {
        const classArr = [classes.FeatureItem];
        if(pos === 0) {
            classArr.push(classes.SelectedFeatureItem);
        }
        return(
            <button key={pos} className={classArr.join(' ')}>{item}</button>
        )
    })
    return(
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{properties.data.title}</h1>
          <p className={classes.ProductDescription}>{properties.data.description}</p>
       	  <h3 className={classes.SectionHeading}>Select Color</h3> 
          <div>
            {colorOptions}
            {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colored Watch" /> */}
          </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
                {featureList}
            </div>

            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    )
}

export default ProductDetails;