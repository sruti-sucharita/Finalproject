import './App.css';
import img2 from './Images/hero image 2.png';
import img1 from './Images/Hero image 1.png';
import img3 from './Images/image 1.png';
import img4 from './Images/image 2.png';
import img5 from './Images/image 3.png';
import img6 from './Images/image 4.png';
import img7 from './Images/image 5.png';
import img8 from './Images/image 6.png';
import img9 from './Images/av5c8336583e291842624.png';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p className="space-bottom" style={{ fontSize: '43px' }}>B.planet</p>
          <p style={{ fontSize: '43px' }}>
            'Heading'
          </p>
        </div>
        <img src={img2} alt="Plant" className="plant-image" />
        <img src={img1} alt="Plant" className="plant-image1" />
      </header>
      <header className="featured-section">
        <p style={{ fontSize: '33px' }}>Featured Product</p>
        <div className="product-grid">
          <div className="product-item"><img src={img3} alt="Tree1" className='plant-image2'/>Tree 1</div>
          <div className="product-item"><img src={img4} alt="Tree2" className='plant-image2'/>Tree 1</div>
          <div className="product-item"><img src={img5} alt="Tree2" className='plant-image2'/>Tree 2</div>
          <div className="product-item"><img src={img6} alt="Tree2" className='plant-image2'/>Tree 3</div>
          <div className="product-item"><img src={img7} alt="Tree2" className='plant-image2'/>Plant 1</div>
          <div className="product-item"><img src={img8} alt="Tree2" className='plant-image2'/>Plant 2</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Title</div>
        </div>
        <div class="pagination">
       <button>Previous</button> 
     <button class="active">1</button> 
     <button>Next</button> 
     </div>
      </header>
    </div>
  );
}

export default App;
