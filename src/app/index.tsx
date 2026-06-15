import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import AppButton from "../components/AppButton";
import { api } from "../services/api";
import { loginStyles } from "../styles/login.styles";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Atenção", "Preencha email e senha.");
      return;
    }

    try {
      setCarregando(true);

      const response = await api.post("/usuarios/login", {
        email,
        senha: password,
      });

      router.replace({
        pathname: "/pacientes",
        params: { usuarioId: String(response.data.id) },
      });
    } catch (error) {
      Alert.alert("Erro", "Email ou senha inválidos.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <KeyboardAvoidingView style={loginStyles.container}>
      <ScrollView contentContainerStyle={loginStyles.scrollContainer}>
        <View>
          <Image
            source={require("../../assets/icone-prontuapp.png")}
            style={loginStyles.icone}
          />
        </View>

        <View style={loginStyles.headerContainer}>
          <Text style={loginStyles.appTitle}>Prontu App</Text>
          <Text style={loginStyles.appSubtitle}>
            Sistema de Prontuário Digital
          </Text>
        </View>

        <Text style={loginStyles.description}>
          Tenha acesso rápido ao histórico clínico{"\n"}
          e aos registros dos pacientes.
        </Text>

        <View style={loginStyles.formContainer}>
          <View style={loginStyles.inputContainer}>
            <TextInput
              style={loginStyles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={loginStyles.inputContainer}>
            <TextInput
              style={loginStyles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <AppButton
            title="Entrar"
            onPress={handleLogin}
            loading={carregando}
          />

          <View style={loginStyles.footerContainer}>
            <Text style={loginStyles.footerText}>Não tem uma conta?</Text>

            <TouchableOpacity onPress={() => router.push("/cadastro")}>
              <Text style={loginStyles.createAccountText}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
