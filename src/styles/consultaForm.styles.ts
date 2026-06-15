import { StyleSheet } from "react-native";

export const consultaFormStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 14,
    paddingTop: 55,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 13,
    color: "#333",
    marginBottom: 22,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    backgroundColor: "#fff",
  },

  textArea: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    backgroundColor: "#fff",
    minHeight: 75,
    textAlignVertical: "top",
  },
});