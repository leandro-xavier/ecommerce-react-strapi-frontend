import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navigation } from '../components/Navbar/Navigation';
import { HomeScreen } from '../components/Screens/Home/HomeScreen';
import { LoginScreen } from '../components/Screens/Login/LoginScreen';
import { RegisterScreen } from '../components/Screens/Login/RegisterScreen';
import { NosotrosScreen } from '../components/Screens/nosotros/NosotrosScreen';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/nosotros" component={NosotrosScreen}/>
                    <Route exact path="/auth/login" component={LoginScreen}/>
                    <Route exact path="/auth/register" component={RegisterScreen}/>
                </Switch>
            </Router>
        </>
    )
}
