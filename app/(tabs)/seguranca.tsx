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

export default function SegurancaScreen() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  return (
    <View style={styles.blocoPrincipal}>
      <StatusBar barStyle="light-content" backgroundColor={GREEN} />

      <View style={styles.header}>
        <MaterialIcons name="lock" size={22} color="#fff" />
        <Text style={styles.headerTitle}>3. Segurança</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body} keyboardShouldPersistTaps="handled">
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <MaterialIcons name="lock" size={44} color={GREEN} />
          </View>
        </View>

        <Text style={styles.subtitle}>
          Crie uma senha segura{'\n'}para sua conta.
        </Text>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#aaa"
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(v => !v)}>
            <MaterialIcons
              name={mostrarSenha ? 'visibility-off' : 'visibility'}
              size={20}
              color="#888"
              style={styles.iconRight}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirmar Senha</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            placeholderTextColor="#aaa"
            secureTextEntry={!mostrarConfirmar}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
          <TouchableOpacity onPress={() => setMostrarConfirmar(v => !v)}>
            <MaterialIcons
              name={mostrarConfirmar ? 'visibility-off' : 'visibility'}
              size={20}
              color="#888"
              style={styles.iconRight}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.dica}>
          <Text style={styles.dicaTitulo}>Dica de segurança:</Text>
          <Text style={styles.dicaTexto}>
            Use pelo menos 6 caracteres{'\n'}com letras e números.
          </Text>
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
  dica: {
    marginTop: 20,
    backgroundColor: GREEN_LIGHT,
    borderRadius: 8,
    padding: 14,
  },
  dicaTitulo: {
    fontSize: 13,
    fontWeight: '700',
    color: GREEN,
    marginBottom: 4,
  },
  dicaTexto: {
    fontSize: 13,
    color: '#444',
    lineHeight: 18,
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
