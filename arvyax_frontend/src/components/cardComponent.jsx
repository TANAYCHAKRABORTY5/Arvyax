const Card = ({ name, email, title, description, isPublished }) => {
  return (
    <div className="bg-black bg-opacity-40  p-4 rounded-lg">
      <div className="text-white font-semibold py-3">{name}</div>
      <div className="text-white font-semibold py-3">{email}</div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
      <div className="text-gray-500 text-sm">
        {isPublished ? "Published" : "Draft"}
      </div>
    </div>
  );
};

export default Card;
