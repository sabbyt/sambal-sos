import React, { Component } from 'react'
import FoodBankTile from './components/FoodBankTile'
import Grid from '@material-ui/core/Grid'

//me63ud9Tsq2ElYgkPMvl
// my8sp-ZCuYkXrtT03SS5nL1Pm7u_bU-Kon0v-ZC2ylI

class App extends Component {
	state = {
		foodBankData: []
	}

	componentDidMount() {
		fetch('https://api.airtable.com/v0/appBFSZVCmNb89HUa/Food%20Banks?api_key=keyiLYr45hdasL4Cb')
			.then(res => res.json())
			.then(res => this.setState({ foodBankData: res.records }))
			.catch(error => console.log(error))
	}

  render() {
    const { foodBankData } = this.state
        return (
            <Grid container direction='row' spacing={2}>
                {
                foodBankData.map(bank => bank.fields.status === 'Verified' 
                ? <FoodBankTile {...bank.fields} key={bank.fields.id} /> 
                : null)
                }
            </Grid>
        )
    }
}

export default App