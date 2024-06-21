import { useState, useEffect } from 'react';

const useForm = (validate) => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        position: '',
        experience: '',
        portfolioUrl: '',
        managementExperience: '',
        skills: [],
        interviewTime: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setValues((prevValues) => ({
                ...prevValues,
                skills: checked
                    ? [...prevValues.skills, value]
                    : prevValues.skills.filter((skill) => skill !== value)
            }));
        } else {
            setValues({
                ...values,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            alert(JSON.stringify(values, null, 2));
        }
    }, [errors, isSubmitting, values]); 
    return {
        values,
        errors,
        handleChange,
        handleSubmit
    };
};

export default useForm;
