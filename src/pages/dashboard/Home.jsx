import React from 'react'

const Home = () => { 
  const DashboardData = [
    {
      description: 'No. of Products', 
      number:'10',
    }
  ]; 

  return ( 
    <>
    <div className=' mt-20 mx-40'> 
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-center gap-4 mx-8 mt-8 ml-12 mb-4'> 
        {DashboardData.map((Dashboard, Index) => (
         <div className='flex flex-col justify-center items-center rounded-lg shadow-lg p-4 w-[300px] font-bold'key={Index}> 
          <p className='text-justify'>{Dashboard.description}</p> 
          <h1 className='rounded-full h-36 w-40 object-cover font-semibold text-lg my-4 flex items-center justify-center bg-red-200'>
            {Dashboard.number}</h1> 
         </div>
        ))}
      </div>
      </div> 
    </>
  )
}

export default Home