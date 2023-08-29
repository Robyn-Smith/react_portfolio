// import { useState } from "react";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import logo from './logo.svg';
// import './App.css';
// import Layout from "./components/Layout";

// import PortfolioDashboard from "./components/PortfolioDashboard";
// import Contact from "./components/Contact";
// import About from "./components/About";

// const pages = ["portfolio", "about", "contact"];

// function App() {
//   const [page, setPage] = useState("portfolio");

//   return (
//     <Layout pages={pages} onSetPage={setPage}>
//       {page === "portfolio" && <PortfolioDashboard />}
//       {page === "about" && <About />}
//       {page === "contact" && <Contact />}
//     </Layout>
//   )
// }
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;


import logo from './logo.svg';
import './App.css';
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => <PortfolioContainer />;

export default App;