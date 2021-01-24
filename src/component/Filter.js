import React from "react";

import style from "./style.module.css";

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <p className={style.textContacts}>Find contacts by name</p>
    <input
      type="text"
      value={value}
      onChange={(e) => onChangeFilter(e.target.value)}
    />
  </div>
);

export default Filter;
