import React from 'react';
import useForm from './useForm';
import validate from './validate';
import './styles.css';
const JobApplicationForm = () => {
    const { values, errors, handleChange, handleSubmit } = useForm(validate);

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label>Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    required
                />
                {errors.fullName && <p>{errors.fullName}</p>}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Phone Number</label>
                <input
                    type="number"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    required
                />
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            </div>
            <div>
                <label>Applying for Position</label>
                <select
                    name="position"
                    value={values.position}
                    onChange={handleChange}
                >
                    <option value="">Select a position</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                </select>
                {errors.position && <p>{errors.position}</p>}
            </div>
            {['Developer', 'Designer'].includes(values.position) && (
                <div>
                    <label>Relevant Experience (years)</label>
                    <input
                        type="number"
                        name="experience"
                        value={values.experience}
                        onChange={handleChange}
                        required
                    />
                    {errors.experience && <p>{errors.experience}</p>}
                </div>
            )}
            {values.position === 'Designer' && (
                <div>
                    <label>Portfolio URL</label>
                    <input
                        type="text"
                        name="portfolioUrl"
                        value={values.portfolioUrl}
                        onChange={handleChange}
                        required
                    />
                    {errors.portfolioUrl && <p>{errors.portfolioUrl}</p>}
                </div>
            )}
            {values.position === 'Manager' && (
                <div>
                    <label>Management Experience</label>
                    <textarea
                        name="managementExperience"
                        value={values.managementExperience}
                        onChange={handleChange}
                        required
                    />
                    {errors.managementExperience && <p>{errors.managementExperience}</p>}
                </div>
            )}
            <div>
                <label>Additional Skills</label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="skills"
                            value="JavaScript"
                            onChange={handleChange}
                        />
                        JavaScript
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="skills"
                            value="CSS"
                            onChange={handleChange}
                        />
                        CSS
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="skills"
                            value="Python"
                            onChange={handleChange}
                        />
                        Python
                    </label>
                </div>
                {errors.skills && <p>{errors.skills}</p>}
            </div>
            <div>
                <label>Preferred Interview Time</label>
                <input
                    type="datetime-local"
                    name="interviewTime"
                    value={values.interviewTime}
                    onChange={handleChange}
                    required
                />
                {errors.interviewTime && <p>{errors.interviewTime}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default JobApplicationForm;
