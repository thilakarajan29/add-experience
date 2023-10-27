import Navbar from './navbar'
import BottomNav from './buttomnav'
import { AiFillPlusCircle} from 'react-icons/ai'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1 className="heading">
          If you have relevant work experience, add it here.{' '}
        </h1>
        <p>
          Professional who add their experience are twice as likely to win work.
          But if you're just starting out,you can still create a great profile.
          Just head on to the next page.
        </p>
      </div>
      <div className="add-experiance">
        <AiFillPlusCircle className="icon" />
        <p>Add Experiance</p>
      </div>
      <BottomNav />
    </div>
  )
}

export default App
