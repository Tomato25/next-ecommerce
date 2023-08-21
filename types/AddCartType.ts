export type AddCartType = {
    name:string
    image:string
    description: string | null
    unit_amount: number | null
    quantity?: number | 1
    id: string
}