type FormStep3Props = {
    userAge: number;
    userInterests: string;
    userDescription: string;
    onChange: (age: number, interests: string, description: string) => void;

}

const FormStep3 = ({userAge, userInterests, userDescription, onChange}: FormStep3Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'age') {
            const ageValue = Number(value);
            onChange(ageValue, userInterests, userDescription);
          } else if (name === 'interests') {
            onChange(userAge, value, userDescription);
          } else if (name === 'description') {
            onChange(userAge, userInterests, value);
          }
    }

    return ( 
        <form className='flex flex-col'>
            <label className='text-start'>Age</label>
            <input onChange={handleChange} value={userAge} className='bg-slate-100 focus:border-violet-300' type="number" name='age' />
            <br />  
            <label className='text-start'> Area of interests</label>
            <input onChange={handleChange} value={userInterests} className='bg-slate-100 focus:border-violet-300' type="text" name='interests' />
            <br /> 
            <label className='text-start'> Description</label>
            <input onChange={handleChange} value={userDescription} className='bg-slate-100 focus:border-violet-300' type="text" name='description' />
        </form>
     );
}
 
export default FormStep3;