import PropTypes from 'prop-types';
import css from '../../components/feedback.module.css';
export const FeedbackOption = ({ options }) => {
  const { handleGoodIncrement, handleNeutralIncrement, handleBadIncrement } =
    options;
  return (
    <>
      <ul className={css.button__box}>
        <li className={css.feedback__item}>
          <button type="button" onClick={handleGoodIncrement}>
            Good
          </button>
        </li>
        <li className={css.feedback__item}>
          <button type="button" onClick={handleNeutralIncrement}>
            Neutral
          </button>
        </li>
        <li className={css.feedback__item}>
          <button type="button" onClick={handleBadIncrement}>
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.object.isRequired,
};
