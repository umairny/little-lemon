import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from './Homepage'
import BookingPage from './BookingPage'
import Order from './Order';
import Login from './Login';
import { Box } from '@chakra-ui/react';

function Main() {
    return (
        <Box minH='70vh'>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                    <Route path="/order" element={<Order />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </main>
        </Box>
    )
}

export default Main