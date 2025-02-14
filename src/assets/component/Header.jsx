import { useContext } from 'react';
import { DataContext } from '../../App.jsx';



export function Header({ selectedCategory, setSelectedCategory}) {
  const {data} = useContext(DataContext)
  return(
    <>
      <h1>Header</h1>
    </>
  )
}