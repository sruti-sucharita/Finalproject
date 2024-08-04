
import './Login.css';
import img48 from './Images/Login in page image.png';

function Contact() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="space-bottom1" style={{ fontSize: '33px' }}>B.planet</p>
        <div className="product-grid">
          <div className="product-item">
             <img src={img48} alt="" className="plant-image" />
          </div>
          <div className="product-item1">
          <p className="input-group" style={{ fontSize: '28px' }}>Login</p>
          <p className="input-group" style={{ fontSize: '13px' }}>Welcome back!!</p>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className="wide-input" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" className="wide-input" required />
            </div>
            <button type="submit" className="button">Login</button>
            <p className="input-group" style={{ fontSize: '13px' }}>Don't have an account?  sign up for free!</p>
          </div>
          </div>

        
      </header>
    </div>
  );
}

export default Contact;
