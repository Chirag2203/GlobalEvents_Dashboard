import React from "react";
import DataTable from "react-data-table-component";
import MainLoader from "./MainLoader";
const TableComponent = ({ columns, data, loading, customStyle }) => {
  return (
    <div className="table-cont">
      <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        progressComponent={<MainLoader />}
        pagination
        defaultSortFieldId={1}
        defaultSortAsc={false}
        highlightOnHover
        striped
        fixedHeader
        fixedHeaderScrollHeight="600px"
        headClassName="table-head"
        customStyles={customStyle}
      />
    </div>
  );
};

export default TableComponent;
