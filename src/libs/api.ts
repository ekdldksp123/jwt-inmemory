import { errorMonitor } from "events"
import useSWR from "swr"

const fetcher = async (url:string) => {
    const res = await fetch(url)

    if(!res.ok) {
        const error:any = new Error('[FAIL] fetch data' )
        error.message = await res.json()
        error.code = res.status
        throw error
    }

    return await res.json()
}

const callLoginApi = async (id:string, password:string) => {

}