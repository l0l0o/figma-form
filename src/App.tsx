import { useState } from 'react';
import './App.css'
import ChooseAccountType from './steps/step1/ChooseAccountType'
import FormStep2 from './steps/step2/FormStep2';
import FormStep3 from './steps/step3/FormStep3';
import Button from './components/Button';
import Step4 from './steps/step4/Step4';

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

    if (UserAccount.Age !== null && UserAccount.Interests !== "" && UserAccount.Description !== "") {
      setStep((prev) => ({ ...prev, thirdStep: true}));
    }  };

  const [step, setStep] = useState({
    firstStep: false,
    secondStep: false,
    thirdStep: false,
  });

  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page !== 5) {
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

          {page !== 4 && (
            <div>
              <h1 className={Style.title}>Registration Form</h1>
              <br />
              <h4 className={Style.description}>Please fill out this form with the required information</h4>
              <br /><br />

              <div className='flex flex-row gap-10 justify-center'>
                <div className='flex flex-col items-center'>
                  <div className={`w-8 h-8 border-2 font-bold ${step.firstStep === true ? "border-violet-400 bg-violet-400 text-white" : "border-slate-200 text-slate-300"}  rounded-full`}>
                    1
                  </div>
                  <label className={`${step.firstStep === true ? "text-violet-400" : "text-slate-300"}`}>Account Type</label>
                </div>
                <div className='flex flex-col items-center'>
                  <div className={`w-8 h-8 border-2 font-bold ${step.secondStep === true ? "border-violet-400 bg-violet-400 text-white" : "border-slate-200 text-slate-300"}  rounded-full`}>
                    2
                  </div>
                  <label className={`${step.secondStep === true ? "text-violet-400" : "text-slate-300"}`}>Personal Information</label>
                </div>
                <div className='flex flex-col items-center'>
                  <div className={`w-8 h-8 border-2 font-bold ${step.thirdStep === true ? "border-violet-400 bg-violet-400 text-white" : "border-slate-200 text-slate-300"}  rounded-full`}>
                    3
                  </div>
                  <label className={`${step.thirdStep === true ? "text-violet-400" : "text-slate-300"}`}>Profile Data</label>
                </div>
              </div>
              <br />
            </div>
          )}

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
            userAge={UserAccount.Age}
            userInterests={UserAccount.Interests}
            userDescription={UserAccount.Description}
            onChange={handleAccountThirdStep}

            />
          )}

          {page === 4 && (
            <Step4
              username={UserAccount.Name}
              usermail={UserAccount.Email}
            />
          )}

          <br />
          {page !== 4 && (
                      <div className='flex gap-2 w-full justify-end'>
                      {page !== 1 && (
                        <Button
                          text='Previous'
                          bg_color='bg-transparent'
                          text_color='text-slate-300 hover:underline'
                          onClick={previousPage}
                        />
                      )}
                      <Button
                        text='Next'
                        bg_color='bg-violet-400'
                        text_color='text-slate-50 '
                        onClick={nextPage}
                      />
                    </div>
          
          )}
        </div>
    </>
  )
}

const Style = {
  title: "text-slate-800 font-bold text-3xl",
  description: "text-gray-300 text-sm"
}

export default App
