type Step4Props = {
    username: string,
    usermail: string,
}

const Step4 = ({username, usermail}: Step4Props) => {
    return ( 
        <div className="flex flex-col items-center">
            <img className="w-20" src="./src/assets/congrats.svg" alt="" />
            <br />
            <h4>Congrats {username}</h4>
            <br />
            <h4>Registration successful</h4>
            <br />
            <h4>Email confirmation sent to {usermail}</h4>
        </div>
     );
}
 
export default Step4;