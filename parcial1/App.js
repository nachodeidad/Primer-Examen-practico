import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default function MyForm() {
  const [ID, setIDText] = useState("");
  const [nombre, setNombreText] = useState("");
  const [email, setEmailText] = useState("");
  const [telefono, setTelefonoText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handlePress = () => {
    setDisplayText(`ID: ${ID}, Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`);
    setIDText('');
    setNombreText('');
    setEmailText('');
    setTelefonoText('');
  };
  
  return (
    <View style={styles.container}>
      <Text style>LIGA OFICIAL DE LA NFL</Text>
      <Text>INGRESE SUS DATOS:</Text>

      <TextInput
        style={styles.input}
        placeholder="ID"
        value={ID}
        onChangeText={setIDText}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombreText}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmailText}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefonoText}
      />
      
      <Button title="Registrarme" onPress={handlePress} />
      <Text>{displayText}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 1,
    height: 30
  }
 
});