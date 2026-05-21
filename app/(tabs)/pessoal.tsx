import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import {
  Modal,
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

export default function PessoalScreen() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [dataNascimento, setDataNascimento] = useState<Date | null>(null);
  const [tempDate, setTempDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState(false);

  function abrirPicker() {
    setTempDate(dataNascimento ?? new Date());
    setShowPicker(true);
  }

  function onDateChange(_: DateTimePickerEvent, selected?: Date) {
    if (selected) setTempDate(selected);
  }

  function confirmar() {
    setDataNascimento(tempDate);
    setShowPicker(false);
  }

  function cancelar() {
    setShowPicker(false);
  }

  const dataFormatada = dataNascimento
    ? dataNascimento.toLocaleDateString('pt-BR')
    : '';

  return (
    <View style={styles.blocoPrincipal}>
      <StatusBar barStyle="light-content" backgroundColor={GREEN} />

      <View style={styles.header}>
        <MaterialIcons name="person" size={22} color="#fff" />
        <Text style={styles.headerTitle}>Dados Pessoais</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <MaterialIcons name="person-outline" size={44} color={GREEN} />
          </View>
        </View>

        <Text style={styles.subtitle}>
          Informe seus dados pessoais{'\n'}para começar o cadastro.
        </Text>

        <Text style={styles.label}>Nome</Text>
        <View style={styles.inputRow}>
          <MaterialIcons name="person" size={20} color="#888" style={styles.iconLeft} />
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#aaa"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <Text style={styles.label}>Idade</Text>
        <View style={styles.inputRow}>
          <MaterialIcons name="calendar-today" size={20} color="#888" style={styles.iconLeft} />
          <TextInput
            style={styles.input}
            placeholder="Digite sua idade"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={idade}
            onChangeText={setIdade}
          />
        </View>

        <Text style={styles.label}>Data de Nascimento</Text>
        <TouchableOpacity style={styles.inputRow} onPress={abrirPicker}>
          <Text style={[styles.input, { color: dataNascimento ? '#333' : '#aaa' }]}>
            {dataFormatada || 'dd/mm/aaaa'}
          </Text>
          <MaterialIcons name="calendar-today" size={20} color="#888" style={styles.iconRight} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Próximo</Text>
          <MaterialIcons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={showPicker} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={cancelar}>
          <View style={styles.modalCard} onStartShouldSetResponder={() => true}>
            <DateTimePicker
              mode="date"
              display={Platform.OS === 'ios' ? 'inline' : 'calendar'}
              value={tempDate}
              maximumDate={new Date()}
              locale="pt-BR"
              onChange={onDateChange}
              style={styles.picker}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity onPress={cancelar} style={styles.modalBtn}>
                <Text style={styles.modalBtnCancelar}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={confirmar} style={styles.modalBtn}>
                <Text style={styles.modalBtnConfirmar}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
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
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: GREEN,
    borderRadius: 10,
    height: 52,
    marginTop: 36,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    width: '90%',
  },
  picker: {
    width: '100%',
  },
  modalActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  modalBtn: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },
  modalBtnCancelar: {
    fontSize: 15,
    color: '#888',
  },
  modalBtnConfirmar: {
    fontSize: 15,
    fontWeight: '600',
    color: GREEN,
  },
});
