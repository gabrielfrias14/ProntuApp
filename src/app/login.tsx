import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
} from 'react-native';
import { loginStyles } from "../styles/login.styles"

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
  };

  return (
    <KeyboardAvoidingView
      style={loginStyles.container}
    >
      <ScrollView contentContainerStyle={loginStyles.scrollContainer}>
        <View>
            <Image source={require('../../assets/icone-prontuapp.png')} style={loginStyles.icone} />
        </View>

        {/* Logo ou título principal */}
        <View style={loginStyles.headerContainer}>
          <Text style={loginStyles.appTitle}>Prontu App</Text>
          <Text style={loginStyles.appSubtitle}>
            Sistema de Prontuário Digital
          </Text>
        </View>

        {/* Descrição */}
        <Text style={loginStyles.description}>
          Gerencie usuários, vacinas e exames{'\n'}
          de forma simples e segura.
        </Text>

        {/* Formulário de login */}
        <View style={loginStyles.formContainer}>
          {/* Campo Email */}
          <View style={loginStyles.inputContainer}>
            <TextInput
              style={loginStyles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Campo Senha */}
          <View style={loginStyles.inputContainer}>
            <TextInput
              style={loginStyles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Opções extras */}
          <View style={loginStyles.optionsContainer}>
            <View style={loginStyles.rememberContainer}>
              <Switch
                value={rememberMe}
                onValueChange={setRememberMe}
                trackColor={{ false: '#ddd', true: '#053388' }}
                thumbColor={rememberMe ? '#fff' : '#f4f3f4'}
              />
              <Text style={loginStyles.rememberText}>Lembrar-me</Text>
            </View>

            <TouchableOpacity>
              <Text style={loginStyles.forgotText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>

          {/* Botão Entrar */}
          <TouchableOpacity style={loginStyles.loginButton} onPress={handleLogin}>
            <Text style={loginStyles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          {/* Mensagem final */}
          <Text style={loginStyles.footerText}>
            Não tem uma conta? Crie uma clicando aqui.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}