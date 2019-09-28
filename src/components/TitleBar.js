import React from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core';

function TitleBar(props) {

    return (
        <AppBar>
            <Toolbar>
                <Button>
                    CATEGORIES
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default TitleBar;