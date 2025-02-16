import { useEffect, useState, createContext } from "react"
import { getPage } from "./helper";
export const DataContext = createContext(null);

export default function App() {
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState("")
  const [url, setUrl] = useState(location.hash.substring(1) || "/");

  useEffect(() => {
    async function getData() {
      const data = await fetch("/data/data.json").then(r => r.json())
      setData(data.productRequests)
      setCurrentUser(data.currentUser)

      window.addEventListener("hashchange", () => setUrl(location.hash.substring(1) || "/"));
    }

    getData()
  }, []);

  const page = getPage(url);
  return (
    <>
      <DataContext.Provider value={{ data, setData, currentUser, setCurrentUser}}>
        {data && page.component}
      </DataContext.Provider>
    </>
  )
}

