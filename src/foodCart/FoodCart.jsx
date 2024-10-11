/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Button from "./Button";


function FoodCart(props) {
    let {image, name} = props.data;

  return (
    <div className="w-full h-screen bg-red-100 flex justify-center items-center">
        <div className="w-4/12 bg-white p-4 rounded-sm shadow-sm">
            <img className="w-full" src={image} alt="" />
            <h2 className="text-2xl py-3">{name}</h2>

            <Button onClick={props.onClick} />
        </div>
    </div>
  )
}

export default FoodCart