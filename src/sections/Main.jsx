import FormArea from "./FormArea"
import StatusArea from "./StatusArea"


function Main() {
  return (
    <div className="min-h-screen bg-gray-200">
        <h1 className="text-3xl text-center pt-6">Token Status</h1>

        <div className="grid grid-cols-2 gap-3 max-w-screen-xl mx-auto mt-6">
            <FormArea />
            <StatusArea />
        </div>
    </div>
  )
}

export default Main