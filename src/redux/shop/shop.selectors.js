import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  shop =>   shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
  [selectShopItems],
  collections => collections[collectionUrlParam]
)

export default { selectShopItems, selectCollection, selectCollectionsForPreview};