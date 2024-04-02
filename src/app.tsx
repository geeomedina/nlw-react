import './app.css'
import { Header } from './components/header'
import { AttendeeList } from './components/attendee-list'

export function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
