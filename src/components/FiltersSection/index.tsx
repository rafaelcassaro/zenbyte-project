import { useEffect } from "react";
import RedButton from "../RedButton";
import TextCamp from "../TextCamp";
import { GET , GithubJson } from "@/api/route";
import { useJsonData } from "@/context/GithubApiContext";
import { useApiList } from "@/hooks/useApiList";


interface FiltersSectionProps {
    page: number;
    username: string;
}

export default function FiltersSection ({ page, username }: FiltersSectionProps){
    
    const {setJsonData, filteredData, setFilteredData, searchInput, setSearchInput} = useJsonData();
    const {sortName, sortForks, sortStars} = useApiList();

    useEffect(() => {
        GET(page, username).then((response) => {
            if(setJsonData && setFilteredData){
                setJsonData(response);
                setFilteredData(response);
            }
            
        })
    }, [page, username]);

    useEffect(() => {
        if( setJsonData && searchInput){
            const results = (filteredData as GithubJson[]).filter(person =>
                person.name.toLowerCase().includes(searchInput.toLowerCase()) 
            );
            setJsonData(results);
        }
        
    }, [searchInput]);
    
    

    const onTyped = (evento: any) => {
        if(setSearchInput){
            setSearchInput(evento.target.value)
        }

    }


    return (
        <section className="flex gap-5 justify-center items-center box-border min-[1px]:flex-col  md:flex-row ">
                <label className="font-semibold">FILTRO: </label>
                <TextCamp
                className="text-lg p-1 border-black border-solid border text-gray-900"     
                type='text'
                placeholder='Filtre pelo nome'
                onChange={onTyped}
                />
                
                <RedButton  onClick={sortStars} >Ordernar Stars</RedButton>
                <RedButton  onClick={sortForks} >Ordernar Forks</RedButton>
                <RedButton  onClick={sortName} >Ordernar Name</RedButton>
            </section>
    )
}
