type FormStep2Props = {
    userName: string;
    userMail: string;
    userPassword: string;
    onChange: (name: string, email: string, password: string) => void;
}


const FormStep2 = ({userName, userMail, userPassword, onChange}: FormStep2Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'name') {
            onChange(value, userMail, userPassword);
          } else if (name === 'email') {
            onChange(userName, value, userPassword);
          } else if (name === 'password') {
            onChange(userName, userMail, value);
          }
    }

    return ( 
        <div className='flex flex-col'>
            <label className='text-start'>Name</label>
            <input onChange={handleChange} value={userName} className='bg-slate-100' type="text" name='name' />
            <br />
            <label className='text-start'>Email</label>
            <input onChange={handleChange} value={userMail} className='bg-slate-100' type="email" name='email' />
            <br />
            <label className='text-start'>Password</label>
            <input onChange={handleChange} value={userPassword} className='bg-slate-100' type="password" name='password' />
        </div>
     );
}
 
export default FormStep2;