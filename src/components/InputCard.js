import { useRef } from 'react';
import './input-card.css'

const InputCard = ({ setLatitude, setLongitude }) => {
    const form = useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLongitude(e.target.longitude.value);
        setLatitude(e.target.latitude.value);
    }

    return (
        <form ref={form} className='input-wrapper' onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name='latitude' placeholder='Latitude'/>
            <input type="text" name='longitude' placeholder='Longitude'/>
            <button>Submit</button>
        </form>
    );
};

export default InputCard;
