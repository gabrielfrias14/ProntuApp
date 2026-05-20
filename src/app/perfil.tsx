import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import { profileStyles } from "../styles/perfil.styles";

export default function Perfil() {
  return (
    <ScrollView style={profileStyles.container}>
      {/* HEADER */}
      <View style={profileStyles.header}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          style={profileStyles.avatar}
        />

        <Text style={profileStyles.nome}>Nome do Usuário</Text>

        <Text style={profileStyles.email}>
          usuario@email.com
        </Text>
      </View>

      {/* CARDS */}
      <View style={profileStyles.cardsContainer}>
        <View style={profileStyles.card}>
          <View style={profileStyles.iconBox}>
            <Ionicons name="card-outline" size={26} color="#0D3B95" />
          </View>

          <View>
            <Text style={profileStyles.cardTitle}>CPF</Text>
            <Text style={profileStyles.cardValue}>
              000.000.000-00
            </Text>
          </View>
        </View>

        <View style={profileStyles.card}>
          <View style={profileStyles.iconBox}>
            <MaterialCommunityIcons
              name="needle"
              size={26}
              color="#0D3B95"
            />
          </View>

          <View>
            <Text style={profileStyles.cardTitle}>
              Vacinas Registradas
            </Text>

            <Text style={profileStyles.cardValue}>
              8 vacinas
            </Text>
          </View>
        </View>

        <View style={profileStyles.card}>
          <View style={profileStyles.iconBox}>
            <FontAwesome5
              name="stethoscope"
              size={22}
              color="#0D3B95"
            />
          </View>

          <View>
            <Text style={profileStyles.cardTitle}>
              Consultas
            </Text>

            <Text style={profileStyles.cardValue}>
              12 consultas
            </Text>
          </View>
        </View>

        <View style={profileStyles.card}>
          <View style={profileStyles.iconBox}>
            <Ionicons
              name="document-text-outline"
              size={26}
              color="#0D3B95"
            />
          </View>

          <View>
            <Text style={profileStyles.cardTitle}>
              Exames
            </Text>

            <Text style={profileStyles.cardValue}>
              5 exames
            </Text>
          </View>
        </View>
      </View>

      {/* BOTÕES */}
      <View style={profileStyles.buttonsContainer}>
        <TouchableOpacity style={profileStyles.primaryButton}>
          <Text style={profileStyles.primaryButtonText}>
            Editar Perfil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={profileStyles.logoutButton}>
          <Text style={profileStyles.logoutButtonText}>
            Sair da Conta
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}