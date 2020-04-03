import {Routes} from '../../../routes/routes';

export default function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <Route.component {...props} routes={Routes} />
        )}
      />
    );
  }