import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Navigate } from 'react-router-dom';
import { UseUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';

export default function ProtectedRoute({children}){
    //let {user}= UseUserAuth();
    let navigation=useNavigate();
    //let user=localStorage.getItem("currentUserMail");
    if(localStorage.getItem("currentUserMail"))
    return children;
    else
    return <Navigate to="/login" replace={true}/>;
}