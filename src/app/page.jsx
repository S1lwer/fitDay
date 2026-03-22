import Image from "next/image";
import styles from "./page.module.css";


import Avatar from "@/components/avatar/avatar";
import TextType from "@/components/textType/textType";
import Form from "@/components/form/form";
import { useEffect } from "react";
import { useState,useEffect } from "react"

export default function Home() {
  const name = 'Mikhail';
  const [user,setUser] = useState(null)


   const advices = [
     'Больше овощей и фруктов каждый день.',
     'В каждый приём пищи добавляй белок.' ,
     'Пей достаточно воды, минимум сладких напитков.'
  ];

 useEffect(()=>{
const tg = window.Telegram.WebApp;
const userData = tg.initDataUnsafe.user;
tg.expand();

if(userData){
  setUser(userData)
}

 },[])


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Avatar />
        <h1>Hello, {user !== null ? user.firstName: name}!</h1>
        <p> <TextType text={advices}/> </p>

        <div className={styles.form}>
          <Form />
        </div>
        
      </main>
    </div>
  );
}
