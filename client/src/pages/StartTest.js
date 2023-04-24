// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';


// export const TestPage = () => {
//   const [hasTakenTest, setHasTakenTest] = useState(false);

//   const {user}= useSelector(
//     (state) => state.auth
//   )

//   const userId=user._id;

//   useEffect(() => {
//     async function checkTestTaken() {
//       try {
//         const response = await axios.get(`/user/test/checkuser/${userId}`);
//         if (response.data.length > 0) {
//           setHasTakenTest(true);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     checkTestTaken();
//   }, [userId]);

//   async function handleStartTest() {
//     if (hasTakenTest) {
//       alert('You have already taken the test');
//       return;
//     }
//     // Allow user to take the test
//     // ...
//   }

//   return (
//     <div>
//       {hasTakenTest ? (
//         <p>You have already taken the test</p>
//       ) : (
//         <Link to="/starttest"><button className='submit' onClick={handleStartTest}>Start Test</button></Link>
//       )}
//     </div>
//   );
// }
