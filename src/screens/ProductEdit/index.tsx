'use client';

import useDidMount from 'beautiful-react-hooks/useDidMount';
import { FC, Fragment, useMemo } from 'react';

import { Grid, PageTitle } from '~/components';
import { TemplateScreen } from '~/components/TemplateScreen';

import { FormEditProduct } from './components/FormEditProduct';
import { FormEditProductProvider } from './components/FormEditProduct/components/FormEditProductProvider';
import { ProductEditProvider, useProductEdit } from './context/useProduct';

interface Props {
  id: number;
}

const ProductEditWithProvider: FC<Props> = ({ id }) => {
  const { getProductById, loading, productData } = useProductEdit();

  useDidMount(() => {
    getProductById(id);
  });

  const productCachedData = useMemo(() => productData, [productData]);

  return (
    <TemplateScreen>
      {loading ? (
        'Carregando'
      ) : (
        <Fragment>
          <Grid displayContent="space-between" displayType="inline-flex" padding={[2, 1]}>
            <PageTitle color="primary">Produto {productCachedData.title}</PageTitle>
          </Grid>

          <FormEditProductProvider>
            <FormEditProduct id={id} />
          </FormEditProductProvider>
        </Fragment>
      )}
    </TemplateScreen>
  );
};

export const ProductEdit: FC<Props> = ({ id }) => (
  <ProductEditProvider>
    <ProductEditWithProvider id={id} />
  </ProductEditProvider>
);
