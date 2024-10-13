import { useState } from "react"
import Gallery from "../section/gallery/Gallery"
import Header from "../section/header/Header"
import { useEffect } from "react";
import axios from "axios";


function Loading() {
    return (
        <div className="w-full min-h-[400px] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>    
        </div> 
    )
}

function Layout() {

    let [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            let galleryData = await axios.get('https://course.divinecoder.com/food/random/10');
            setData(galleryData.data);
        }
        getData();
    }, []);

    let ascendingHandler = () => {
      setData(item => {
        return item.toSorted((a, b) => a.name.localeCompare(b.name));
      })
      
      // setData(updateData);
      
    }

    let descendingHandler = () => {
      let updateData = data.toSorted((a, b) => b.name.localeCompare(a.name));
      setData(updateData);
    }

  return (
    <div className="w-full pb-8 min-h-screen bg-slate-300 pt-6">
      <div className="max-w-6xl m-auto pt-6 bg-white p-5 rounded shadow ">
        <Header onAscending={ascendingHandler} onDescending={descendingHandler} />

        {
            data.length == 0 
            ? 
            <Loading />
            : 
            <Gallery galleryItemsData={data} />
        }
        
      </div>
    </div>
  )
}

export default Layout