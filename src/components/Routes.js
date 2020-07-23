import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { getMenu } from '../services';
import Page from '../components/Pages';
import Home from '../components/Pages--home';
import Projects from '../components/ProjectsList';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const COMPONENTES = {
  Home,
  Projects,
};

const ROUTES = (data) => {
  let routes = [];
  // eslint-disable-next-line array-callback-return
  data.map((x) => {
    x['post_status'] === 'publish' &&
      routes.push({
        ...x,
        component: COMPONENTES[x.component],
      });
    x['child_items']?.length &&
      x['child_items'].map((x, i) => 
        routes.push({
          ...x,
          component: COMPONENTES[x.component],
        })
      );
  });
  return routes.flat(3).filter(Boolean);
};

const Routes = () => {
  const [loading, setLoading] = useState(true);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    async function loadRoutes() {
      const response = await getMenu('menu-routes');
      if (response) {
        setRoutes(response.items);
        setLoading(false);
      }
    }
    loadRoutes();
  }, []);

  return (
    <Switch>
      {!loading &&
        ROUTES(routes).map((x, i) => {
          const Component = x.component;
          // console.log(x);
          return (
            x.component && (
              <Route key={i} path={x.url} exact={x.exact}>
                {x.ScrollToTop && <ScrollToTop />}
                {x.type === 'custom' && <Component {...x.extras} />}
                {x.type === 'page' && <Page slug={x.pageSlug || x.slug} component={Component} exact={x.exact} page_extra={{ ...x.page_extra }} />}
                {/* {x.type === 'single' && <Single slug={x.singleSlug || x.slug} component={Component} exact={x.exact} {...x.extras} />} */}
              </Route>
            )
          );
        })}
    </Switch>
  );
};

export default Routes;
