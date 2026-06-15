import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { api } from "../../services/api";
import { pacientesStyles } from "../../styles/pacientes.styles";

type Paciente = {
  id: number;
  nome: string;
  cpf?: string;
  dataNascimento?: string;
  telefone?: string;
};

export default function PacientesScreen() {
  const router = useRouter();
  const { usuarioId } = useLocalSearchParams();

  const [busca, setBusca] = useState("");
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [carregando, setCarregando] = useState(true);

  useFocusEffect(
  useCallback(() => {
    carregarPacientes();
  }, [])
);

  async function carregarPacientes() {
    try {
      const response = await api.get(`/pacientes/usuario/${usuarioId}`);
      setPacientes(response.data);
    } catch (error) {
      console.log("Erro ao carregar pacientes:", error);
    } finally {
      setCarregando(false);
    }
  }

  const pacientesFiltrados = pacientes.filter((paciente) =>
    paciente.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function pegarIniciais(nome: string) {
    return nome
      .split(" ")
      .map((parte) => parte[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }

  function calcularIdade(dataNascimento?: string) {
    if (!dataNascimento) return "Idade não informada";

    const nascimento = new Date(dataNascimento);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return `${idade} anos`;
  }

  return (
    <View style={pacientesStyles.container}>
      <View style={pacientesStyles.header}>

        <Text style={pacientesStyles.title}>Pacientes</Text>

        <Ionicons name="notifications-outline" size={22} color="#000" />
      </View>

      <View style={pacientesStyles.searchContainer}>
        <Ionicons name="search-outline" size={16} color="#053388" />
        <TextInput
          style={pacientesStyles.searchInput}
          value={busca}
          onChangeText={setBusca}
          placeholder="Pesquisar paciente"
        />
      </View>

      {carregando ? (
        <ActivityIndicator size="large" color="#053388" />
      ) : (
        <FlatList
          data={pacientesFiltrados}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={pacientesStyles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={pacientesStyles.card}
              onPress={() =>
                router.push({
                  pathname: "/pacientes/[id]",
                  params: {
                    id: String(item.id),
                    usuarioId: String(usuarioId),
                  },
                })
              }
            >
              <View style={pacientesStyles.avatar}>
                <Text style={pacientesStyles.avatarText}>
                  {pegarIniciais(item.nome)}
                </Text>
              </View>

              <View style={pacientesStyles.info}>
                <Text style={pacientesStyles.nome}>{item.nome}</Text>
                <Text style={pacientesStyles.dados}>
                  {calcularIdade(item.dataNascimento)} -{" "}
                  {item.telefone || "Sem telefone"}
                </Text>
              </View>

              <Ionicons name="chevron-forward" size={24} color="#000" />
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity
        style={pacientesStyles.addButton}
        onPress={() =>
          router.push({
            pathname: "/pacientes/novo",
            params: { usuarioId: String(usuarioId) },
          })
        }
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}