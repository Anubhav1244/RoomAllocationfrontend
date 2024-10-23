import React, { useState } from 'react';

const TeacherForm = () => {
    const [teachers, setTeachers] = useState([{ name: '', subject: '' }]);

    const handleTeacherChange = (index, event) => {
        const values = [...teachers];
        values[index][event.target.name] = event.target.value;
        setTeachers(values);
    };

    const handleAddTeacher = () => {
        setTeachers([...teachers, { name: '', subject: '' }]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Teachers to submit:', teachers);

           };

    return (
        <div className="bg-[#E9F6FF] flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-md  flex flex-col items-center">
        <form onSubmit={handleSubmit} className=' flex flex-col   mx-auto justify-center items-center '>
            <h2 className='text-3xl font-bold '>Enter Teacher Details</h2>
            {teachers.map((teacher, index) => (
                <div key={index} className='flex gap-10 mt-10'>
                    <input
                        name="name"
                        placeholder="Teacher Name"
                        value={teacher.name}
                        onChange={event => handleTeacherChange(index, event)}
                        className="w-[300px] h-10 rounded-lg p-2 border border-black border-solid"
                    />
                    <input
                        name="subject"
                        placeholder="Subject"
                        value={teacher.subject}
                        onChange={event => handleTeacherChange(index, event)}
                        className="w-[300px] h-10 rounded-lg p-2 border border-black border-solid"
                    />
                </div>
            ))}
            <button type="button" className="bg-blue-800 text-white font-bold py-2 px-4 rounded mt-8 p-4 w-[50%]" onClick={handleAddTeacher}>
                Add Another Teacher
            </button>
            <button type="submit" className="bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
        </form>
        </div>
        </div>
    );
};

export default TeacherForm;