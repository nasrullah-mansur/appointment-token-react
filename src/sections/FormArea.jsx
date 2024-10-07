

function FormArea() {
  return (
    <div>
        <div className="bg-white shadow-sm p-4 rounded-lg">
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <small className="pb-3 text-red-500 hidden">Something is going wrong.</small>
            <input type="text" placeholder="Type here" className="input input-bordered w-full mt-3" />
            <small className="pb-3 text-red-500 hidden">Something is going wrong.</small>
            <input type="text" placeholder="Type here" className="input input-bordered w-full mt-3" />

            <button className="mt-3 btn btn-accent">Add Token</button>
        </div>
        <h2 className="text-3xl pt-4 text-center font-bold">Total Tokens 120</h2>
    </div>
  )
}

export default FormArea