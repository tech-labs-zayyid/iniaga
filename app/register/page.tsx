"use client";
import styles from "@/styles/style";
import { RegisterForm } from "@/components";

import { useEffect } from "react";

const RegisterAcc: React.FC = () => {
  return (
    <>
      <div className="">
        {/* <div className={`${styles.boxWidth}`}> */}
        <RegisterForm />
        {/* </div> */}
      </div>
    </>
  );
};

export default RegisterAcc;
