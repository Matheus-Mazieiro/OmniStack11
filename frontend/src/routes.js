import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './Pages/Logon';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import NewIncident from './Pages/NewIncident';
import Ongs from './Pages/Ongs';
import OngIncidents from './Pages/OngIncidents';

export default function Routes(){
    return(
        <BrowserRouter>     
            <Switch>
                <Route exact path="/" component={Logon}/>
                <Route path="/Register" component={Register}/>
                <Route path="/Profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
                <Route path="/ongs" component={Ongs}/>
                <Route exact path="/ong/incidents" component={OngIncidents}/>
            </Switch>
        </BrowserRouter>
    );
}

