export type MovableModel= {
  id: string
  description: string
  subitem_id: string
  entry_type: string
  acquisition_date: Date
  incorporation_date: Date
  acquisition_value: number
  warranty?: string
  warranty_end_date?: Date
  conservation_status: string
  situation_status: string
  additional_information?: string
}
