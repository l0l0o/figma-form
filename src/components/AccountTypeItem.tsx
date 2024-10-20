type AccountTypeItemProps = {
    title: string;
    description: string;
    onClick: (accountType: string) => void;
}

const AccountTypeItem = ({title, description, onClick} : AccountTypeItemProps) => {
    
    const handleClick = () => {
      onClick(title);
      console.log("1: ", title);
    }

    return ( 
        <button onClick={handleClick} style={{cursor:'pointer'}} className='flex flex-row align-middle gap-x-4 p-4'>
              <img src="./src/assets/account_type.svg" alt="" />
              <div className='flex flex-col text-start justify-center'>
                <h4 className='font-bold'>{title}</h4>
                <p className='text-gray-300'>{description}</p>
              </div>
        </button>
     );
}
 
export default AccountTypeItem;