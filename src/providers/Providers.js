import React from 'react'
import {fetcher} from "../api/api";
import {SWRConfig} from "swr";

const Providers = ({children}) => {
    return <SWRConfig
        value={{
            refreshInterval: 3000,
            fetcher,
        }}
    >
        {children}
    </SWRConfig>
}

export default Providers
