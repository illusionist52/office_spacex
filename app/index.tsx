import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import "../global.css";

export default function Index() {
  const properties = [
    { id: "1", name: "Property 1", price: "$100,000" },
    { id: "2", name: "Property 2", price: "$150,000" },
    { id: "3", name: "Property 3", price: "$200,000" },
  ];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello, React Native! My name is usmaan</Text>
      <TextInput placeholder="Enter your name" />
      <TouchableOpacity
        onPress={() => alert("Button Pressed!")}
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>

      <FlatList data={properties} keyExtractor={(item) => item.id} renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "lightgray", borderRadius: 5, marginTop: 10   }}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
        </View>
      )} />
    </View>
  );
}
