import React from "react";
import {
  AntDesign,
  Feather,
  Entypo,
  Octicons,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import NavigationBar from "react-native-navbar";

import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

export default function Home({ tweets }) {
  const list = { tweets };
  //   console.log(list.tweets[2].user.screen_name);

  return (
    <View style={styles.container}>
      <View>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={leftButtonConfig}
        ></NavigationBar>
      </View>
      <ScrollView>
        {list.tweets.map((tweet) => {
          return (
            <View style={styles.aTweet}>
              <View style={styles.headContiner}>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  source={{ uri: `${tweet.user.profile_image_url}` }}
                />
                <View style={styles.idContainer}>
                  <Text style={styles.name}>{tweet.user.name}</Text>
                  <Text style={styles.screen_name}>
                    @{tweet.user.screen_name}
                  </Text>
                </View>
                <AntDesign name="twitter" size={24} color="#1DA1F2" />
              </View>
              <Text style={styles.text}>{tweet.text}</Text>
              <View style={styles.dayBox}>
                <Text style={styles.aTweet__day}>5:50 AM ⋅ Aug 22, 2020</Text>
                {/* <AntDesign name="infocirlceo" size={18} color="#657787" /> */}
              </View>
              <View style={styles.line} />
              <View style={styles.countBox}>
                <AntDesign name="hearto" size={20} color="#657787" />
                <Text style={styles.counter}>{tweet.favorite_count}</Text>
                <FontAwesome5 name="retweet" size={20} color="#8A949D" />
                <Text style={styles.counter}>{tweet.retweet_count}</Text>
                <Text style={styles.count_msg}>
                  people are Tweeting about this
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.FooterTab}>
        <Octicons name="home" size={26} color="#657787" />
        <Entypo name="magnifying-glass" size={26} color="#1DA1F2" />
        <FontAwesome5 name="bell" size={26} color="#657787" />
        <MaterialIcons name="mail-outline" size={26} color="#657787" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  aTweet: {
    padding: 12,
    borderColor: "#CDD6DD",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  headContiner: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  idContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  name: { color: "#14171A", fontSize: 16, fontWeight: "700" },
  screen_name: { color: "#657787" },
  text: {
    color: "#14171A",
    fontSize: 18,
    marginBottom: 8,
  },
  aTweet__day: {
    fontSize: 16,
    color: "#657787",
    fontWeight: "500",
  },

  line: {
    borderColor: "#CDD6DD",
    borderWidth: 0.5,
    marginBottom: 10,
    marginTop: 10,
  },
  countBox: {
    flex: 1,
    flexDirection: "row",
  },
  counter: {
    fontSize: 16,
    marginLeft: 4,
    marginRight: 7,
    color: "#657787",
    fontWeight: "600",
  },
  count_msg: {
    color: "#657787",
  },
  FooterTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 30,
    paddingTop: 20,
    borderTopColor: "#E6EBEE",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderWidth: 1,
  },
});

const rightButtonConfig = {
  title: <Entypo name="dots-three-horizontal" size={24} color="#1DA1F2" />,
};
const leftButtonConfig = {
  title: <AntDesign name="arrowleft" size={24} color="#1DA1F2" />,
};
const titleConfig = {
  title: `"아침 식사"`,
};
