import React from "react";

const TableComponent = ({ title_name }) => {
  return (
    <div className="uk-overflow-auto">
      <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
        <thead>
          <tr>
            {title_name && title_name.length > 0
              ? title_name.map((item, index) => (
                  <th key={index} className="uk-table-expand">
                    {item.name}
                  </th>
                ))
              : null}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="uk-text-nowrap">True</td>
            <td className="uk-text-nowrap">18</td>
            <td className="uk-text-truncate">20</td>
            <td className="uk-text-truncate">
              <a className="uk-link-reset" href="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </a>
            </td>
            <td className="uk-text-nowrap">-</td>
            <td className="uk-text-nowrap">True</td>
            <td className="uk-text-nowrap">
              {" "}
              <img
                className="uk-preserve-width uk-border-circle"
                src="https://store.weloveshopping.com/upload/gallery5/943745/0/e9/9c07103562ca4484e78ab17e0285ae90.jpg"
                width="40"
                alt=""
              />
            </td>
            <td className="uk-text-nowrap">
              <input className="uk-checkbox" type="checkbox" />
            </td>
            <td className="uk-text-nowrap">Lorem ipsum dolor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
