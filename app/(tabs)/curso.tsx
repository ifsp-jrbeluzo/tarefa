import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const GREEN = '#2E7D32';
const GREEN_LIGHT = '#E8F5E9';

const CURSOS = [
  'Técnico em Informática',
  'Técnico em Eletrônica',
  'Técnico em Mecânica',
  'Técnico em Administração',
  'Técnico em Meio Ambiente',
];

export default function CursoScreen() {
  const [curso, setCurso] = useState('');

  return (
    <View style={styles.blocoPrincipal}>
      <StatusBar barStyle="light-content" backgroundColor={GREEN} />

      <View style={styles.header}>
        <MaterialIcons name="school" size={22} color="#fff" />
        <Text style={styles.headerTitle}>4. Curso</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body} keyboardShouldPersistTaps="handled">
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <MaterialIcons name="school" size={44} color={GREEN} />
          </View>
        </View>

        <Text style={styles.subtitle}>
          Selecione o curso que{'\n'}você deseja estudar.
        </Text>

        <Text style={styles.label}>Curso</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={curso}
            onValueChange={setCurso}
            style={styles.picker}
            dropdownIconColor="#888"
          >
            <Picker.Item label="Selecione um curso" value="" color="#aaa" />
            {CURSOS.map((c) => (
              <Picker.Item key={c} label={c} value={c} color="#333" />
            ))}
          </Picker>
        </View>

        <View style={styles.listaWrapper}>
          {CURSOS.map((c) => (
            <TouchableOpacity
              key={c}
              style={[styles.listaItem, curso === c && styles.listaItemAtivo]}
              onPress={() => setCurso(c)}
              activeOpacity={0.7}
            >
              <Text style={[styles.listaItemTexto, curso === c && styles.listaItemTextoAtivo]}>
                {c}
              </Text>
              {curso === c && (
                <MaterialIcons name="check" size={18} color={GREEN} />
              )}
            </TouchableOpacity>
          ))}
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
    marginTop: 4,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fafafa',
    overflow: 'hidden',
    justifyContent: 'center',
    height: Platform.OS === 'ios' ? 48 : 48,
  },
  picker: {
    color: '#333',
    height: 48,
    marginTop: Platform.OS === 'ios' ? -8 : 0,
  },
  listaWrapper: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  listaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  listaItemAtivo: {
    backgroundColor: GREEN_LIGHT,
  },
  listaItemTexto: {
    fontSize: 14,
    color: '#333',
  },
  listaItemTextoAtivo: {
    color: GREEN,
    fontWeight: '600',
  },
  botoesRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 28,
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
