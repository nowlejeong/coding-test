import React from "react";
import Loading from "./Loading";
import { Alert } from "react-native";
import Home from "./Home";

export default class extends React.Component {
  state = { isLoading: true, q: "아침식사", count: "200", tweets: [] };
  getSearchingData = async () => {
    const { q, count } = this.state;
    const url = "https://api.twitter.com/1.1/search/tweets.json";
    const params = new URLSearchParams();
    params.append("count", count);
    params.append("q", q);
    try {
      let response = await fetch(`${url}?${params}`, {
        headers: {
          Authorization:
            "bearer AAAAAAAAAAAAAAAAAAAAAP3jGwEAAAAArTWNF%2FeHIRW9pSc%2FwS%2B2Bjl9T9I%3DuxuIh6E2gYfgdnntPml4HTHbM7kIFvBaVeIcqht7a0yh92HLdD",
        },
      });
      response = await response.json();
      console.log(response);
      this.setState({ isLoading: false, tweets: response.statuses });
    } catch (error) {
      Alert.alert("ERROR", "Im sorry");
    }
  };
  componentDidMount() {
    this.getSearchingData();
  }
  render() {
    const { isLoading, tweets } = this.state;
    return isLoading ? <Loading /> : <Home tweets={tweets} />;
  }
}
