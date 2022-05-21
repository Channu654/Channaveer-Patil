const ShowRepo = ({ item }) => {
  return (
    <div
      style={{
        width: "30vw",
        margin: "10px auto",
        textAlign: "center",
        background:"green",
        padding: "10px",
      }}
    >
      <img
        src={item.owner.avatar_url}
        alt="profile"
        width="80px"
        style={{ borderRadius: "50px", background: "gray" }}
      />
      <p>{item.owner.login}</p>
      <p>Repo👇</p>
      <a href={item.git_url.split(":")[1]}>
        https:{item.git_url.split(":")[1]}
      </a>
    </div>
  );
};

export default ShowRepo;
