import Card from '@/components/card'
import styles from './page.module.css'

export default function Home() {
  return (
    <main style={{display:'flex', gap:'20px'}}>
      <Card icon='chat'/>
      <Card icon='cog'/>
      <Card icon='home'/>
      <Card icon='profile'/>
      <Card icon='world'/>
    </main>
  )
}
