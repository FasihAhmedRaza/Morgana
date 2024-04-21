import { Suspense } from 'react';

const WithSuspenseBoundary = (WrappedComponent: any) => {
  const WithSuspenseBoundary = (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <WrappedComponent {...props} />
    </Suspense>
  );

  return WithSuspenseBoundary;
};

export default WithSuspenseBoundary;
