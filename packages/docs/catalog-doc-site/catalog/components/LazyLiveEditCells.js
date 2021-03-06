import React from 'react';

const LiveEditCells = React.lazy(() => import('./LiveEditCells'));

const LazyLiveEditCells = (props) => (
  <React.Suspense
    fallback={
      <React.Fragment>
        <td>Loading...</td>
        <td>Loading...</td>
      </React.Fragment>
    }
  >
    <LiveEditCells {...props} />
  </React.Suspense>
);

export default LazyLiveEditCells;
