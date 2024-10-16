import './App.css'
import ChooseAccountType from './steps/ChooseAccountType'

function App() {

  const [accountType, setAccountType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(18);
  const [intests, setInterests] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
        <div id='form-view' style={{width: 655}} className='container flex flex-col bg-white-50 rounded-md p-8'>
          <h1 className='text-3xl main-text-color font-bold'>Registration Form</h1>
          <br />
          <h4 className='text-sm text-gray-300'>Please fill out this form with the required information</h4>
          <br /><br />

          <ChooseAccountType/>
          <br />
          <button className='p-4 bg-violet-400 text-slate-50 rounded-md text-sm'>Previous</button>
        </div>
    </>
  )
}

export default App
