import React, { useState } from 'react';
import Title from 'antd/lib/typography/Title';

import { useUsersQuery } from 'graphql/generated';
import UsersTable from 'ui/Users/Table';
import AlertError from 'ui/Alert/AlertError';
import NoDataUrql from 'ui/NoDataUrql';

const Users: React.FC = () => {
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>();
  const [order, setOrder] = useState<string>();
  const [orderBy, setOrderBy] = useState<string>();
  const [{ data, fetching, error }] = useUsersQuery(
    { variables: { limit, page, search, order, orderBy } },
  );
  if (!data) {
    return <NoDataUrql fetching={fetching} error={error} />;
  }

  return (
    <div>
      <Title level={1}>
        Users
      </Title>
      {error && <AlertError error={error} />}
      <UsersTable
        loading={fetching}
        users={data.users.data}
        pagination={data.users.pagination}
        fetchMore={({ page: page_, limit: limit_, search: search_, order: order_ }) => {
          setLimit(limit_);
          setPage(page_);
          setSearch(search_);
          if (order_) {
            setOrder(order_.order);
            setOrderBy(order_.orderBy);
          }
        }}
      />
    </div>
  );
};

export default Users;
