import { useEffect, useState } from "react"
import { HomeContainer } from "../components/HomeContainer"
import { Loading } from "../components/Loading"

export default function Home() {
  
  const [isLoading,setIsLoading] = useState(true)

useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(false)
  },1800)
},[])

  if (isLoading === true){
    return (
      <Loading/>
    )
  }

  return (
    <HomeContainer>
      <header><div>Y</div><div>g</div><div>o</div><div>r</div>
      <div>F</div><div>e</div><div>r</div><div>r</div><div>e</div><div>i</div><div>r</div><div>a</div><div>.</div></header>
    </HomeContainer>
  )
}
