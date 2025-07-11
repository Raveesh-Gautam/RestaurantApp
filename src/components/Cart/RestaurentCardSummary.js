import React from "react";
import styles from "./RestaurantCardSummary.module.css";
import Card from "../UI/Card";

const RestaurentCardSummary = () => {
  return (
    <Card className={styles.card_wrapper}>
      <div className={styles.main}>
        <div className={styles.main_heading}>
          <h3>Delicious Food, Delivered to You</h3>
        </div>
        <div className={styles.p_text}>
          <p>
            Nestled in the heart of the city, our restaurant offers a warm and
            inviting atmosphere where culinary passion meets exceptional
            service. Specializing in a fusion of traditional and contemporary
            flavors, we serve freshly prepared dishes made with locally sourced
            ingredients.
          </p>
          <p>
            From savory starters to indulgent desserts, every plate is crafted
            with care to delight your taste buds. Our chefs are committed to
            innovation while honoring timeless cooking techniques, ensuring
            every visit is as satisfying as the last.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default RestaurentCardSummary;
