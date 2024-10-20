import { useState } from 'react';
import './App.css'
import ChooseAccountType from './steps/step1/ChooseAccountType'

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
  };

  const handleAccountSecondStep = (name: string, email: string, password: string) => {
    setUserAccount((prev) => ({ ...prev, Name: name }));
    setUserAccount((prev) => ({ ...prev, Email: email }));
    setUserAccount((prev) => ({ ...prev, Password: password }));
  };

  const handleAccountThirdStep = (age: number, interests: string, description: string) => {
    setUserAccount((prev) => ({ ...prev, Age: age }));
    setUserAccount((prev) => ({ ...prev, Interests: interests }));
    setUserAccount((prev) => ({ ...prev, Description: description }));
  };

  const [step, setStep] = useState(1);

  const increaseSteps = () => {
    if (step !== 3) {
      setStep(step + 1);
    }
  }

  const decreaseSteps = () => {
    if (step !== 1) {
      setStep(step - 1);
    }
  }



  return (
    <>
        <div id='form-view' style={{width: 655}} className='container flex flex-col bg-white-50 rounded-md p-8'>
          <h1 className={Style.title}>Registration Form</h1>
          <br />
          <h4 className={Style.description}>Please fill out this form with the required information</h4>
          <br /><br />
          
          {step === 1 && (
            <ChooseAccountType
              setUserAccount={handleAccountTypeChange}
            />
          )}

          

          <br />
          <div className='flex gap-2 w-full justify-end'>
            {step > 1 && (
              <button onClick={decreaseSteps} className='p-4 bg-transparent hover:underline text-slate-300 rounded-md text-sm'>Previous</button>
            )}
            <button onClick={increaseSteps} className='p-4 bg-violet-400 text-slate-50 rounded-md text-sm'>Next</button>
          </div>
        </div>
    </>
  )
}

const Style = {
  title: "text-slate-800 font-bold text-3xl",
  description: "text-gray-300 text-sm"
}

export default App
