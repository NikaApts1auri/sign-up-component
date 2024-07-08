import { useState } from "react"
import Succes from "./components/Succes"
import Form from "./components/Form"

export default function App() {
  const [isSucces,setIsSucces]=useState<boolean>(false)
  return (
    <>
    {isSucces?<Succes/>:<Form setIsSucces={setIsSucces} />}
    </>
  )
}
