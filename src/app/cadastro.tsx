import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import AppButton from "../components/AppButton";
import { api } from "../services/api";
import { cadastroStyles } from "../styles/cadastro.styles";

export default function CadastroUsuarioScreen() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [salvando, setSalvando] = useState(false);

  async function cadastrarUsuario() {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Atenção", "As senhas não são iguais.");
      return;
    }

    const usuario = {
      nome,
      email,
      senha,
      perfil: "MEDICO",
      ativo: true,
    };

    try {
      setSalvando(true);

      await api.post("/usuarios", usuario);

      Alert.alert("Sucesso", "Conta criada com sucesso!");
      router.replace("/");
    } catch (error) {
      console.log("Erro ao cadastrar usuário:", error);
      Alert.alert("Erro", "Não foi possível criar a conta.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={cadastroStyles.container}>
      <Text style={cadastroStyles.title}>Criar Conta</Text>

      <Text style={cadastroStyles.subtitle}>
        Cadastre-se para acessar o Prontu App
      </Text>

      <Text style={cadastroStyles.label}>Nome completo</Text>
      <TextInput
        style={cadastroStyles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text style={cadastroStyles.label}>Email</Text>
      <TextInput
        style={cadastroStyles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="email@exemplo.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={cadastroStyles.label}>Senha</Text>
      <TextInput
        style={cadastroStyles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <Text style={cadastroStyles.label}>Confirmar senha</Text>
      <TextInput
        style={cadastroStyles.input}
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        placeholder="Confirme sua senha"
        secureTextEntry
      />

      <AppButton
        title="Criar Conta"
        onPress={cadastrarUsuario}
        loading={salvando}
      />

      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={cadastroStyles.loginText}>Já tenho uma conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
