import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';


import PopupDemo from './Demo/PopupDemo';
import AccordionDemo from './Demo/AccordionDemo';
import AccordionInPopUpDemo from "./Demo/AccordionInPopUpDemo";
import SearchPopup from "./Search/SearchPopup";
import SearchNReportApp from './SearchNReportApp';

class App extends Component {

    render() {
        return (
            <div>
                <CssBaseline>
                    <SearchNReportApp/>
                </CssBaseline>
            </div>
        );
    }
}

export default App;
