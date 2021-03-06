import React from 'react';

import TableColumns from 'util/columns/base/TableColumns';
import { IDColumn, StringColumn, DeleteColumn, OnSelectColumn } from 'util/columns';
import SearchTable, { SearchTableProperties } from '../../Tables/SearchTable';
import getDefaultSortOrder from './getDefaultSortOrder';

export interface User {
  id: number;
  email: string;
  fullName: string;
  userStatusID: string;
}

interface UsersTableProperties extends Omit<SearchTableProperties, 'tableColumns' | 'placeholder'> {
  getLink?: (user: User) => string;
  onSelectLink?: (data: User, index: number) => void;
  onSelect?: (data: User, index: number) => void;
  onDelete?: (item: User, index: number) => void;
}

const UsersTable: React.FC<UsersTableProperties> = ({
  dataSource,
  loading = false,
  values = {},
  pagination,
  fetchMore,
  getLink,
  onSelectLink,
  onSelect,
  onDelete,
}) => {
  const tableColumns = new TableColumns([
    new IDColumn<User>({
      indexID: 'id',
      orderBy: 'id',
      sortOrder: getDefaultSortOrder('id', values.orderBy, values.order),
    }),
    new StringColumn<User>({
      indexID: 'fullName',
      title: 'Name',
      orderBy: 'first_name',
      sortOrder: getDefaultSortOrder('first_name', values.orderBy, values.order),
      getLink,
      onSelectLink,
    }),
    new StringColumn<User>({
      indexID: 'email',
      title: 'Email',
      orderBy: 'email',
      sortOrder: getDefaultSortOrder('email', values.orderBy, values.order),
      getLink,
      onSelectLink,
    }),
    new StringColumn<User>({
      indexID: 'userStatusID',
      title: 'status',
      orderBy: 'user_status_id',
      sortOrder: getDefaultSortOrder('user_status_id', values.orderBy, values.order),
      getLink,
      onSelectLink,
    }),
  ]);

  if (onSelect) {
    tableColumns.append(new OnSelectColumn<User>({ indexID: 'id', onSelect }));
  }
  if (onDelete) {
    tableColumns.append(new DeleteColumn({ onDelete }));
  }

  return (
    <SearchTable
      dataSource={dataSource}
      tableColumns={tableColumns}
      loading={loading}
      pagination={pagination}
      values={values}
      placeholder='Search by name, email or ID'
      fetchMore={fetchMore}
    />
  );
};

export default UsersTable;
