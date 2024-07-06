import { GithubApiContext, useJsonData } from "@/context/GithubApiContext";
import { useContext } from "react";

export const useApiList = () => {
    const {jsonData, setJsonData} = useJsonData();

    function sortStars() {

        if(jsonData && setJsonData){
            const reposArray = Object.values(jsonData);
            reposArray.sort((a, b) => a.stargazers_count - b.stargazers_count);
    
            setJsonData(reposArray)
        }

        
    }

    function sortForks() {

        if(setJsonData && jsonData){
            const reposArray = Object.values(jsonData);
            reposArray.sort((a, b) => a.forks_count - b.forks_count);
            setJsonData(reposArray)
        }
        
    }

    function sortName() {
        if(setJsonData && jsonData){
            const reposArray = Object.values(jsonData);
            reposArray.sort((a, b) => a.name.localeCompare(b.name));
            setJsonData(reposArray)
        }
        
    }
   
    return {
        jsonData, 
        setJsonData,
        sortName,
        sortForks,
        sortStars
    };
  };