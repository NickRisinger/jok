interface RangeFilter<T> {
  from: T;
  to: T;
}

interface Filters {
  ids: string;
  operationId: number;
  dealType: string;
  categoryId: number;
  platformId: number;
  realtorIds: number;
  orderBy: number;
  groupLeaderIds: number[];
  priceFrom: number;
  priceTo: number;
  addressList: string[];

  buildingType: string[];
  constructedAtYear: RangeFilter<number>;
  floorNumber: RangeFilter<number>;
  totalFloors: RangeFilter<number>;
}
