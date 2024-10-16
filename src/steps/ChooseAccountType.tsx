import AccountTypeItem from "../components/AccountTypeItem";
enum account_type {
  PERSONAL_ACCOUNT = "Personal Account",
  BUSINESS_ACCOUNT = "Business Account",
}

enum description {
  LOREM = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
}

const ChooseAccountType = () => {
    return ( 
        <div className='text-start'>
          <p className='text-gray-300'>Choose your account type :</p>
          <br />
          <AccountTypeItem
            title={account_type.PERSONAL_ACCOUNT}
            description={description.LOREM}
          />            
          <br />
          <AccountTypeItem
            title={account_type.BUSINESS_ACCOUNT}
            description={description.LOREM}
          />
          </div>
     )
}
 
export default ChooseAccountType;