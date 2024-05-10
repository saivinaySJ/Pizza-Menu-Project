function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        We're open between {openHours}:00 to {closeHours}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
