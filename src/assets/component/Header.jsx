import { useContext, useState } from 'react';
import { Data } from '../../App.jsx';



export function Header({ selectedCategory, setSelectedCategory }) {
  const { data } = useContext(Data)
  console.log(data);
  return (
    <>
    </>
  )
}