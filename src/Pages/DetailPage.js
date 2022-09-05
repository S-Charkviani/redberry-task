import { useEffect, useState } from "react";
import ButtonBack from "../Components/ButtonBack";
import classes from './DetailPage.module.css'

const DetailPage = (laptopId) => {
    const [info, setInfo] = useState([]);
    const [team, setTeam] = useState();
    const [position, setPosition] = useState();
    const [brand, setBrand] = useState();
    const [selected, setSelected] = useState([]);
  console.log(laptopId.laptopId)
    const fetcInfo = async () => {
      const response = await fetch(
        `https://pcfy.redberryinternship.ge/api/laptop/${laptopId.laptopId}?token=432db06872e4e66009d4636e383c03a7`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const responseInfo = await response.json();
  
      let resInfo = [];
  
      resInfo.push({
        laptop: responseInfo.data.laptop,
        user: responseInfo.data.user,
      });
      setInfo(resInfo);
      setSelected({
        teamId: responseInfo.data.user.team_id,
        positionId: responseInfo.data.user.position_id,
        brandId: responseInfo.data.laptop.brand_id,
      });
    };
    const teamFetch = async () => {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/teams",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
  
      const responseData = await response.json();
  
      let teams;
      for (const key in responseData.data) {
        if (selected.teamId === responseData.data[key].id) {
          teams = responseData.data[key].name;
        }
  
        setTeam(teams);
      }
    };
    const positionFetCh = async () => {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/positions",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const responseData = await response.json();
      let positions;
  
      for (const key in responseData.data) {
        if (selected.teamId === responseData.data[key].team_id) {
          if (selected.positionId === responseData.data[key].id) {
            positions = responseData.data[key].name;
          }
          setPosition(positions);
        }
      }
    };
    const brandFetch = async () => {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/brands",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
  
      const responseData = await response.json();
  
      let brands;
  
      for (const key in responseData.data) {
        if (selected.brandId == responseData.data[key].id) {
          brands = responseData.data[key].name;
        }
  
        setBrand(brands);
      }
    };
  
    useEffect(() => {
      fetcInfo();
    }, [laptopId]);

    useEffect(() => {
      teamFetch();
      positionFetCh();
      brandFetch();
    }, [selected]);
  
    const userInfo = info.map((info) => {
      return (
        <div key={laptopId.laptopId} className={classes.segment}>
          <img
            src={`https://pcfy.redberryinternship.ge${info.laptop.image} `}
            alt="not found"
          ></img>

          <div key={info.laptop.name} className={classes.titleBox}>
             <ol><p>სახელი: </p> {info.user.name+" "+info.user.surname}</ol> 
              <ol><p>თიმი: </p>{team}</ol>
              <ol><p>პოზიცია: </p>{position}</ol>
              <ol><p>მეილი: </p>{info.user.email}</ol>
              <ol><p>ტელ.ნომერი: </p>{info.user.phone_number}</ol>
           
          </div>

        </div>
      );
    });
    const lapHardInfo = info.map((info) => {
      return (
        <div key={laptopId.laptopId} className={classes.segment}>
          <div className={classes.titleBox}>
            <ul><p>ლეპტოპის სახელი: </p> {info.laptop.name}</ul>
            <ul><p>ლეპტოპის სახელი: </p> {info.laptop.name}</ul>
            <ul><p>ლეპტოპის ბრენდი: </p>{brand}</ul>
            <ul><p>RAM: </p>{info.laptop.ram}</ul>
            <ul><p>მეხსიერების ტიპი: </p>{info.laptop.hard_drive_type}</ul>
            </div>
            <div className={classes.titleBox}>
            <ul><p>CPU: </p> {info.laptop.cpu.name}</ul>
            <ul><p>CPU ბითვი: </p> {info.laptop.cpu.cores}</ul>
            <ul><p>CPU ნაკადი: </p>  {info.laptop.cpu.threads}</ul>
            </div>
          
        </div>
      );
    });
    const lapStateInfo = info.map((info) => {
      return (
        <div key={laptopId.laptopId} className={classes.segment}>
          <div className={classes.titleBox}>
          <ul> <p>ლეპტოპის მდგომარეობა: </p> {info.laptop.state}</ul>
          <ul>  <p>ლეპტოპის ფასი: </p>{info.laptop.price}</ul>
            </div>
            <div className={classes.titleBox}>
            <ul> <p>შეძენის რიცხვი: </p> {info.laptop.purchase_date}</ul>
            </div>
        </div>
      );
    });
  
    return (
      <div className={classes.frame}>
        <div className={classes.coverTitle}>
        <ButtonBack />
        <h1> ლეპტოპის ინფო</h1>
        </div>
        <div className={classes.content}>
          {userInfo}
          <hr />
          <div>{lapHardInfo}</div>
          <hr />
          <div>{lapStateInfo}</div>
        </div>
      </div>
    );
  };

  export default DetailPage