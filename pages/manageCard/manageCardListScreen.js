import React from "react";
import { TableComponent } from "../../components";
import ColumnCardList from "../../utils/ColumnCardList.utile";

const manageCardListScreen = () => {
  return (
    <div>
      <TableComponent title_name={ColumnCardList} />
    </div>
  );
};

export default manageCardListScreen;
