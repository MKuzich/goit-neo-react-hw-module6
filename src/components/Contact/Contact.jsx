import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.card}>
      <div className={css.group}>
        <div className={css.row}>
          <FaUser size={20} />
          <h2 className={css.attribute}>{name}</h2>
        </div>
        <div className={css.row}>
          <FaPhone size={20} />
          <span className={css.attribute}>{number}</span>
        </div>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
