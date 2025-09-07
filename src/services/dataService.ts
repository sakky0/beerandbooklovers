import axios from "axios";
import type { Data } from "../models/data";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { LawDocument } from "../models/document";

const DATA_URI = "https://api.jsonsilo.com/public/04a591b8-8aa9-428b-9b13-8529761b18bf";
const FRESH_MINUTES = 10;

const getData = async () => {
    const res = await axios.get(DATA_URI);
    return res.data as Data;
};

const useData = (options?: UseQueryOptions<Data>) => {
    return useQuery({
        queryKey: ["data"],
        queryFn: getData,
        ...options,
        staleTime: 1000 * 60 * FRESH_MINUTES,
    });
};

const usePartialData = <T>(
    selector: (x: Data | undefined) => T,
    options?: UseQueryOptions<Data>
) => {
    const queryData = useData(options);
    const data = selector(queryData?.data);
    return { ...queryData, data };
};

export const useConstitution = (options?: UseQueryOptions<Data>) => {
    return usePartialData(x => x?.constitution, options);
};

export const useMembers = (options?: UseQueryOptions<Data>) => {
    return usePartialData(x => x?.members, options);
};
