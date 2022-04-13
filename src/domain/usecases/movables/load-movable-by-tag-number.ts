import { MovableModel } from '@/domain/models'

export interface LoadMovableByTagNumber {
  loadByTagNumber: (tag_number: number) => Promise<MovableModel>
}

export namespace LoadMovableByTagNumber {
  export type Input = {tag_number: number}
  export type Output = {
    id: string
    tag_number: number
  }
}
