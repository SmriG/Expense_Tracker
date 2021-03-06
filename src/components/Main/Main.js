import React, { useContext } from 'react';
import{ Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import Form from '../Form/Form';
import List from '../List/List';
import { ExpenseTrackerContext } from '../../Context/context'
import InfoCard from '../InfoCard';
const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);
    return (
        <div>
            <Card className={classes.root} >
                <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
                <CardContent >
                    <Typography align='center' variant='h5' >Total Balance ${balance}</Typography>
                    <Typography variant="subtitle" style = {{lineHeight:'1.5em', marginTop:'20px'}}>
                        <InfoCard/> 
                    </Typography>
                    <Divider className={classes.divider} />
                    
                    <Form/>

                </CardContent>
                <CardContent className={classes.CardContent} > 
                    <Grid item xs={12} > 
                        <List/>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default Main
