import React, { Component } from 'react'
import classes from './App.module.css'
import ProductData from './components/ProductData';
import ProductDetails from './components/ProductDetails';
import Productpreview from './components/Productpreview';
import Topbar from './components/Topbar';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImage : 'https://imgur.com/iOeUBV7.png',
    currentPreviewImagepos : 0,
    currentSelectedFeature : 0
  }
  onColorOptionClick = (pos)=>{
    this.setState({currentPreviewImagepos:pos});
  }
  onFeatureItemClick = (pos) =>{
    this.setState({currentSelectedFeature:pos});
  }
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className={classes.Maincontainer}>
          <div className={classes.Productpreview} >
            <Productpreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagepos].imageUrl} 
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails onFeatureItemClick={this.onFeatureItemClick} data={this.state.productData} onColorOptionClick={this.onColorOptionClick} 
            currentPreviewImagepos={this.state.currentPreviewImagepos} currentSelectedFeature={this.state.currentSelectedFeature}
             />
          </div>
        </div>
      </div >
    );
  }
}


export default App;
