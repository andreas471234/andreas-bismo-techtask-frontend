import React, { lazy, Suspense } from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loader } from './components'

const kitchenRoute = {
  home: lazy(() => import("./containers/Home")),
}

const PublicRoutes = ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Suspense fallback={<Loader visible={true} />}>
            <Switch>
              <Route exact path='/' component={kitchenRoute.home} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  )
}

export default connect(state => ({
}))(PublicRoutes);
