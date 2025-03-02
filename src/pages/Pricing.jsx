import PageNav from "../components/PageNav";
import styles from "./Product.module.css"; // همان استایل‌های Product استفاده می‌شود

export default function Pricing() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section className={styles.content}>
        <div className={styles.text}>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img
          src="/img-2.jpg"
          alt="overview of a large city with skyscrapers"
          className={styles.image}
        />
      </section>
    </main>
  );
}
