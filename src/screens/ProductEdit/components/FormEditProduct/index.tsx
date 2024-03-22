import { useFormikContext } from 'formik';
import { FC, Fragment, useMemo } from 'react';

import { Button, Grid, InputText, Textarea } from '~/components';
import { ImageGalery } from '~/components/ImageGalery';
import { useProductEdit } from '~/screens/ProductEdit/context/useProduct';
import { ProductData } from '~/services/products/getProduct/types';
import { generateArray } from '~/utils/generateArray';

import { GridTemplateInputs, SelectRoot } from './styles';

interface Example {
  label: string;
  value: string;
}

const definitionOfItem = 'produto';

export const FormEditProduct: FC = () => {
  const { isSubmitting, handleChange, values, dirty, isValid, errors } = useFormikContext<ProductData>();

  const { productsCategories, product } = useProductEdit();

  const categoriesSelectOption = useMemo(
    () =>
      generateArray<Example>(productsCategories.length, (_, index) => ({
        label: productsCategories[index],
        value: productsCategories[index],
      })),
    [productsCategories],
  );

  return (
    <Fragment>
      <Grid displayType="grid" gridGap="30px" padding={[2]}>
        <GridTemplateInputs displayType="inline-flex">
          <ImageGalery images={[...product.images]} thumbnail={product.thumbnail} />
        </GridTemplateInputs>
        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <InputText
            errorDescription={errors.title}
            hasError={!!errors.title}
            label="Título"
            name="title"
            onChange={handleChange}
            placeholder={`Insira o um título para o ${definitionOfItem}`}
            type="text"
            value={values.title}
            width={'flex'}
          />
        </GridTemplateInputs>
        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <InputText
            errorDescription={errors.brand}
            hasError={!!errors.brand}
            label="Marca"
            name="brand"
            onChange={handleChange}
            placeholder={`Qual a marca do ${definitionOfItem}`}
            type="text"
            value={values.brand}
            width="flex"
          />
          <SelectRoot label="Categorias" name="category" onChange={handleChange} options={categoriesSelectOption} />
        </GridTemplateInputs>
        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <InputText
            errorDescription={errors.price}
            hasError={!!errors.price}
            label="Preço"
            name="price"
            onChange={handleChange}
            placeholder={`Insira o valor do ${definitionOfItem}`}
            type="text"
            value={values.price}
            width="flex"
          />
          <InputText
            errorDescription={errors.discountPercentage}
            hasError={!!errors.discountPercentage}
            label="Porcentagem de Desconto"
            name="discountPercentage"
            onChange={handleChange}
            placeholder="Informe um numero para o desconto"
            type="number"
            value={values.discountPercentage}
            width="flex"
          />
        </GridTemplateInputs>

        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <InputText
            errorDescription={errors.rating}
            hasError={!!errors.rating}
            label="Avaliação"
            name="rating"
            onChange={handleChange}
            placeholder={`Qual a avaliação desse ${definitionOfItem}`}
            type="text"
            value={values.rating}
            width="flex"
          />
          <InputText
            errorDescription={errors.stock}
            hasError={!!errors.stock}
            label="Estoque"
            name="stock"
            onChange={handleChange}
            placeholder={`Quantos ${definitionOfItem}s há em estoque ?`}
            type="text"
            value={values.stock}
            width="flex"
          />
        </GridTemplateInputs>
        <GridTemplateInputs displayType="inline-flex" gridGap="10px">
          <Textarea
            errorDescription={errors.description}
            hasError={!!errors.description}
            label="Descrição"
            name="description"
            onChange={handleChange}
            placeholder={`Descrição do ${definitionOfItem}`}
            value={values.description}
            width="flex"
          />
        </GridTemplateInputs>
        <Grid align="center" displayContent="space-evenly" displayType="inline-flex">
          <Button color="secondary" disabled={isSubmitting || !isValid || !dirty} fullWidth type="submit">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};
