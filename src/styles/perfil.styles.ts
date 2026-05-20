import { StyleSheet } from "react-native";

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FC",
  },

  header: {
    backgroundColor: "#0D3B95",
    alignItems: "center",
    paddingTop: 65,
    paddingBottom: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  avatar: {
    width: 115,
    height: 115,
    borderRadius: 60,
    backgroundColor: "#FFF",
    marginBottom: 15,
    borderWidth: 4,
    borderColor: "#FFF",
  },

  nome: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  email: {
    color: "#DCE6FF",
    fontSize: 15,
    marginTop: 5,
  },

  cardsContainer: {
    padding: 20,
    gap: 18,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },

  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: "#EDF3FF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 16,
  },

  cardTitle: {
    fontSize: 14,
    color: "#7A7A7A",
    marginBottom: 4,
  },

  cardValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E1E1E",
  },

  buttonsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 15,
  },

  primaryButton: {
    backgroundColor: "#0D3B95",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  logoutButton: {
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  logoutButtonText: {
    color: "#D62828",
    fontSize: 16,
    fontWeight: "bold",
  },
});