import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [val, setval] = useState("");
  let [val1, setval1] = useState("");
  let [ans, setans] = useState("");
  let [array, setarray] = useState([]);
  let arr = [];
  let arr1 = [];
  let hour;
  let minute;
  let arr2 = [];
  let data = arr[1];
  let last;

  const sloat = () => {
    arr = val.split(":");
    console.log(arr);
    arr1 = val1.split(":");
    console.log(arr1);

    hour = Math.abs(arr1[0] - arr[0]);
    console.log(hour);
    minute = Math.abs(arr1[1] - arr[1]);
    console.log(minute);

    let hourslot = hour * 6;
    let minuteslot = minute / 10;
    let totalslot = hourslot + minuteslot;
    console.log(totalslot);

    for (var i = 0; i <=totalslot; i++) {
      arr2[i] = arr[0] + ":" + arr[1] + "=" + (i+1);
      arr[1] = parseInt(arr[1]) + parseInt(10);
      if (arr[1] >= 60) {
        arr[1] = parseInt(arr[1]) - 60;
        arr[0] = parseInt(arr[0]) + parseInt(1);
      }
      if (arr[1] < 10) {
        arr[1] = '0' + arr[1];
      }
    }
    arr2[i] = arr[0] + ":" + arr[1] + "=" + (i+1);
    setarray(arr2);

  }

  return (
    <>
      <input type='text' placeholder='start-time' onChange={(e) => setval(e.target.value)}></input><br></br>
      <input type='text' placeholder='end-time' onChange={(e) => setval1(e.target.value)}></input><br></br>
      <input type='button' value="click here" onClick={sloat}></input>
      <table border={1}>
        <thead>
          <th>Total Sloats</th>
        </thead>
        {
          array.map((ele) => {
            return (
              <tr>
                <td>{ele}</td>
              </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default App;

// import { useState } from 'react';
// import './App.css';

// function App() {

//   let [val1, setval1] = useState('0');
//   let [val2, setval2] = useState('0');
//   let [v3, setv3] = useState([]);
//   let arr = [];

//   const calc = () => {
//     arr = []
//     let temp = val1.split(":");
//     let temp1 = Number(temp[0]);
//     let temp2 = Number(temp[1]);
//     temp = val2.split(":");
//     let temp3 = Number(temp[0]);
//     let temp4 = Number(temp[1]);
//     if (temp2 > 60 || temp4 > 60) {
//       alert("enter valid data");
//     }
//     else {
//       for (let i = temp1; i <= temp3; i++) {
//         for (let j = 10; j <= 60; j += 10) {
//           if (i == temp1 && j <= temp2) { 
//             continue
//           }
//           else if (i == temp3 && j > temp4) {
//             break;
//           }
//           else {
//             arr.push(String(i + ':' + j))
//           }
//         }
//       }
//       setv3(arr)
//       console.log([...v3])
//       console.log(arr)
//     }
//   }

//   return (
//     <>
//       <input type="text" value={val1} onChange={(e) => { setval1(e.target.value) }} />
//       <input type="text" value={val2} onChange={(e) => { setval2(e.target.value) }} />
//       <input type="button" value="Click Me" onClick={calc} />
//       {
//         v3.map((i) => {
//           return (
//             <>
//               <br/>
//               {i}
//             </>
//           )
//         })
//       }
//     </>
//   );
// }

// export default App;
