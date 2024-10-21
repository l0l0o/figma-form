const FormStep3 = () => {
    return ( 
        <form className='flex flex-col'>
            <label className='text-start'>Age</label>
            <input className='bg-slate-100' type="text" name='age' />
            <br />
            <label className='text-start'>Area of interests</label>
            <input className='bg-slate-100' type="text" name='interests' />
            <br />
            <label className='text-start'>Description</label>
            <input className='bg-slate-100' type="description" name='description' />
        </form>
     );
}
 
export default FormStep3;