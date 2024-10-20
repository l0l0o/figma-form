import { useState } from 'react';
import './App.css'
import ChooseAccountType from './steps/ChooseAccountType'

function App() {
  
  const [UserAccount, setUserAccount] = useState({
    AccountType: "",

    Name: "",
    Email: "",
    Password: "",
    
    Age: (18),
    Interests: "",
    Description: "",
  })

  const handleAccountTypeChange = (accountType: string) => {
    setUserAccount((prev) => ({ ...prev, AccountType: accountType }));
    console.log('clicked');
    console.log(UserAccount);
  };

  // const [step, setStep] = useState(1);

  return (
    <>
        <div id='form-view' style={{width: 655}} className='container flex flex-col bg-white-50 rounded-md p-8'>
          <h1 className={Style.title}>Registration Form</h1>
          <br />
          <h4 className={Style.description}>Please fill out this form with the required information</h4>
          <br /><br />

          <ChooseAccountType
            setUserAccount={handleAccountTypeChange}
          />

          <br />
          <button className='p-4 bg-violet-400 text-slate-50 rounded-md text-sm'>Previous</button>
        </div>
    </>
  )
}

const Style = {
  title: "text-slate-800 font-bold text-3xl",
  description: "text-gray-300 text-sm"
}

export default App
