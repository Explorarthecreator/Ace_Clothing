

function BoxSpinner({col}) {
  return (
    <div className=" h-5/6 flex items-center justify-center">
        <span className={`loading loading-bars w-24 text-${col}`}></span>
    </div>
  )
}

export default BoxSpinner