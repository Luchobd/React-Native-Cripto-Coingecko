import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <View style={styles.containerName}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.symbol}>({coin.symbol})</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrice}>$ {coin.current_price}</Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styles.priceUp
              : styles.priceDown,
          ]}
        >
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#12121210",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
  },
  image: {
    height: 30,
    width: 30,
  },
  coinName: {
    flexDirection: "row",
  },
  symbol: {
    color: "#ffffff90",
    paddingLeft: 5,
    textTransform: "uppercase",
  },
  containerName: {
    marginLeft: 15,
  },
  textPrice: {
    color: "#fff",
    textAlign: "right",
  },
  pricePercentage: {
    textAlign: "right",
    fontSize: 14,
  },
  priceUp: {
    color: "#00b5b9",
  },
  priceDown: {
    color: "#fc4422",
  },
});

export default CoinItem;
