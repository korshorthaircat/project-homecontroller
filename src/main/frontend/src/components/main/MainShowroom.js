import React from 'react';
import MainShowroomColor from '../../components/main/MainShowroomColor';
import "../../css/mainShowroom.css";

const MainShowroom = () => {
    return (
        <div className='mainShowroomColor'>
            <MainShowroomColor color="red" />
            <MainShowroomColor color="yellow" />
            <MainShowroomColor color="green" />
            <MainShowroomColor color="blue" />
            <MainShowroomColor color="purple" />
            <MainShowroomColor color="white" />
            <MainShowroomColor color="black" />
            <MainShowroomColor color="pink" />
            <MainShowroomColor color="beige" />
            <MainShowroomColor color="gray" />    
        </div>
    );
};

export default MainShowroom;