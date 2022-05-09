export type TableHeaderModel=
{
  name: string,
  key: {
    name: string,
    subKey: string,
  },
  imgUrl?:string,
  clickUrl?: string
  specialContent?:boolean
}
