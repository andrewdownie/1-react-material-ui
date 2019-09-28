import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

function TodoList(props) {

    return (
        <List>
            <ListItem button>
                <ListItemText>
                    todo item placeholder
                </ListItemText>
            </ListItem>
        </List>
    );
}

export default TodoList;