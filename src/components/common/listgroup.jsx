import React from "react";

const listGroup = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.items.map((item) => (
          <li
            onClick={() => props.onItemSelect(item)}
            key={item[props.valueProperty]}
            className={
              item === props.selectedGenre
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[props.textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

listGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default listGroup;
