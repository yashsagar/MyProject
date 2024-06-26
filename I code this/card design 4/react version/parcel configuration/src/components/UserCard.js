const UserCard = ({ user }) => {
  return (
    <li className="flex gap-4 items-center mb-4">
      <img
        src={user["image-url"]}
        alt="user image"
        className="w-16 h-16 rounded-full"
      />
      <div>
        <p>{user.name}</p>
        <p>{user.age}</p>
      </div>
    </li>
  );
};

export default UserCard;
