import { useState } from 'react';
import './App.css'
import ChooseAccountType from './steps/step1/ChooseAccountType'
import FormStep2 from './steps/step2/FormStep2';
import FormStep3 from './steps/step3/FormStep3';

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

    if (UserAccount.AccountType !== "") {
      setStep((prev) => ({ ...prev, firstStep: true}));
    }
  };

  const handleAccountSecondStep = (name: string, email: string, password: string) => {
    setUserAccount((prev) => ({ ...prev, Name: name }));
    setUserAccount((prev) => ({ ...prev, Email: email }));
    setUserAccount((prev) => ({ ...prev, Password: password }));

    if (UserAccount.Name !== "" && UserAccount.Email !== "" && UserAccount.Password !== "") {
      setStep((prev) => ({ ...prev, secondStep: true}));
    }
  };

  const handleAccountThirdStep = (age: number, interests: string, description: string) => {
    setUserAccount((prev) => ({ ...prev, Age: age }));
    setUserAccount((prev) => ({ ...prev, Interests: interests }));
    setUserAccount((prev) => ({ ...prev, Description: description }));

    setStep((prev) => ({ ...prev, thirdStep: true}));
  };

  const [step, setStep] = useState({
    firstStep: true,
    secondStep: false,
    thirdStep: false,
  });

  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page !== 3) {
      setPage(page+1);
    }
  }

  const previousPage = () => {
    if (page !== 1) {
      setPage(page-1);
    }  
  }

  return (
    <>
        <div id='form-view' style={{width: 655}} className='container flex flex-col bg-white-50 rounded-md p-8'>
          <h1 className={Style.title}>Registration Form</h1>
          <br />
          <h4 className={Style.description}>Please fill out this form with the required information</h4>
          <br /><br />
          
          {page === 1 && (
            <ChooseAccountType
              setUserAccount={handleAccountTypeChange}
            />
          )}

          {page === 2 && (
            <FormStep2
            userName={UserAccount.Name}
            userMail={UserAccount.Email}
            userPassword={UserAccount.Password}
            onChange={handleAccountSecondStep}
            />
          )}

          {page === 3 && (
            <FormStep3
              
            />
          )}

          <br />
          <div className='flex gap-2 w-full justify-end'>
            {page !== 1 && (
              <button onClick={previousPage} className='p-4 bg-transparent hover:underline text-slate-300 rounded-md text-sm'>Previous</button>
            )}
            <button onClick={nextPage} className='p-4 bg-violet-400 text-slate-50 rounded-md text-sm'>Next</button>
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
