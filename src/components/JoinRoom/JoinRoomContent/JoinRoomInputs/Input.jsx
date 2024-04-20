export const Input = ({ placeholder, value, changeHandler }) => {
  return (
    <input
      value={value}
      onChange={changeHandler}
      className="join_room_input"
      placeholder={placeholder}
    />
  );
};
