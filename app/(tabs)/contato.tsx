import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const GREEN = '#2E7D32';
const GREEN_LIGHT = '#E8F5E9';

function aplicarMascaraTelefone(valor: string) {
  const nums = valor.replace(/\D/g, '').slice(0, 11);
  if (nums.length <= 2) return `(${nums}`;
  if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
  return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
}

export default function ContatoScreen() {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  function onTelefoneChange(valor: string) {
    setTelefone(aplicarMascaraTelefone(valor));
  }

  return (
    <View style={styles.blocoPrincipal}>
      <StatusBar barStyle="light-content" backgroundColor={GREEN} />

      <View style={styles.header}>
        <MaterialIcons name="email" size={22} color="#fff" />
        <Text style={styles.headerTitle}>2. Contato</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body} keyboardShouldPersistTaps="handled">
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <MaterialIcons name="email" size={44} color={GREEN} />
          </View>
        </View>

        <Text style={styles.subtitle}>
          Como podemos entrar{'\n'}em contato com você?
        </Text>

        <Text style={styles.label}>E-mail</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <MaterialIcons name="email" size={20} color="#888" style={styles.iconRight} />
        </View>

        <Text style={styles.label}>Telefone</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="(00) 00000-0000"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={onTelefoneChange}
          />
          <MaterialIcons name="phone" size={20} color="#888" style={styles.iconRight} />
        </View>

        <Text style={styles.label}>Endereço</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu endereço"
            placeholderTextColor="#aaa"
            value={endereco}
            onChangeText={setEndereco}
          />
          <MaterialIcons name="location-on" size={20} color="#888" style={styles.iconRight} />
        </View>

        <View style={styles.botoesRow}>
          <TouchableOpacity style={styles.botaoVoltar} activeOpacity={0.85}>
            <MaterialIcons name="arrow-back" size={20} color={GREEN} />
            <Text style={styles.botaoVoltarTexto}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoProximo} activeOpacity={0.85}>
            <Text style={styles.botaoProximoTexto}>Próximo</Text>
            <MaterialIcons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  blocoPrincipal: {
    flex: 1,
    backgroundColor: GREEN,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: GREEN,
    paddingVertical: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  body: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: GREEN_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#444',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 28,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 6,
    marginTop: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: '#fafafa',
  },
  iconRight: {
    marginLeft: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  botoesRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 36,
  },
  botaoVoltar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    borderWidth: 2,
    borderColor: GREEN,
    borderRadius: 10,
    height: 52,
  },
  botaoVoltarTexto: {
    color: GREEN,
    fontSize: 16,
    fontWeight: '600',
  },
  botaoProximo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: GREEN,
    borderRadius: 10,
    height: 52,
  },
  botaoProximoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
