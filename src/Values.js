import { Grid } from "@mui/material";
import React from "react";
import { useState } from "react";

const Values = ({values}) => {
    // const [typeQty, setTypeQty] = useState([val]);
   
    const propertyNames = Object.keys(values);

    
    return (
        <Grid style={{marginBottom:"10px"}}  container direction='row' justifyContent='center' >
            {propertyNames && propertyNames.map((key, index) => (
               
                   <Grid key={index} style={{background:"cadetblue" , margin:"3px" }}  container direction='row'  item xs = {2} > 
                       <Grid item xs = {6} > <h4> {key}</h4></Grid>
                       <Grid item xs = {6} > <h4> {values[key]}</h4></Grid>
                   </Grid>
              
            ))}
        </Grid>
    )
}
export default Values;