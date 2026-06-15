import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { api } from "../../services/api";
import { pacienteDetalheStyles } from "../../styles/pacienteDetalhe.styles";

type Paciente = {
  id: number;
  nome: string;
  cpf?: string;
  dataNascimento?: string;
  sexo?: string;
  telefone?: string;
  email?: string;
  endereco?: string;
  observacoes?: string;
};

type Consulta = {
  id: number;
  dataConsulta: string;
  queixaPrincipal?: string;
  historicoDoenca?: string;
  diagnostico?: string;
  conduta?: string;
  observacoes?: string;
};

export default function PacienteDetalheScreen() {
  const router = useRouter();
  const { id, usuarioId } = useLocalSearchParams();

  const [paciente, setPaciente] = useState<Paciente | null>(null);
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [carregando, setCarregando] = useState(true);

  useFocusEffect(
    useCallback(() => {
      carregarDados();
    }, [])
  );

  async function carregarDados() {
    try {
      setCarregando(true);

      const pacienteResponse = await api.get(`/pacientes/${id}`);
      const consultasResponse = await api.get(`/consultas/paciente/${id}`);

      setPaciente(pacienteResponse.data);
      setConsultas(consultasResponse.data);
    } catch (error) {
      console.log("Erro ao carregar prontuário:", error);
    } finally {
      setCarregando(false);
    }
  }

  async function excluirPaciente() {
    Alert.alert(
      "Excluir Paciente",
      "Deseja realmente excluir este paciente?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              await api.delete(`/pacientes/${id}`);

              Alert.alert("Sucesso", "Paciente excluído com sucesso!");
              router.back();
            } catch (error) {
              console.log("Erro ao excluir paciente:", error);
              Alert.alert("Erro", "Não foi possível excluir o paciente.");
            }
          },
        },
      ]
    );
  }

  function formatarData(data?: string) {
    if (!data) return "Data não informada";

    const dataConvertida = new Date(data);

    return dataConvertida.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  if (carregando) {
    return (
      <View style={pacienteDetalheStyles.container}>
        <ActivityIndicator size="large" color="#053388" />
      </View>
    );
  }

  if (!paciente) {
    return (
      <View style={pacienteDetalheStyles.container}>
        <Text>Paciente não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={pacienteDetalheStyles.container}>
      <View style={pacienteDetalheStyles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#053388" />
        </TouchableOpacity>

        <Text style={pacienteDetalheStyles.headerTitle}>Prontuário</Text>
      </View>

      <View style={pacienteDetalheStyles.cardPaciente}>
        <Text style={pacienteDetalheStyles.nomePaciente}>{paciente.nome}</Text>

        <Text style={pacienteDetalheStyles.info}>CPF: {paciente.cpf}</Text>
        <Text style={pacienteDetalheStyles.info}>
          Nascimento: {paciente.dataNascimento}
        </Text>
        <Text style={pacienteDetalheStyles.info}>Sexo: {paciente.sexo}</Text>
        <Text style={pacienteDetalheStyles.info}>
          Telefone: {paciente.telefone}
        </Text>
        <Text style={pacienteDetalheStyles.info}>Email: {paciente.email}</Text>
        <Text style={pacienteDetalheStyles.info}>
          Endereço: {paciente.endereco}
        </Text>

        <TouchableOpacity
          style={pacienteDetalheStyles.editButton}
          onPress={() =>
            router.push({
              pathname: "/pacientes/novo",
              params: {
                usuarioId: String(usuarioId),
                pacienteId: String(id),
              },
            })
          }
        >
          <Text style={pacienteDetalheStyles.editButtonText}>
            Editar Paciente
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={pacienteDetalheStyles.deleteButton}
          onPress={excluirPaciente}
        >
          <Text style={pacienteDetalheStyles.deleteButtonText}>
            Excluir Paciente
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={pacienteDetalheStyles.sectionTitle}>
        Histórico de Consultas
      </Text>

      <FlatList
        data={consultas}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={pacienteDetalheStyles.lista}
        ListEmptyComponent={<Text>Nenhuma consulta cadastrada.</Text>}
        renderItem={({ item }) => (
          <View style={pacienteDetalheStyles.cardConsulta}>
            <Text style={pacienteDetalheStyles.dataConsulta}>
              {formatarData(item.dataConsulta)}
            </Text>

            <Text style={pacienteDetalheStyles.label}>Queixa Principal</Text>
            <Text style={pacienteDetalheStyles.texto}>
              {item.queixaPrincipal}
            </Text>

            <Text style={pacienteDetalheStyles.label}>Histórico da Doença</Text>
            <Text style={pacienteDetalheStyles.texto}>
              {item.historicoDoenca}
            </Text>

            <Text style={pacienteDetalheStyles.label}>Diagnóstico</Text>
            <Text style={pacienteDetalheStyles.texto}>
              {item.diagnostico}
            </Text>

            <Text style={pacienteDetalheStyles.label}>Conduta</Text>
            <Text style={pacienteDetalheStyles.texto}>{item.conduta}</Text>

            <Text style={pacienteDetalheStyles.label}>Observações</Text>
            <Text style={pacienteDetalheStyles.texto}>
              {item.observacoes}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={pacienteDetalheStyles.addButton}
        onPress={() =>
          router.push({
            pathname: "/consultas/novo",
            params: {
              pacienteId: String(id),
              usuarioId: String(usuarioId),
            },
          })
        }
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}