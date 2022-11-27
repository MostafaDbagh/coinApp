import React,{lazy,Suspense} from 'react';
const CoinPage = lazy(()=>import('./pages/coinPage'));
function App() {
  return (
    <div className="min-vh-100  my-5">
      <h1 className='text-bg-secondary p-3'>Assignment App </h1>
      <Suspense fallback='loading...'>
      <CoinPage/>
      </Suspense>

    </div>
  );
}

export default App;
