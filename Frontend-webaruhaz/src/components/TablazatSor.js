import React from 'react';
import Termek from './Termek';

export default function TablazatSor({ jel, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Termek jel={jel} />
      </td>
    </tr>
  );
}
