// import { useState } from 'react';
// import PortfilioItem from './PortfilioItem';

// function PortfilioList({ portfolio, onFilter }) {
//     return (
//         <div className="w-100">
//             <div className="portfolio-filter">
//                 <select onChange={onFilter}>
//                     <option value="">All</option>
//                     <option value="react">React</option>
//                     <option value="heroku">Heroku</option>
//                     <option value="nextjs">NextJS</option>
//                     <option value="firebase">Firebase</option>
//                 </select>
//             </div>
//             {
//                 portfolio.map((item, index) => {
//                     return (<PortfilioItem item={item} />)
//                 })
//             }
//         </div>
//     )
// }

// export default PortfilioList