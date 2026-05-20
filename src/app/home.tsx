import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import { homeStyles } from "../styles/home.styles";

export default function Home() {
  return (
    <ScrollView style={homeStyles.container}>
      {/* HEADER */}
      <View style={homeStyles.header}>
        <View>
          <Text style={homeStyles.hello}>
            Olá, Usuario
          </Text>

          <Text style={homeStyles.subtitle}>
            Seu prontuário está atualizado
          </Text>
        </View>

        <TouchableOpacity style={homeStyles.notificationButton}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#FFF"
          />
        </TouchableOpacity>
      </View>

      {/* STATUS CARD */}
      <View style={homeStyles.statusCard}>
        <View style={homeStyles.statusIcon}>
          <MaterialCommunityIcons
            name="shield-check"
            size={32}
            color="#0D3B95"
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={homeStyles.statusTitle}>
            Dados protegidos
          </Text>

          <Text style={homeStyles.statusText}>
            Suas informações médicas estão seguras.
          </Text>
        </View>
      </View>

      {/* RESUMO */}
      <Text style={homeStyles.sectionTitle}>
        Resumo
      </Text>

      <View style={homeStyles.resumeContainer}>
        <View style={homeStyles.resumeCard}>
          <Ionicons
            name="medkit"
            size={28}
            color="#0D3B95"
          />

          <Text style={homeStyles.resumeNumber}>
            8
          </Text>

          <Text style={homeStyles.resumeLabel}>
            Vacinas
          </Text>
        </View>

        <View style={homeStyles.resumeCard}>
          <Ionicons
            name="calendar"
            size={28}
            color="#0D3B95"
          />

          <Text style={homeStyles.resumeNumber}>
            12
          </Text>

          <Text style={homeStyles.resumeLabel}>
            Consultas
          </Text>
        </View>

        <View style={homeStyles.resumeCard}>
          <FontAwesome5
            name="file-medical"
            size={24}
            color="#0D3B95"
          />

          <Text style={homeStyles.resumeNumber}>
            5
          </Text>

          <Text style={homeStyles.resumeLabel}>
            Exames
          </Text>
        </View>
      </View>

      {/* ACESSO RÁPIDO */}
      <Text style={homeStyles.sectionTitle}>
        Acesso rápido
      </Text>

      <View style={homeStyles.quickContainer}>
        <TouchableOpacity style={homeStyles.quickCard}>
          <View style={homeStyles.quickIcon}>
            <Ionicons
              name="medkit-outline"
              size={28}
              color="#0D3B95"
            />
          </View>

          <Text style={homeStyles.quickText}>
            Vacinas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.quickCard}>
          <View style={homeStyles.quickIcon}>
            <Ionicons
              name="calendar-outline"
              size={28}
              color="#0D3B95"
            />
          </View>

          <Text style={homeStyles.quickText}>
            Consultas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.quickCard}>
          <View style={homeStyles.quickIcon}>
            <Ionicons
              name="document-text-outline"
              size={28}
              color="#0D3B95"
            />
          </View>

          <Text style={homeStyles.quickText}>
            Exames
          </Text>
        </TouchableOpacity>
      </View>

      {/* ÚLTIMA CONSULTA */}
      <Text style={homeStyles.sectionTitle}>
        Última consulta
      </Text>

      <View style={homeStyles.consultationCard}>
        <View style={homeStyles.consultationTop}>
          <Text style={homeStyles.doctor}>
            Dr. taltaltal
          </Text>

          <Text style={homeStyles.date}>
            15/05/2026
          </Text>
        </View>

        <Text style={homeStyles.specialty}>
          Cardiologista
        </Text>

        <Text style={homeStyles.observation}>
          Consulta de rotina realizada com sucesso.
        </Text>
      </View>
    </ScrollView>
  );
}