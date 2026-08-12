/** @format */

import { Button } from "./ui/button";

function StudentCard({ name, job, onDelete }) {
  return (
    <div className='rounded-lg border bg-white p-5 shadow-sm'>
      <h3 className='text-lg font-bold text-gray-900'>{name}</h3>

      <p className='mt-1 text-sm text-gray-500'>{job}</p>

      <Button variant='destructive' className='mt-4' onClick={onDelete}>
        Hapus
      </Button>
    </div>
  );
}

export default StudentCard;
