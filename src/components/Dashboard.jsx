import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = ({ data }) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography variant="h4">DASHBOARD</Typography>
    </Grid>
    <Grid item xs={4}>
      <Paper>
        <Typography variant="h6">Sales Obtained</Typography>
        <Typography variant="h4">{data.sales}</Typography>
      </Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper>
        <Typography variant="h6">New Clients</Typography>
        <Typography variant="h4">{data.clients}</Typography>
      </Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper>
        <Typography variant="h6">Traffic Received</Typography>
        <Typography variant="h4">{data.traffic}</Typography>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper>
        <Typography variant="h6">Revenue Generated</Typography>
        <Typography variant="h4">{data.revenue}</Typography>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper>
        <Typography variant="h6">Recent Transactions</Typography>
        {data.transactions.map((transaction, index) => (
          <div key={index}>
            <Typography>{transaction.id} - {transaction.name} - {transaction.date} - {transaction.amount}</Typography>
          </div>
        ))}
      </Paper>
    </Grid>
  </Grid>
);

export default Dashboard;
