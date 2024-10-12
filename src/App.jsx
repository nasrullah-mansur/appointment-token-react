/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import FoodCart from "./foodCart/FoodCart"
import { foodData } from "./foodCart/data";
import axios from "axios";


function App() {

  let [index, setIndex] = useState(0);
  let [data, setData] = useState([]);

  let clickHandler = () => {
    setIndex((old => {
      if(data.length - 1 > old) {
        return old + 1;
      }
      else {
        return old;
      }
    }));
  }


  useEffect(() => {
    // let getData = fetch('https://course.divinecoder.com/food/random/10')
    // .then(res => res.json())
    // .then(data => setData(data))

    // async function getData() {
    //   let data = await axios.get('https://course.divinecoder.com/food/random/10');
    //   setData(data.data);
    // }

    // getData()

    axios.get('https://course.divinecoder.com/food/random/10')
    .then(res => {
      setData(res.data)
      console.log(res);
      
    })
    
    

  }, [index]);

  

  if(data.length == 0) return <div>Datagula rastay ase please wait ...</div>
  return <FoodCart dataLength={data.length} dataIndex={index} onClick={clickHandler} data={data[index]} />

}

export default App
