interface UserRole {
  roleID: string;
}

const verifyRolesUser = (userRoles: UserRole[], role: string): boolean => {
  for (let i = 0; i < userRoles.length; i += 1) {
    const exists = userRoles.some((userRole) => userRole.roleID === role);
    if (exists) {
      return true;
    }
  }
  return false;
};

export default verifyRolesUser;