'use client'
import { useState } from 'react'
import Card from '@/components/card'
import Form from '@/components/form'
import styles from './page.module.css'

export default function Home() {
  const [iconList, setIconList] = useState([{
    icon: 'chat',
    title: 'Nuestro chat',
    animation: true,
  }]);
  
  const addNewCard = (icon:string, title:string, animation: boolean)=> {
    setIconList([...iconList, {icon, title, animation}])
  };

  return (
    <main style={{display:'flex', gap:'20px'}}>
      <Form handleAddNewCard={addNewCard}/>
      {
        iconList.map((iconItem, i) => <Card icon={iconItem.icon} title={iconItem.title} animation={iconItem.animation} key={i}/>)
      }
    </main>
  )
}
