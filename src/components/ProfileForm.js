import { useState } from "react";
import './ProfileForm.css';

const ProfileForm = () => {
    const [userData, setUserData] = useState({
        fullName: "Full Name",
        degree: "degree",
    });

    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleAddExperience = () => {
        setExperience([...experience, { company: "", role: "", description: "" }]);
    };

    const handleExperienceChange = (index, e) => {
        const newExperience = [...experience];
        newExperience[index][e.target.name] = e.target.value;
        setExperience(newExperience);
    };

    const handleAddSkill = () => {
        setSkills([...skills, { skill: "", description: "" }]);
    };

    const handleSkillChange = (index, e) => {
        const newSkills = [...skills];
        newSkills[index][e.target.name] = e.target.value;
        setSkills(newSkills);
    };

    const handleAddProject = () => {
        setProjects([...projects, { title: "", description: "" }]);
    };

    const handleProjectChange = (index, e) => {
        const newProjects = [...projects];
        newProjects[index][e.target.name] = e.target.value;
        setProjects(newProjects);
    };

    return (
        <div className="resume-layout">
            {/* Form Section */}
            <div className="form-container">
                <h2>Edit Your Resume</h2>
                <label>
                    Full Name:
                    <input type="text" name="fullName" value={userData.fullName} onChange={handleChange} />
                </label>
                <label>
                    Degree:
                    <input type="text" name="degree" value={userData.degree} onChange={handleChange} />
                </label>

                <h3>Work Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index} className="entry">
                        <input type="text" name="company" placeholder="Company Name" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} />
                        <input type="text" name="role" placeholder="Role" value={exp.role} onChange={(e) => handleExperienceChange(index, e)} />
                        <textarea name="description" placeholder="Description" value={exp.description} onChange={(e) => handleExperienceChange(index, e)} />
                    </div>
                ))}
                <button type="button" onClick={handleAddExperience}>+ Add Experience</button>

                <h3>Skills</h3>
                {skills.map((skill, index) => (
                    <div key={index} className="entry">
                        <input type="text" name="skill" placeholder="Skill" value={skill.skill} onChange={(e) => handleSkillChange(index, e)} />
                        <textarea name="description" placeholder="Description" value={skill.description} onChange={(e) => handleSkillChange(index, e)} />
                    </div>
                ))}
                <button type="button" onClick={handleAddSkill}>+ Add Skill</button>

                <h3>Projects</h3>
                {projects.map((proj, index) => (
                    <div key={index} className="entry">
                        <input type="text" name="title" placeholder="Project Title" value={proj.title} onChange={(e) => handleProjectChange(index, e)} />
                        <textarea name="description" placeholder="Project Description" value={proj.description} onChange={(e) => handleProjectChange(index, e)} />
                    </div>
                ))}
                <button type="button" onClick={handleAddProject}>+ Add Project</button>
            </div>

            {/* Resume Preview Section */}
            <div className="resume-preview">
                <h2>{userData.fullName}</h2>
                <p><strong>Degree:</strong> {userData.degree}</p>

                <h3>Work Experience</h3>
                {experience.length > 0 ? experience.map((exp, index) => (
                    <div key={index} className="resume-section">
                        <p><strong>{exp.company} - {exp.role}</strong></p>
                        <p>{exp.description}</p>
                    </div>
                )) : <p>No experience added.</p>}

                <h3>Skills</h3>
                {skills.length > 0 ? skills.map((skill, index) => (
                    <div key={index} className="resume-section">
                        <p><strong>{skill.skill}</strong></p>
                        <p>{skill.description}</p>
                    </div>
                )) : <p>No skills added.</p>}

                <h3>Projects</h3>
                {projects.length > 0 ? projects.map((proj, index) => (
                    <div key={index} className="resume-section">
                        <p><strong>{proj.title}</strong></p>
                        <p>{proj.description}</p>
                    </div>
                )) : <p>No projects added.</p>}

            </div>
        </div>
    );
};

export default ProfileForm;
