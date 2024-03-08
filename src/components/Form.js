//Form.js

const Form = (props) =>{

    return(
        <form>
            <input type="text" name="city" placeholder="どこの天気知りたい？" onChange={e => props.setCity(e.target.value)}/>
            <button type="submit" onClick={props.getWeather}>お天気チェック</button>
        </form>
    );
};

export default Form;