import './App.css';
import img2 from './Images/hero image 2.png';
import img1 from './Images/Hero image 1.png';
import img3 from './Images/image 1.png';
import img4 from './Images/image 2.png';
import img5 from './Images/image 3.png';
import img6 from './Images/image 4.png';
import img7 from './Images/image 5.png';
import img8 from './Images/image 6.png';
import img9 from './Images/image 7.png';
import img10 from './Images/image 8.png';
import img11 from './Images/image 9.png';
import img12 from './Images/image 10.png';
import img13 from './Images/image 11.png';
import img14 from './Images/image 12.png';
import img15 from './Images/image 13.png';
import img16 from './Images/image 14-1.png';
import img17 from './Images/image 14.png';
import img18 from './Images/image 15.png';
import img19 from './Images/image 16.png';
import img20 from './Images/image 17.png';
import img21 from './Images/image 18.png';
import img22 from './Images/image 19.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p className="space-bottom" style={{ fontSize: '43px' }}>B.planet</p>
          <p style={{ fontSize: '43px' }}>
            'As interesting<br />as a plant'
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
          <div className="product-item"><img src={img9} alt="Tree2" className='plant-image2'/>Plant 3</div>
          <div className="product-item"><img src={img10} alt="Tree2" className='plant-image2'/>Plant 4</div>
          <div className="product-item"><img src={img11} alt="Tree2" className='plant-image2'/>Tray</div>
          <div className="product-item"><img src={img12} alt="Tree2" className='plant-image2'/>Soil</div>
          <div className="product-item"><img src={img13} alt="Tree2" className='plant-image2'/>Soil 2</div>
          <div className="product-item"><img src={img14} alt="Tree2" className='plant-image2'/>Spade</div>
          <div className="product-item"><img src={img15} alt="Tree2" className='plant-image2'/>Duck 1</div>
          <div className="product-item"><img src={img16} alt="Tree2" className='plant-image2'/>Duck 2</div>
          <div className="product-item"><img src={img17} alt="Tree2" className='plant-image2'/>Duck 3</div>
          <div className="product-item"><img src={img18} alt="Tree2" className='plant-image2'/>Duck 4</div>
          <div className="product-item"><img src={img19} alt="Tree2" className='plant-image2'/>Pot 1</div>
          <div className="product-item"><img src={img20} alt="Tree2" className='plant-image2'/>Pot 2</div>
          <div className="product-item"><img src={img21} alt="Tree2" className='plant-image2'/>Pot 3</div>
          <div className="product-item"><img src={img22} alt="Tree2" className='plant-image2'/>Pot 4</div>
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
