import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import Spinner from '../assignmentThree/UI/spinner/Spinner';

// Make sure to import your file as a React.lazy element when calling this component

export default function LazyRoute({component: RouteComponent, ...rest}) {
    return (
        <Route 
        {...rest } 
        render={routeProps => (
            <Suspense fallback={<Spinner/>}>
                <RouteComponent {...routeProps}/>
            </Suspense>
        )}>
        </Route>
    );
}
