import React, { useContext } from 'react';
import { ApiContext } from '../MyAxios';
import TablazatSor from './TablazatSor';

export default function Tablazat() {
  const { termekLista } = useContext(ApiContext);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {termekLista.map((elem, index) => (
            <TablazatSor jel={elem} key={index} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
