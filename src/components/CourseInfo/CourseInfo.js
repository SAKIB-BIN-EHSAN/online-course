import React from 'react';
import './CourseInfo.css';

const CourseInfo = (props) => {
    const {name, price, instructor, image} = props.detail;
    return (
        <div className="course-info-container">
            <div>
                <h4 style={{marginTop: '50px', fontWeight: 'bold'}}>Course Title: {name}</h4>
                <img src={image} alt=""/>
                <p>Price: {price}</p>
                <p>Instructor: {instructor}</p>
                <button className="btn btn-info" onClick={() => props.handleCoursePurchase(props.detail)} >Enroll Now</button>
            </div>
        </div>
    );
};

export default CourseInfo;