import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
 
export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Estudiante</Text>
      
      <Text style={styles.info}>Nombre: Jorge Andrés Pérez Santos</Text>
      <Text style={styles.info}>Carnet: 20240057</Text>
      <Text style={styles.info}>Sección/grupo: 1B</Text>
 
      <View style={styles.buttonContainer}>
        <Button
          title="Ver API de Personajes"
          onPress={() => navigation.navigate('ApiScreen')}
        />
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 20,
  },
});