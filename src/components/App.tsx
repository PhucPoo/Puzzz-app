
import { Container } from 'lucide-react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './SideBar'
import Face from './Face'

function App() {

  return (
    <>
      <div className=''>
        <div >
          <Header />
          <Face/>
        </div>
        <Sidebar />
        <div>
          <Footer/>
        </div>
      </div>
      
    </>
  )
}

export default App
