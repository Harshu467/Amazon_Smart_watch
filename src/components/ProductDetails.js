import React from 'react'
import classes from './ProductDetails.module.css'
const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage]
        if (pos === props.currentPreviewImagepos) {
            classArr.push(classes.SelectImage);
        }
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} onClick={() => props.onColorOptionClick(pos)}
                alt={item.styleName} />
        );
    })
    const featurelist = props.data.featureList.map((item, pos) => {
        const classArr = [classes.button];
        if (pos === props.currentSelectedFeature) {
            classArr.push(classes.SelectFeature);
        }
        return (
            <button onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        );
    })
    return (
        <div className={classes.productdata} >
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>
            <h2 className={classes.Select}>Select Color</h2>
            <div>
                {colorOptions}
            </div>
            <h3 className={classes.Select}>Features</h3>
            <div>
                {featurelist}
            </div>
            <button  className={classes.Primary}>Buy Now</button>
        </div>
    );
}
export default ProductDetails;