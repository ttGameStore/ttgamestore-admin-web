import React from "react";
import { TableComponent } from "../../components";
import ColumnCardList from "../../utils/ColumnCardList.utile";

const manageCardListScreen = () => {
  return (
    <div className="uk-padding">
      <div className="table-style">
        <TableComponent title_name={ColumnCardList} />
      </div>
    </div>
  );
};

export default manageCardListScreen;
