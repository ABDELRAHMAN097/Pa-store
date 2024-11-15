import { Link } from 'react-router-dom';

interface OutlineButtonProps {
  link?: string;
  text: string;
  classNames?: string;
  isLink: boolean;
  LinkclassNames?: string;
}

const OutlineButton = ({ link, text, classNames = '', LinkclassNames = '', isLink }: OutlineButtonProps) => {
  return isLink && link ? (
    <Link to={link} className={LinkclassNames}>
      <button className={`text-3xl bg-white border border-primary-text cursor-pointer duration-300 text-primary-text hover:bg-primary-text rounded-lg hover:text-white px-5 py-4 ${classNames}`}>
        {text}
      </button>
    </Link>
  ) : (
    <button className={`text-3xl bg-white border border-primary-text cursor-pointer duration-300 text-primary-text hover:bg-primary-text rounded-lg hover:text-white px-5 py-4 ${classNames}`}>
      {text}
    </button>
  );
};

export default OutlineButton;
