import { useEffect, useState } from "react";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project"
function App() {
  const [isLoading,setIsLoading] = useState(true)
  const [tours,setTours] = useState([])
const fetchTours = async (externalUrl)=>{

try{
    const resp = await fetch(externalUrl)
 if (!resp.ok) {
  console.log("terrible");
 }
  const convertedResponse = await resp.json()
  setIsLoading(false)
  setTours(convertedResponse)
}
catch(err){
  console.log(err.message);
}
}
  useEffect(()=>{

fetchTours(url)

  },[])
 const removeTour = (id)=>{
const remove = tours.filter(tour=> tour.id !== id)
setTours(remove)

 }
 

  return (
   <>
   {isLoading ? <h1>Loading</h1> : !tours.length ? <div className="no-tours">
<h1>no tours left</h1>
<button onClick={()=> fetchTours(url)} className="refresh">refresh</button>
   </div>: <><header>
      <h1>Our Tours</h1>
      <hr/>
    </header>
    <section>
    {tours.map(tour =>{
      return <Tours key={tour.id}{...tour} setTours={setTours} removeTour={removeTour}/>
    })}
    </section>
    </>}
    </>
  
  )
}

export default App;
