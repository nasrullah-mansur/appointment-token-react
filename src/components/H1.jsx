/* eslint-disable react/prop-types */


function H1(props) {

    let { dataNum } = props;
    

  return (
    <h1 className="text-3xl pt-4 text-center font-bold">Total Tokens {dataNum}</h1>
  )
}

export default H1