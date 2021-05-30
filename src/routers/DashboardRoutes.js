import React from 'react'
import { Navbar } from '../component/ui/Navbar'
import {Switch, Route, Redirect} from "react-router-dom";
import { MarvelScreen } from '../component/marvel/MarvelScreen';
import { HeroScreen } from '../component/heroes/HeroScreen';
import { DcScreen } from '../component/dc/DcScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />      
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Redirect to="/marvel" />
                </Switch>
            </div>      
        </>
    )
}
