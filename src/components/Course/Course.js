import React from 'react';
import courses from '../../fakeData/courseData';
import CourseInfo from '../CourseInfo/CourseInfo';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import './Course.css';

const Course = () => {
    const [courseDetails, setCourseDetails] = useState(courses);
    const [cart, setCart] = useState([]);

    const handleCoursePurchase = (detail) => {
        const newCart = [...cart, detail];
        setCart(newCart);
    }
    return (
        <div className="main-container">
            <div className="course-container">
                <h1 className="display-2" style={{fontStyle: 'italic'}}>Online ClassRoom</h1>
                    {
                        courseDetails.map(cd => <CourseInfo detail={cd} handleCoursePurchase={handleCoursePurchase} key={cd.id}></CourseInfo>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;