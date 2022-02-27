import { useState, useEffect} from 'react';
import styles from './pin-form.module.css';

const PinForm = ({ setPinActive, setLatitude, setLongitude, pinInputBar }) => {
    const [formValues, setFormValues] = useState({ latitude: "",longitude: "" })
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {};
        if (!values.latitude || values.latitude > 90 || values.latitude < -90) {
            errors.latitude = 'Please enter a number between -90 and 90';
        }
        if (!values.longitude || values.longitude > 180 || values.longitude < -180) {
            errors.longitude = 'Please enter a number between -180 and 180'
        }
        return errors;
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit === true) {
            // update lon/lat state
            setLatitude(Number(formValues.latitude));
            setLongitude(Number(formValues.longitude));
            
            // close pin tab
            setPinActive(false);
        }
    }, [formErrors, isSubmit])
    

    return (
        <form className={styles.coordinateForm} onSubmit={(e) => handleSubmit(e)} noValidate>
            <div>
                <input ref={pinInputBar} className="latitude-input" type="number" autoComplete='off' step='any' min={-90} max={90} name='latitude' placeholder='Latitude' value={formValues.latitude}
                onChange={(e) => handleChange(e)}
                />
                {formErrors.latitude ? <p>{formErrors.latitude}</p> : null}
            </div>
            <div>
                <input className="longitude-input" type="number" autoComplete='off' step='any' name='longitude' min={-180} max={180} placeholder='Longitude' value={formValues.longitude}
                onChange={(e) => handleChange(e)}
                />
                {formErrors.longitude ? <p>{formErrors.longitude}</p> : null}
            </div>
            <button type='coordinate-submit'>Submit</button>
        </form>
    )
}

export default PinForm