'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Table from "@/components/Table";
import Username from "@/components/Username";
import { GithubApiProvider } from "@/context/GithubApiContext";


export default function Home({ searchParams }: any) {
  const currentPage = searchParams?.page || 1;
  const [numberPage, setNumberPage] = useState<number>(1);
  const [username, setUsername] = useState('');


  useEffect(() => {
    setNumberPage(Number(currentPage));
  }, [currentPage]);

  function add() {
    setNumberPage(numberPage + 1);

  }

  function remove() {
    if (numberPage > 1) {
      setNumberPage(numberPage - 1);
    }

  }

  function getUsername(user: string): void {
    setUsername(user);
  }

  return (
    <>
    <GithubApiProvider>
      <main className="w-screen">
        <h1 className="text-weakblack block text-3xl">Pesquise um usuario do github</h1>

        <div className="my-6">
          <Username
            getUsername={getUsername}
          />
        </div>
        <hr className="bg-weakblack p-1px my-7" />
        
        <Table
          page={currentPage}
          username={username}
        />

        <div className="flex justify-between my-3">
          <Link href={`/?page=${numberPage > 1 ? numberPage - 1 : numberPage}`}>
            <button onClick={remove} className="text-red-600 font-bold ">Pagina anterior</button>
          </Link>

          <Link href={`/?page=${numberPage + 1}`}>
            <button onClick={add} className="text-red-600 font-bold ">Próxima pagina</button>
          </Link>
        </div>

      </main>
      </GithubApiProvider>
    </>
  );
}
