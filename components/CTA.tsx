import styles from "@/styles/style";
import Button from "./Button";

const CTA: React.FC = () => (
  <section className='bg-black-gradient-2 box-shadow'>
    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col`}>
      <div className={`${styles.boxWidth}`}>
        <div className="flex-1 flex flex-col">
          <h2 className={styles.heading2}>Let's try our service now!</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
            Semua yang kamu butuhkan untuk merekrut agen dan meningkatkan penjualan
            bisnis kamu.
          </p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button />
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
