export type propertyTypeAssetsModel = {
  Id: number,
  Name: string,
  Assets?: [
    {
      Id: number,
      Name: string,
      AssetSpaceID: number,
    }
  ];
  pg_total?: number;
};
