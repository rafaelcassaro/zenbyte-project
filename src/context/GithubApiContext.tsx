'use client'

import { GithubJson } from "@/app/api/route";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { ReactElement } from 'react';

export interface GithubApiContextProps {
    jsonData?: GithubJson[];
    setJsonData?: Dispatch<SetStateAction<GithubJson[]>>;
    filteredData?: GithubJson[];
    setFilteredData?: Dispatch<SetStateAction<GithubJson[]>>; 
    searchInput?: string;
    setSearchInput?: Dispatch<SetStateAction<string>>; 
}


export const GithubApiContext = createContext<GithubApiContextProps | undefined>(undefined);


export const GithubApiProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [jsonData, setJsonData] = useState<GithubJson[]>([]);
    const [filteredData, setFilteredData] = useState<GithubJson[]>([]);
    const [searchInput, setSearchInput] = useState<string>('');

    return(
        
        <GithubApiContext.Provider value={{jsonData, setJsonData, filteredData, setFilteredData, searchInput, setSearchInput}} >
            {children}
        </GithubApiContext.Provider>
    )
}


export const useJsonData = () => {
    const context = useContext(GithubApiContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };