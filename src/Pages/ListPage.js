import React, {useEffect, useState } from 'react'
import ButtonBack from '../Components/ButtonBack';
import List from '../Components/List';
import classes from './ListPage.module.css'

const ListPage = () => {
    const[list, setList]=useState([]);

        const fetchListHandler = async () => {
            const response = await fetch('https://pcfy.redberryinternship.ge/api/laptops?token=432db06872e4e66009d4636e383c03a7', {
              headers: {
                Accept: "application/json",
              },
            });
            const listNote = await response.json();
            const loadedList = [];
            console.log(listNote)
        
            for (const key in listNote.data) {
              loadedList.push({
                laptop: listNote.data[key].laptop,
                user: listNote.data[key].user,
              });
            }
            setList(loadedList);
            
          };
        
          useEffect(() => {
            fetchListHandler();
          }, []);


          return (
            <div className={classes.frame}>
               
              <List list={list}/>
            </div>
          );
        };

export default ListPage