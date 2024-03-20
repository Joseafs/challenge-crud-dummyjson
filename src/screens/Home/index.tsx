'use client';

import { FC, useCallback, useState } from 'react';

import { Button, Grid } from '~/components';

export const HomeScreen: FC = () => {
  const [count, setCount] = useState(2);

  const handleClick = useCallback(() => {
    setCount(count + 5);
  }, [count]);

  return (
    <main>
      <h1>Need Header sadsada </h1>
      <br />
      <Grid backgroundColor="primary" margin={[1]} padding={[1]}>
        Lorem ipsum
      </Grid>
      <br />
      <Button color="primary" onClick={handleClick}>
        {count}
      </Button>
      <br />
      <h2>Need Footer </h2>
    </main>
  );
};
