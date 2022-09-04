import React, { useCallback, useEffect, useState } from 'react'

const ListPage = () => {
    const[list, setList]=useState([]);

        const fetchListHandler = useCallback(async () => {
            const response = await fetch('https://pcfy.redberryinternship.ge/api/laptops?token=432db06872e4e66009d4636e383c03a7', {
              headers: {
                Accept: "application/json",
              },
            });
            const listNote = await response.json();
            const loadedList = [];
        
            for (const key in listNote.data) {
              loadedList.push({
                laptop: listNote.data[key].laptop,
                user: listNote.data[key].user,
              });
            }
            setList(loadedList);
            
          }, []);
        
          useEffect(() => {
            fetchListHandler();
          }, [fetchListHandler]);
        
         console.log(list)
  return (
    <div>
           {list.map((listData) => {
        return (
          <div key={listData.laptop.id} >
            <div >
              <img
                src={`https://pcfy.redberryinternship.ge${listData.laptop.image} `}
                alt="not found"
              ></img>
            </div>
            <div>
              <h1>
                {listData.user.name} {listData.user.surname}
              </h1>
              <h1>{listData.laptop.name}</h1>
            </div>
            <button value={listData.laptop.id}>
              მეტის ნახვა
            </button>
          </div>
        );
      })}
    </div>
  )
}

export default ListPage