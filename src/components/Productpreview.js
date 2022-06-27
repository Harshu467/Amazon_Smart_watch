import React from 'react'
import classes from './ProductPreview.module.css'
const Productpreview = (props) => {
        var currentHour = new Date().getHours();
        var currentMin = new Date().getMinutes();
        var currentSec = new Date().getSeconds();
        currentHour = (currentHour < 10) ? "0" + currentHour : currentHour;
        currentMin = (currentMin < 10) ? "0" + currentMin : currentMin;
        currentSec = (currentSec < 10) ? "0" + currentSec : currentSec;
    return (
        <div className={classes.Productpreview}>
            <img src={props.currentPreviewImage} alt='Product Preview' />
            {
                props.currentSelectedFeature === 1 ?
                    <div className={classes.HeartBeat}>
                        <i className="fa-solid fa-heart-pulse"></i>
                        <p>78</p>
                    </div>
                    :
                    <div className={classes.Time}>
                        <p>{`${currentHour}:${currentMin}:${currentSec}`}</p>

                    </div>
            }
        </div>
    );
}
export default Productpreview;