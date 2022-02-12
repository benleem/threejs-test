import { useRef } from 'react';
import './input-card.css'

const InputCard = ({ rotation, setRotation, setLatitude, setLongitude}) => {
    const form = useRef();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLongitude(e.target.longitude.value);
        setLatitude(e.target.latitude.value);
        setRotation(false);
    }

    return (
        <div className='input-wrapper'>
            <form ref={form} onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name='latitude' placeholder='Latitude'/>
                <input type="text" name='longitude' placeholder='Longitude'/>
                <button>Submit</button>
            </form>
            <button onClick={() => setRotation(!rotation)}>{rotation === true ? 'Pause': 'Play'}</button>
        </div>
        
    );
};

export default InputCard;