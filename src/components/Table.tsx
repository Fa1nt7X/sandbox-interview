import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { tableMOck } from "../mocks";

export type TableResponse = {
  id: string;
  text: string;
  label: string;
};

const request = () => {
  return axios.get<TableResponse[]>("/table").then((res) => res?.data);
};

export const Table: FC = () => {
  const [data, setData] = useState<TableResponse[]>(tableMOck);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, index) => {
          return (
            <tr>
              <td>{el.id}</td>
              <td>{el.label}</td>
              <td>{el.text}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
