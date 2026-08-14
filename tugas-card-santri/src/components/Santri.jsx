/** @format */

import React from "react";

function Santri({ nama, kelas, hobi, aktif }) {
  return (
    <React.Fragment>
      <div className='w-full max-w-sm p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-bold text-gray-800'>{nama}</h2>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-lg ${
              aktif ?
                "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
            }`}>
            {aktif ? "Status : Aktif" : "Status : Tidak Aktif"}
          </span>
        </div>
        <div className='space-y-1 text-sm text-gray-600'>
          <p>
            <span className='font-semibold text-gray-800'>Kelas :</span> {kelas}
          </p>
          <p>
            <span className='font-semibold text-gray-800'>Hobi :</span> {hobi}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Santri;
