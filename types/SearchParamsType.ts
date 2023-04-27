type Params = {
    id:string
}

type SearchParams = {
    name:string
    image:string
    unit_amount: number | null
    id: string
    description: string | null
}

export type SearchParamsTypes = {
   params: Params
   searchParams: SearchParams
}