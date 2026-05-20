import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FC",
  },

  header: {
    backgroundColor: "#0D3B95",
    paddingTop: 70,
    paddingHorizontal: 24,
    paddingBottom: 35,

    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  hello: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#DCE6FF",
    marginTop: 6,
    fontSize: 15,
  },

  notificationButton: {
    width: 50,
    height: 50,
    borderRadius: 18,

    backgroundColor: "rgba(255,255,255,0.15)",

    justifyContent: "center",
    alignItems: "center",
  },

  statusCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginTop: -25,

    borderRadius: 24,
    padding: 18,

    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },

  statusIcon: {
    width: 60,
    height: 60,
    borderRadius: 20,

    backgroundColor: "#EDF3FF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 15,
  },

  statusTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#111827",
  },

  statusText: {
    color: "#6B7280",
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",

    marginTop: 28,
    marginBottom: 18,

    marginHorizontal: 20,
  },

  resumeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 20,
  },

  resumeCard: {
    backgroundColor: "#FFF",

    width: "31%",
    height: 140,

    borderRadius: 24,

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },

  resumeNumber: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",

    marginTop: 12,
  },

  resumeLabel: {
    color: "#6B7280",
    marginTop: 6,
  },

  quickContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 20,
  },

  quickCard: {
    width: "31%",
    backgroundColor: "#FFF",

    borderRadius: 22,
    paddingVertical: 22,

    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },

  quickIcon: {
    width: 55,
    height: 55,
    borderRadius: 18,

    backgroundColor: "#EDF3FF",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 10,
  },

  quickText: {
    fontWeight: "600",
    color: "#111827",
  },

  consultationCard: {
    backgroundColor: "#FFF",

    marginHorizontal: 20,
    marginBottom: 40,

    borderRadius: 24,
    padding: 22,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },

  consultationTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  doctor: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },

  date: {
    color: "#6B7280",
    fontSize: 13,
  },

  specialty: {
    marginTop: 8,
    color: "#0D3B95",
    fontWeight: "600",
  },

  observation: {
    marginTop: 14,
    color: "#6B7280",
    lineHeight: 22,
  },
});