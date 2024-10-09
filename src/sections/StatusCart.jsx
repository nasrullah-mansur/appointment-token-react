/* eslint-disable react/prop-types */
function StatusCart(props) {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-6">
        <div className={`${props.bgColor} text-white px-3 py-5 text-2xl flex justify-between mb-6`}>
            <span className="block">Active Token</span>
            <span className="block">5</span>
        </div>

        <ul>
            <li className=" flex w-100 p-3 rounded-sm mx-4 mb-3 bg-gray-200">
                <div>
                    <p className="text-xl">Nasrullah Mansur</p>
                    <span>01828767676</span>
                </div>
                
                <button className={`${props.bgColor} ml-auto text-white text-lg font-bold px-3`}>Token No 01</button>
            </li>
            
        </ul>
    </div>
  )
}

export default StatusCart