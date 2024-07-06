import { GithubApiContext, useJsonData } from "@/context/GithubApiContext";
import { useContext } from "react";

export const useApiList = () => {
    const {jsonData, setJsonData} = useJsonData();

    function sortStars() {
        const reposArray = Object.values(jsonData);
        reposArray.sort((a, b) => a.stargazers_count - b.stargazers_count);

        setJsonData(reposArray)
    }

    function sortForks() {
        const reposArray = Object.values(jsonData);
        reposArray.sort((a, b) => a.forks_count - b.forks_count);
        setJsonData(reposArray)
    }

    function sortName() {
        const reposArray = Object.values(jsonData);
        reposArray.sort((a, b) => a.name.localeCompare(b.name));
        setJsonData(reposArray)
    }
   
    return {
        jsonData, 
        setJsonData,
        sortName,
        sortForks,
        sortStars
    };
  };