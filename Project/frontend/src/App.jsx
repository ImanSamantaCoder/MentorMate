
import './App.css'
import Advertise from './component/Advertise'
import Collaborator from './component/collaborator'
import Footer from './component/Footer'
import Navbar from './component/navbar'


function App() {
   return <>
     <Navbar/>
     <div className='mt-4 add' style={{ backgroundColor: "black", width: "100vw", padding: "0px 0" }}>
     <Advertise />
     </div>
     <h1 class="display-1" style={{textAlign:"center"}}>Our collaborators</h1>
     <div >
        <Collaborator/>
     </div>
    <Footer/>
      
    </>
  
}

export default App
