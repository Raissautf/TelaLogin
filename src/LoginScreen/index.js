import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const api = require("../services/api");
export default function LoginScreen() {
  const [inputSenha, setInputSenha] = useState("");
  const [hidePass, setHidePass] = useState(true);

  //consultando a api
  async function consulta() {
    const response = await api.login("raissa@gmail.com", "123456");
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontWeight: "bold" }}>Faça Login em sua conta</Text>
      </View>
      <StatusBar style="auto" />
      <View>
        <TextInput style={styles.input} placeholder="Email" />
        <View style={styles.inputPaiSenha}>
          <TextInput
            style={styles.TextinputSenha}
            placeholder="Senha"
            value={inputSenha}
            onChangeText={(senha) => setInputSenha(senha)}
            secureTextEntry={hidePass}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
          >
            <Ionicons name="eye" color="#000000" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <Button title="ENTRAR" color="#841584" onPress={consulta}></Button>
        </View>
        <View style={styles.titleSenha}>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: "purple" }}>
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    alignItems: "baseline",
    height: 40,
    margin: 12,
    padding: 8,
  },
  titleSenha: {
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 100,
    margin: 12,
  },
  button: {
    borderRadius: 100,
    margin: 12,
    padding: 15,
  },
  // alinhando icone ao lado do input
  inputPaiSenha: {
    flexDirection: "row",
    width: "90%",
  },
  TextinputSenha: {
    width: "100%",
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 100,
    margin: 12,
  },
  icon: {
    height: 25,
    right: 60,
    top: 20,
  },
});
