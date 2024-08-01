import './About.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="space-bottom" style={{ fontSize: '43px' }}>B.planet</p>
        <div className="box">
        <form>
        <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" className="wide-input" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className="wide-input" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" className="wide-input" required />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" className="wide-input" required />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" className="wide-input" required />
            </div>

            <div className="input-group-inline">
            <div className="input-group">
              <label htmlFor="state">State:</label>
              <input type="text" id="state" name="state" className="wide-input" required />
            </div>
            </div>
            <div className="input-group-inline">
            <div className="input-group">
              <label htmlFor="zip">Zip Code:</label>
              <input type="text" id="zip" name="zip" className="wide-input" required />
            </div>
            </div>
          </form>
      </div>
      </header>
    </div>
  );
}
export default About;