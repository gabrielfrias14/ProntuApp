import { StyleSheet } from "react-native";

export const pacienteDetalheStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 14,
        paddingTop: 45,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 12,
    },

    cardPaciente: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 14,
        padding: 14,
        backgroundColor: "#fff",
        marginBottom: 22,
    },

    nomePaciente: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
    },

    info: {
        fontSize: 13,
        marginBottom: 4,
        color: "#333",
    },

    sectionTitle: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10,
    },

    lista: {
        gap: 10,
        paddingBottom: 90,
    },

    cardConsulta: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 14,
        padding: 14,
        backgroundColor: "#fff",
    },

    dataConsulta: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
    },

    label: {
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 6,
    },

    texto: {
        fontSize: 13,
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

    editButton: {
        backgroundColor: "#053388",
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 12,
    },

    editButtonText: {
        color: "#fff",
        fontWeight: "600",
    },

    deleteButton: {
        backgroundColor: "#E53935",
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 8,
    },

    deleteButtonText: {
        color: "#fff",
        fontWeight: "600",
    },
});