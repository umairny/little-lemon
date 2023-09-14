import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../Homepage/Homepage'
import BookingPage from '../BookingPage/BookingPage'
import CallToAction from '../CallToAction/CallToAction';

function Main() {
    return (
        <main>
            <CallToAction />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
    )
}

export default Main