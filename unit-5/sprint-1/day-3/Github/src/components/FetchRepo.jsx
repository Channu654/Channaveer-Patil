import axios from "axios";

export const FetchRepo = (q,page,per_page) => {
  return axios("https://api.github.com/search/repositories", {
    methods: "GET",
    params: {
      q,
      per_page,
      page

    }
  });
};
