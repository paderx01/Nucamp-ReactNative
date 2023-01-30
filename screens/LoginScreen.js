import { useEffect, useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { Checkbox, Input } from "react-native-elements";
import { SecureStore } from "expo-secure-store";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    console.log("username" + username);
    console.log("password" + password);
    console.log("remember" + remember);
  };
};
return (
  <View style={StyleSheet.container}>
    <Input
      placeholder="Username"
      leftIcon={{ type: "font-awesome", name: "user-o" }}
      onChangeText={(text) => setUsername(text)}
    />
  </View>
);

export default LoginScreen;
