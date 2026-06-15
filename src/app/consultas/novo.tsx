import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import AppButton from "../../components/AppButton";
import { api } from "../../services/api";
import { consultaFormStyles } from "../../styles/consultaForm.styles";

export default function NovaConsultaScreen() {
  const router = useRouter();
  const { pacienteId, usuarioId } = useLocalSearchParams();

  const [dataConsulta, setDataConsulta] = useState("");
  const [queixaPrincipal, setQueixaPrincipal] = useState("");
  const [historicoDoenca, setHistoricoDoenca] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [conduta, setConduta] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [salvando, setSalvando] = useState(false);

  async function salvarConsulta() {
    if (!dataConsulta || !queixaPrincipal) {
      Alert.alert("Atenção", "Preencha a data e a queixa principal.");
      return;
    }

    const consulta = {
      paciente: {
        id: Number(pacienteId),
      },
      usuario: {
        id: Number(usuarioId),
      },
      dataConsulta,
      queixaPrincipal,
      historicoDoenca,
      diagnostico,
      conduta,
      observacoes,
    };

    try {
      setSalvando(true);

      await api.post("/consultas", consulta);

      Alert.alert("Sucesso", "Consulta cadastrada com sucesso!");
      router.back();
    } catch (error) {
      console.log("Erro ao salvar consulta:", error);
      Alert.alert("Erro", "Não foi possível cadastrar a consulta.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={consultaFormStyles.container}>
      <Text style={consultaFormStyles.title}>Cadastro de Consulta</Text>

      <Text style={consultaFormStyles.subtitle}>
        Paciente ID: {pacienteId}
      </Text>

      <Text style={consultaFormStyles.label}>Data da Consulta</Text>
      <TextInput
        style={consultaFormStyles.input}
        value={dataConsulta}
        onChangeText={setDataConsulta}
        placeholder="AAAA-MM-DDTHH:MM:SS"
      />

      <Text style={consultaFormStyles.label}>Queixa Principal</Text>
      <TextInput
        style={consultaFormStyles.textArea}
        value={queixaPrincipal}
        onChangeText={setQueixaPrincipal}
        placeholder="Ex: Dor de cabeça há 3 dias"
        multiline
      />

      <Text style={consultaFormStyles.label}>Histórico da Doença</Text>
      <TextInput
        style={consultaFormStyles.textArea}
        value={historicoDoenca}
        onChangeText={setHistoricoDoenca}
        placeholder="Descreva o histórico da doença"
        multiline
      />

      <Text style={consultaFormStyles.label}>Diagnóstico</Text>
      <TextInput
        style={consultaFormStyles.textArea}
        value={diagnostico}
        onChangeText={setDiagnostico}
        placeholder="Informe o diagnóstico"
        multiline
      />

      <Text style={consultaFormStyles.label}>Conduta</Text>
      <TextInput
        style={consultaFormStyles.textArea}
        value={conduta}
        onChangeText={setConduta}
        placeholder="Informe a conduta médica"
        multiline
      />

      <Text style={consultaFormStyles.label}>Observações</Text>
      <TextInput
        style={consultaFormStyles.textArea}
        value={observacoes}
        onChangeText={setObservacoes}
        placeholder="Observações adicionais"
        multiline
      />

      <AppButton
        title="Salvar Consulta"
        onPress={salvarConsulta}
        loading={salvando}
      />
    </ScrollView>
  );
}