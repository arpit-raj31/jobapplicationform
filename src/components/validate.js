const validate = (values) => {
    let errors = {};

    if (!values.fullName.trim()) {
        errors.fullName = 'Full Name is required';
    }
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.phoneNumber.trim()) {
        errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(values.phoneNumber)) {
        errors.phoneNumber = 'Phone Number is invalid';
    }
    if (['Developer', 'Designer'].includes(values.position)) {
        if (!values.experience || values.experience <= 0) {
            errors.experience = 'Relevant Experience is required and must be greater than 0';
        }
    }
    if (values.position === 'Designer') {
        if (!values.portfolioUrl) {
            errors.portfolioUrl = 'Portfolio URL is required';
        } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolioUrl)) {
            errors.portfolioUrl = 'Portfolio URL is invalid';
        }
    }
    if (values.position === 'Manager') {
        if (!values.managementExperience.trim()) {
            errors.managementExperience = 'Management Experience is required';
        }
    }
    if (values.skills.length === 0) {
        errors.skills = 'At least one skill must be selected';
    }
    if (!values.interviewTime) {
        errors.interviewTime = 'Preferred Interview Time is required';
    }

    return errors;
};

export default validate;
