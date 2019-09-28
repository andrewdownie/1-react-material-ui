import React from 'react';
import {Drawer} from '@material-ui/core';

function CategoryDrawer (props){
    return (
        <Drawer
            open={true}
            variant="permanent"
            anchor="right"
        >
            {props.children}
        </Drawer>
    );
}

export default CategoryDrawer;