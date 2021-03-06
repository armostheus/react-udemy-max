import React from 'react'
import Aux from '../../hoc/Auxx'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
  <Aux>
    <div>
      <Toolbar />
      <SideDrawer />
    </div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout;