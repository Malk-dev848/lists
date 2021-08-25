import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    tid: '',
    title: '',
    genre: '',
    type: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { tid, title, genre, type } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.tid]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">TID</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='tid' value={tid} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Genre</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='genre' value={genre} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Type</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='type' value={type} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add List</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;