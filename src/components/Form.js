//Form.js

const Form = ({city,setCity,getWeather}) =>{

    return(
        <>
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="どこ？" onChange={e => setCity(e.target.value)} value={city}/>
            <button type="submit">チェック!</button>
        </form>
        <div>
        <p>海外も大丈夫やで</p>
        </div>
        </>
    );
};

export default Form;