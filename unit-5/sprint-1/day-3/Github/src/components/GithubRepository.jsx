import { useEffect, useState } from "react";
import { FetchRepo } from "./FetchRepo";
import ShowRepo from "./ShowRepo";

const GithubRepository = () => {
  const [repo, setRepo] = useState();
  const [text, setText] = useState("");
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [error,setError]=useState(false)
  const [per_page, setPer_Page] = useState(6);
  const [total, setTotal] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    FetchRepo(query, page, per_page).then((response) => {
      setTotal(response.data.total_count);
      setRepo(response.data.items);
      setLoading(false);
      setError(false)
    }).catch((error)=>{
      console.log(error)
      setError(true)
      setLoading(false)
    })
  }, [query, page, per_page]);
  // console.log(repo);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(text);
    setLoading(true);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img width={"50px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVo5vR7JRIV8hT_6tALG743PBE2qwOU6tCx5qVoOM8cnvbvJI3vLLBdXSLvAtBHlElfg&usqp=CAU" alt="" />
      <h1 style={{margin:"0 0 10px"}}>Github</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={{ fontSize: "19px", padding: "5px" }}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search repository"
        />
        <br />
        <br />
        <select
          style={{ fontSize: "19px", padding: "5px" }}
          name="per_page"
          id=""
          onChange={(e) => setPer_Page(e.target.value)}
        >
          <option value="">Select per page result</option>
          <option value="5">5 results per page</option>
          <option value="6">6 results per page</option>
          <option value="7">7 results per page</option>
          <option value="8">8 results per page</option>
          <option value="9">9 results per page</option>
          <option value="10">10 results per page</option>
        </select>
        <br />
        <br />
        <input style={{ fontSize: "19px", padding: "5px" }} type="submit" />
      </form>
      {loading && <div>Loading....</div>}
      {error && <div>error....</div>}
      <h3>Total Page {Math.floor(total / 5)}</h3>
      <br />
      <br />
      <div style={{display:"flex", flexWrap:"wrap"}}>

      {repo?.map((item) => (
        <ShowRepo item={item} key={item.id} />
        ))}
        </div>
        <div>

      <button style={{padding:"10px 20px",margin:"5px"}} disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button style={{padding:"10px 20px"}} disabled={loading} onClick={() => setPage(page + 1)}>
        Next
      </button>
        </div>
    </div>
  );
};

export default GithubRepository;
