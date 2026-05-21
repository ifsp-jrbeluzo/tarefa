import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const GREEN = '#2E7D32';
const GREEN_LIGHT = '#E8F5E9';

const CANAIS = ['E-mail', 'SMS', 'WhatsApp', 'Telefone'];

function Checkbox({ label, checked, onToggle }: { label: string; checked: boolean; onToggle: () => void }) {
  return (
    <TouchableOpacity style={styles.checkboxRow} onPress={onToggle} activeOpacity={0.7}>
      <MaterialIcons
        name={checked ? 'check-box' : 'check-box-outline-blank'}
        size={24}
        color={checked ? GREEN : '#aaa'}
      />
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function PreferenciasScreen() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [canaisSelecionados, setCanaisSelecionados] = useState<string[]>(['E-mail', 'SMS']);
  const [observacoes, setObservacoes] = useState('');

  function toggleCanal(canal: string) {
    setCanaisSelecionados(prev =>
      prev.includes(canal) ? prev.filter(c => c !== canal) : [...prev, canal]
    );
  }

  return (
    <View style={styles.blocoPrincipal}>
      <StatusBar barStyle="light-content" backgroundColor={GREEN} />

      <View style={styles.header}>
        <MaterialIcons name="notifications" size={22} color="#fff" />
        <Text style={styles.headerTitle}>5. Preferências</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body} keyboardShouldPersistTaps="handled">
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <MaterialIcons name="notifications" size={44} color={GREEN} />
          </View>
        </View>

        <Text style={styles.subtitle}>Personalize suas preferências.</Text>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Receber notificações</Text>
          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
            trackColor={{ false: '#ccc', true: GREEN }}
            thumbColor="#fff"
          />
        </View>

        <Text style={styles.label}>Como prefere ser contatado?</Text>
        <View style={styles.checkboxGroup}>
          {CANAIS.map(canal => (
            <Checkbox
              key={canal}
              label={canal}
              checked={canaisSelecionados.includes(canal)}
              onToggle={() => toggleCanal(canal)}
            />
          ))}
        </View>

        <Text style={styles.label}>Observações (opcional)</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Digite algo..."
          placeholderTextColor="#aaa"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          value={observacoes}
          onChangeText={setObservacoes}
        />

        <TouchableOpacity style={styles.botaoFinalizar} activeOpacity={0.85}>
          <Text style={styles.botaoFinalizarTexto}>Finalizar Cadastro</Text>
          <MaterialIcons name="check" size={20} color="#fff" />
        </TouchableOpacity>
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
    marginBottom: 24,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#fafafa',
  },
  switchLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
    marginTop: 20,
  },
  checkboxGroup: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fafafa',
    paddingHorizontal: 12,
    paddingTop: 12,
    fontSize: 14,
    color: '#333',
    minHeight: 100,
  },
  botaoFinalizar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: GREEN,
    borderRadius: 10,
    height: 52,
    marginTop: 32,
  },
  botaoFinalizarTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
