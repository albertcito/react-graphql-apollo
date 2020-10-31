import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { Spin } from 'antd';

import { RouteProperties } from 'routes/interfaces';
import { isPrivate, RouteTypeEnum, isSession } from 'routes/routeTypes';
import { GlobalLayout } from 'templates/';
import { Error403 } from 'templates/errors';
import AppPageInterface from 'templates/interfaces/LayoutPageProperties';
import { GlobalContext } from 'use/global';

interface AuthProperties<T = React.ReactNode> {
  appRoute: RouteProperties;
  Template: React.FC<AppPageInterface>;
  route: RouteComponentProps<T>;
  type: RouteTypeEnum;
}
const Auth = ({ appRoute, Template, route, type }: AuthProperties) => {
  const {
    sessions: { user, loading },
    logout: { loading: logoutLoading },
  } = React.useContext(GlobalContext);

  if (loading) {
    return <>...loading</>;
  }

  if (isPrivate(type) && !user) {
    return <GlobalLayout Component={Error403} route={route} />;
  }
  if (isSession(type) && user) {
    return <Redirect to='/' />;
  }

  const Layout = appRoute.template ? appRoute.template : Template;
  return (
    <Spin spinning={logoutLoading}>
      <Layout
        Component={appRoute.component}
        route={route}
      />
    </Spin>
  );
};

export default Auth;
