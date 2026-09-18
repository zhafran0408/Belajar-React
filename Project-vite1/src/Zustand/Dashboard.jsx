/** @format */

import useStore from "./store";

function Dashboard() {
  //   const username = useStore((state) => state.username);
  //   const role = useStore((state) => state.role);
  //   const count = useStore((state) => state.count);

  //   const increment = useStore((state) => state.increment);
  //   const decrement = useStore((state) => state.decrement);

//  cara yang kedua 
  const { username, role, count, increment, decrement } = useStore();

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='mx-auto max-w-md rounded-xl bg-white p-6 shadow'>
        <h1 className='mb-5 text-2xl font-bold'>Dashboard</h1>

        <div className='mb-5 space-y-2'>
          <p>
            Username: <b>{username}</b>
          </p>

          <p>
            Role: <b>{role}</b>
          </p>
        </div>

        <div className='text-center'>
          <p className='mb-2 text-gray-500'>Count</p>

          <h2 className='mb-5 text-4xl font-bold'>{count}</h2>

          <div className='flex justify-center gap-3'>
            <button
              onClick={decrement}
              className='rounded-lg bg-red-500 px-5 py-2 font-medium text-white hover:bg-red-600'>
              -1
            </button>

            <button
              onClick={increment}
              className='rounded-lg bg-green-500 px-5 py-2 font-medium text-white hover:bg-green-600'>
              +1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
