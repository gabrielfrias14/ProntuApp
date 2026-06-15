import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import AppButton from "../../components/AppButton";
import { api } from "../../services/api";
import { pacienteFormStyles } from "../../styles/pacienteForm.styles";

export default function NovoPacienteScreen() {
  const router = useRouter();
  const { usuarioId, pacienteId } = useLocalSearchParams();

  const editando = !!pacienteId;

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [salvando, setSalvando] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (editando) {
        carregarPaciente();
      }
    }, [])
  );

  async function carregarPaciente() {
    try {
      const response = await api.get(`/pacientes/${pacienteId}`);

      setNome(response.data.nome || "");
      setCpf(response.data.cpf || "");
      setDataNascimento(response.data.dataNascimento || "");
      setSexo(response.data.sexo || "");
      setTelefone(response.data.telefone || "");
      setEmail(response.data.email || "");
      setEndereco(response.data.endereco || "");
      setObservacoes(response.data.observacoes || "");
    } catch (error) {
      console.log("Erro ao carregar paciente:", error);
      Alert.alert("Erro", "Não foi possível carregar o paciente.");
    }
  }

  async function salvarPaciente() {
    if (!nome) {
      Alert.alert("Atenção", "O nome do paciente é obrigatório.");
      return;
    }

    const paciente = {
      nome,
      cpf,
      dataNascimento,
      sexo,
      telefone,
      email,
      endereco,
      observacoes,
      ativo: true,
      usuario: {
        id: Number(usuarioId),
      },
    };

    try {
      setSalvando(true);

      if (editando) {
        await api.put(`/pacientes/${pacienteId}`, paciente);
        Alert.alert("Sucesso", "Paciente atualizado com sucesso!");
      } else {
        await api.post("/pacientes", paciente);
        Alert.alert("Sucesso", "Paciente cadastrado com sucesso!");
      }

      router.back();
    } catch (error) {
      console.log("Erro ao salvar paciente:", error);
      Alert.alert(
        "Erro",
        editando
          ? "Não foi possível atualizar o paciente."
          : "Não foi possível cadastrar o paciente."
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={pacienteFormStyles.container}>
      <Text style={pacienteFormStyles.title}>
        {editando ? "Editar Paciente" : "Cadastro de Paciente"}
      </Text>

      <Text style={pacienteFormStyles.label}>Nome</Text>
      <TextInput
        style={pacienteFormStyles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome completo"
      />

      <Text style={pacienteFormStyles.label}>CPF</Text>
      <TextInput
        style={pacienteFormStyles.input}
        value={cpf}
        onChangeText={setCpf}
        placeholder="Somente números"
        keyboardType="numeric"
        maxLength={11}
      />

      <Text style={pacienteFormStyles.label}>Data de Nascimento</Text>
      <TextInput
        style={pacienteFormStyles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
        placeholder="AAAA-MM-DD"
      />

      <Text style={pacienteFormStyles.label}>Sexo</Text>
      <TextInput
        style={pacienteFormStyles.input}
        value={sexo}
        onChangeText={setSexo}
        placeholder="Masculino, Feminino ou Outro"
      />

      <Text style={pacienteFormStyles.label}>Telefone</Text>
      <TextInput
        style={pacienteFormStyles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="(00) 00000-0000"
        keyboardType="phone-pad"
      />

      <Text style={pacienteFormStyles.label}>Email</Text>
      <TextInput
        style={pacienteFormStyles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="email@exemplo.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={pacienteFormStyles.label}>Endereço</Text>
      <TextInput
        style={pacienteFormStyles.textArea}
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Digite o endereço"
        multiline
      />

      <Text style={pacienteFormStyles.label}>Observações</Text>
      <TextInput
        style={pacienteFormStyles.textArea}
        value={observacoes}
        onChangeText={setObservacoes}
        placeholder="Observações sobre o paciente"
        multiline
      />

      <AppButton
        title={editando ? "Atualizar Paciente" : "Salvar Paciente"}
        onPress={salvarPaciente}
        loading={salvando}
      />
    </ScrollView>
  );
}