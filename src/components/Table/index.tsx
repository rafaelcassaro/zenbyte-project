import { useContext, useEffect, useState } from "react";
import { GET , GithubJson} from "../../api/route"
import RedButton from "../RedButton";
import TextCamp from "../TextCamp";
import FiltersSection from "../FiltersSection";
import { GithubApiContext, useJsonData } from "@/context/GithubApiContext";

interface TableProps {
    page: number;
    username: string;
}

export default function Table ({ page, username }: TableProps) {
    
    const {jsonData} = useJsonData();
    

    return (
        <>
            
            <FiltersSection
                page={page}
                username={username}
            />

            <section>
                <table className="w-full border-black border-solid border-2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Stars</th>
                            <th>Forks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonData.map((repository: GithubJson) => (
                            <tr key={repository.id}  >
                                <td className="border-black border-solid border p-5">{repository.name}</td>
                                <td className="border-black border-solid border p-5">{repository.stargazers_count}</td>
                                <td className="border-black border-solid border p-5">{repository.forks_count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}

