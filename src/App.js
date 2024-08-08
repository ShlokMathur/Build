// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [url, setUrl] = useState('');
//   const [metrics, setMetrics] = useState(null);
//   const [error, setError] = useState(null);

//   const analyzeUrl = async () => {
//     try {
//       const response = await axios.post('http://localhost:5002/analyze', { url });
//       setMetrics(response.data);
//       setError(null);
//     } catch (err) {
//       setError(err.response ? err.response.data.error : 'Server Error');
//       setMetrics(null);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Website Performance Analyzer</h1>
//       <input
//         type="text"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         placeholder="Enter website URL"
//       />
//       <button onClick={analyzeUrl}>Analyze</button>
//       {metrics && (
//         <div>
//           <h2>Performance Metrics</h2>
//           <p>Page Load Time: {metrics.pageLoadTime} ms</p>
//           <p>Total Request Size: {metrics.totalRequestSize} bytes</p>
//           <p>Number of Requests: {metrics.numberOfRequests}</p>
//         </div>
//       )}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState(null);

  const analyzeUrl = async () => {
    try {
      const response = await axios.post('http://localhost:5003/analyze', { url });
      setMetrics(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Server Error');
      setMetrics(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Website Performance Analyzer</h1>
      </header>
      <main>
        <div className="input-container">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL"
          />
          <button onClick={analyzeUrl}>Analyze</button>
        </div>
        {metrics && (
          <div className="metrics">
            <h2>Performance Metrics</h2>
            <p>Page Load Time: <span>{metrics.pageLoadTime}</span> ms</p>
            <p>Total Request Size: <span>{metrics.totalRequestSize}</span> bytes</p>
            <p>Number of Requests: <span>{metrics.numberOfRequests}</span></p>
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </main>
      <footer>
        <p>© 2024 SpeedX</p>
      </footer>
    </div>
  );
}

export default App;
