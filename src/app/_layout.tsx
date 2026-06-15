import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="pacientes/index"
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <Stack.Screen name="cadastro" options={{ headerShown: false }} />
      <Stack.Screen name="pacientes/novo" options={{ headerShown: false }} />
      <Stack.Screen name="pacientes/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="consultas/novo" options={{ headerShown: false }} />
      <Stack.Screen name="perfil" options={{ headerShown: false }} />
    </Stack>
  );
}
