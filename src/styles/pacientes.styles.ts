import { StyleSheet } from "react-native";

export const pacientesStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 45,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 12,
    flex: 1,
  },

  searchContainer: {
    height: 32,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 14,
    backgroundColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 28,
  },

  searchInput: {
    flex: 1,
    marginLeft: 6,
    paddingVertical: 0,
  },

  list: {
    gap: 8,
    paddingBottom: 80,
  },

  card: {
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  avatarText: {
    color: "#053388",
    fontWeight: "bold",
  },

  info: {
    flex: 1,
  },

  nome: {
    fontSize: 15,
    fontWeight: "bold",
  },

  dados: {
    fontSize: 9,
    color: "#333",
  },

  addButton: {
    position: "absolute",
    right: 22,
    bottom: 24,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#053388",
    alignItems: "center",
    justifyContent: "center",
  },
});