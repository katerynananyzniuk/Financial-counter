export interface ICategory {
  id: number,
  name: string,
  title: string,
  total: number,
}

export interface IOperation {
  id: number,
  payload: number,
  comment: string
}

export interface IColumns {
  id: number,
  name: string
}