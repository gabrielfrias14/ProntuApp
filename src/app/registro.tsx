import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import { registerStyles } from '../styles/register.styles';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log({
      name,
      cpf,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <KeyboardAvoidingView
      style={registerStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={registerStyles.scrollContainer}>
        
        <Image
          source={require('../../assets/icone-prontuapp.png')}
          style={registerStyles.icone}
        />

        <View style={registerStyles.headerContainer}>
          <Text style={registerStyles.appTitle}>
            Criar Conta
          </Text>

          <Text style={registerStyles.appSubtitle}>
            Cadastro no Prontu App
          </Text>
        </View>

        <Text style={registerStyles.description}>
          Cadastre-se para acessar seus exames,
          vacinas e prontuários digitais.
        </Text>

        <View style={registerStyles.formContainer}>

          {/* Nome */}
          <View style={registerStyles.inputContainer}>
            <TextInput
              style={registerStyles.input}
              placeholder="Nome completo"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* CPF */}
          <View style={registerStyles.inputContainer}>
            <TextInput
              style={registerStyles.input}
              placeholder="CPF"
              placeholderTextColor="#999"
              value={cpf}
              onChangeText={setCpf}
              keyboardType="numeric"
            />
          </View>

          {/* Email */}
          <View style={registerStyles.inputContainer}>
            <TextInput
              style={registerStyles.input}
              placeholder="E-mail"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Senha */}
          <View style={registerStyles.inputContainer}>
            <TextInput
              style={registerStyles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Confirmar senha */}
          <View style={registerStyles.inputContainer}>
            <TextInput
              style={registerStyles.input}
              placeholder="Confirmar senha"
              placeholderTextColor="#999"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          {/* Botão */}
          <TouchableOpacity
            style={registerStyles.registerButton}
            onPress={handleRegister}
          >
            <Text style={registerStyles.registerButtonText}>
              Criar Conta
            </Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={registerStyles.footerContainer}>
            <Text style={registerStyles.footerText}>
              Já possui uma conta?
            </Text>

            <TouchableOpacity>
              <Text style={registerStyles.loginText}>
                Entrar
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}