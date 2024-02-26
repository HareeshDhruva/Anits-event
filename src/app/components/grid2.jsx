import React from 'react'

const Grid2 = () => {
  return (
    <div className = "grid grid-cols-5 grid-rows-6 h-[600px] w-[80%] m-auto mb-10 p-4 gap-4">
        <div className="col-span-1 row-span-2 row-start-3 ring-1 rounded-2xl"></div>
        <div className="col-span-1 row-span-4 row-start-2 gap-4 flex flex-col rounded-2xl">
        <div className="h-1/2 rounded-2xl ring-1"></div>
        <div className="rounded-2xl ring-1 h-1/2">

        </div>
        </div>
        <div className="col-span-1 row-span-6 row-start-1 ring-1 rounded-2xl"></div>
        <div className="col-span-1 row-span-4 row-start-2 gap-4 flex flex-col rounded-2xl">
            <div className="h-1/2 rounded-2xl ring-1">

            </div>
            <div className="rounded-2xl h-1/2 ring-1">

            </div>
        </div>
        <div className="col-span-1 row-span-2 row-start-3 ring-1 rounded-2xl"></div>
    </div>
  )
}

export default Grid2
