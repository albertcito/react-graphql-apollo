import React from 'react';
import Title from 'antd/lib/typography/Title';
import { notification } from 'antd';

import useWindowTitle from 'util/windowTitle/useWindowTitle';
import { UserQuery, useRolesQuery, useUserRolesUpdateMutation } from 'graphql/generated';
import NoDataUrql from 'ui/NoDataUrql';
import UserRolesForm from './UserRolesForm';
import { StructFormat } from 'util/stateHandler/struct';

interface RolesProperties {
  user: UserQuery['user'];
}
const Roles: React.FC<RolesProperties> = ({ user }) => {
  const [{ error: errorRoles, fetching: fetchingRoles, data: dataRoles }] = useRolesQuery();
  const [{ fetching }, updateRoles] = useUserRolesUpdateMutation();
  useWindowTitle(`Roles - ${user.fullName}`);
  const onSave = async (values: StructFormat<boolean>) => {
    const rolesID = Object.keys(values).filter((key) => values[key]);
    const response = await updateRoles({
      userID: user.id,
      rolesID,
    });
    if (response.data) {
      const { message, type } = response.data.userRolesUpdate;
      notification[type]({ message });
    }
  };

  if (!dataRoles) {
    return <NoDataUrql fetching={fetching} error={errorRoles} />;
  }

  return (
    <div>
      <Title level={3}>
        Users
      </Title>
      <UserRolesForm
        roles={dataRoles.roles.data}
        userRoles={user.roles}
        onSave={onSave}
        loading={fetchingRoles && fetching}
      />
    </div>
  );
};

export default Roles;
