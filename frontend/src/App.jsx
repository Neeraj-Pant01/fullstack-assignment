import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import axios from "axios"

const App = () => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  const getAllcards = async() =>{
    try{
      const response = await axios.get(`http://localhost:7000/api/v1/cards?search=${search && search}`)
      setCards(response.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getAllcards();
  },[])

  return (
    <div>
      <Navbar />
      <div className="flex h-[50vh] bg-[#e4e6f2] items-center justify-center flex-col gap-5">
        <h1 className='text-[48px] font-semibold'>HOW CAN WE HELP ?</h1>
        <div className="flex w-[40%] items-center justify-between bg-[white] gap-[10px] border border-[black] px-4 rounded-sm">
          <input type='text' placeholder='Search' className='px-2 py-3 border-none outline-none flex-1' onChange={(e)=>setSearch(e.target.value)} />
          <div className='cursor-pointer' onClick={getAllcards}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>

          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  gap-[50px] flex-wrap py-32 px-44">
        {
          cards.length > 0 &&
          cards.map((c,i)=><Card key={i} c={c} />)
        }
      </div>

      <Footer />
    </div>
  )
}

export default App
