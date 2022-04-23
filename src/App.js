import logo from './logo.svg';
import './App.css';
import { Button, Grid } from '@mui/material';
import Header from './Header'
import { useState } from 'react';
import Values from './Values';




const items = [
  {
    id: 1,
    brand: "ASUS",
    model: "PX56",
    type: "motherboard",
    price: 132
  },
  {
    id: 2,
    brand: "AMD",
    model: "Ryzen 9",
    type: "cpu",
    price: 350
  },
  {
    id: 3,
    name: "Crucial",
    model: "TR4HX",
    type: "memory",
    price: 99
  },
  {
    id: 4,
    name: "XFX",
    model: "GeForce 560",
    type: "gpu",
    price: 299
  },
  {
    id: 5,
    name: "LG",
    model: "U45HDR",
    type: "monitor",
    price: 267
  },
  {
    id: 6,
    brand: "ASRock",
    model: "B4T6",
    type: "motherboard",
    price: 104
  },
  {
    id: 7,
    brand: "Intel",
    model: "i7-11600K",
    type: "cpu",
    price: 410
  },
  {
    id: 9,
    name: "ATI",
    model: "RT 6900",
    type: "gpu",
    price: 299
  },
  {
    id: 10,
    name: "DELL",
    model: "UHD7R",
    type: "monitor",
    price: 357
  },
  {
    id: 11,
    name: "ATI",
    model: "RX 500",
    type: "gpu",
    price: 179
  },
  {
    id: 12,
    name: "Viewsonic",
    model: "XFR22",
    type: "monitor",
    price: 209
  }
]

let activeItem = items;
let deletedItems = [];

function App() {
  const [delItem, setDelItem] = useState([])
  const itemDelted = (item) => {
    deletedItems.push(item);
    const index = activeItem.findIndex(itm => itm.id === item.id);
    activeItem.splice(index, 1);
    setDelItem({ item })
  }
  const itemAcative = (item) => {
    activeItem.push(item);
    const index = deletedItems.findIndex(itm => itm.id === item.id);
    deletedItems.splice(index, 1);
    setDelItem({ item })
  }

  const arrToInstanceCountObj = () => items.reduce((obj, { type }) => {
    obj[type] = (obj[type] || 0) + 1;
    return obj;
  }, {});
  const values = arrToInstanceCountObj();

  const active = () => {
    return (
      activeItem && activeItem.map((item , index) => {
        return (
          <div >
            <Grid key={index} container direction="row" >
              <Grid item xs={2} >{item.name}</Grid>
              <Grid item xs={2} >{item.brand}</Grid>
              <Grid item xs={2} >{item.model}</Grid>
              <Grid item xs={2} >{item.type}</Grid>
              <Grid item xs={2} >{item.price}</Grid>
              <Grid item xs={2} >
                <Button onClick={() => itemDelted(item)} >Delete</Button></Grid>
            </Grid>
            <hr />
          </div>
        )
      })
    )
  }
  const deleted = () => {
    return (
      deletedItems && deletedItems.map((item , index ) => {

        return (
          <div >
            <Grid key={index} container direction="row" >
              <Grid item xs={2} >{item.name}</Grid>
              <Grid item xs={2} >{item.brand}</Grid>
              <Grid item xs={2} >{item.model}</Grid>
              <Grid item xs={2} >{item.type}</Grid>
              <Grid item xs={2} >{item.price}</Grid>
              <Grid item xs={2} >
                <Button onClick={() => itemAcative(item)}  >Active</Button>
              </Grid>
            </Grid>
            <hr />
          </div>
        )
      })
    )
  }
  return (
    <div className="App">
      <Header />

      <Grid container direction="row" justifyContent="space-around" alignItems="flex-start"
      >
        <Grid container direction="row" item xs={5}>
          <Grid item xs={12} >
            <h1>Acative  Items</h1>
          </Grid>
          <Grid direction="row" item xs={12} >
            <Grid container direction="row" >
              <Grid item xs={2} ><h3>Name</h3></Grid>
              <Grid item xs={2} ><h3>Brand</h3></Grid>
              
              <Grid item xs={2} ><h3>Modal</h3></Grid>
              <Grid item xs={2} ><h3>Type</h3></Grid>
              <Grid item xs={2} ><h3>Price</h3></Grid>
              <Grid item xs={2} ><h3>Action</h3></Grid>
            </Grid>
            <hr />
            {active()}
          </Grid>
          <Grid item xs={6} >
            <h1> Active Item Total</h1>
          </Grid>
          <Grid item xs={6} >
            <h1> {activeItem.reduce((a, b) => a + b.price, 0)}</h1>
          </Grid>
        </Grid>
        <Grid container direction="row" item xs={5}>
          <Grid item xs={12} >
            <h1>Deleted  Items</h1>
          </Grid>
          <Grid direction="row" item xs={12} >
            <Grid container direction="row" >
              <Grid item xs={2} ><h3>Name</h3></Grid>
              <Grid item xs={2} ><h3>Brand</h3></Grid>
              
              <Grid item xs={2} ><h3>Modal</h3></Grid>
              <Grid item xs={2} ><h3>Type</h3></Grid>
              <Grid item xs={2} ><h3>Price</h3></Grid>
              <Grid item xs={2} ><h3>Action</h3></Grid>
            </Grid>
            <hr />
            {deleted()}
          </Grid>
          <Grid item xs={6} >
            <h1> Active Item Total</h1>
          </Grid>
          <Grid item xs={6} >
            <h1> {deletedItems.reduce((a, b) => a + b.price, 0)}</h1>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Values values={values} />
        </Grid>
        <Grid container direction='row' style={{ background: "antiquewhite" }} >
          <Grid item xs={6} >
            <h1> TOTAL</h1>
          </Grid>
          <Grid item xs={6} >
            <h1> {items.reduce((a, b) => a + b.price, 0)}</h1>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
