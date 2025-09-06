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

export const useConstitution = (options?: UseQueryOptions<LawDocument[]>) => {
    return useQuery({
        queryKey: ["constitution"],
        queryFn: () => getData().then(d => d.constitution),
        ...options,
        staleTime: 1000 * 60 * FRESH_MINUTES,
    });
};
