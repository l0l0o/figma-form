import AccountTypeItem from "../components/AccountTypeItem";

type ChooseAccountTypeProps = {
  setUserAccount: (accountType: string) => void,
}

const ChooseAccountType = ({setUserAccount}: ChooseAccountTypeProps) => {
  
  const handleChange = (accountType: string) => {
    setUserAccount(accountType);
    console.log("2: ", accountType);
  }

  return ( 
    <div className='text-start'>
          <p className='text-gray-300'>Choose your account type :</p>
          <br />
          <AccountTypeItem
            title={account_type.PERSONAL_ACCOUNT}
            description={description.LOREM}
            onClick={handleChange}
            />            
          <br />
          <AccountTypeItem
            title={account_type.BUSINESS_ACCOUNT}
            description={description.LOREM}
            onClick={handleChange}
            />
          </div>
     )
    }
    
    enum account_type {
      PERSONAL_ACCOUNT = "Personal Account",
      BUSINESS_ACCOUNT = "Business Account",
    }
    
    enum description {
      LOREM = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }

export default ChooseAccountType;