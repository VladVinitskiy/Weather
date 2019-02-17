import React from 'react';

const Form = props =>(
    <form onSubmit={props.gettingWeather}>
        <input type='text' name='city' autoComplete='off' placeholder='City'/>
        <button>Get weather</button>
    </form>
);

export default Form;
