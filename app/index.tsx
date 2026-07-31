import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Home() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const go = () => {
    router.push('/(tabs)')
  }

  return (
      <View style={s.body}>
        <View style={s.wrap}>
            <Text style={s.t}>LOGIN</Text>
            <Text style={s.t}>Email</Text>
            <TextInput style={s.input} onChangeText={setEmail} value={email} placeholder='Insira seu email'/>
            <Text style={s.t}>Senha</Text>
            <TextInput style={s.input} onChangeText={setPass} value={pass} placeholder='Insira sua senha'/>
            
            <View>
              <TouchableOpacity style={s.button} onPress={go}>
                  <Text style={s.btnText}>ENTRAR</Text>
              </TouchableOpacity>
            </View>

        </View>
      </View>
  );
}

const s = StyleSheet.create({
 body:{
    backgroundColor: '#1f3d99',
    flex: 1
 },
 wrap:{
    
 },
 t:{

 },
 input:{

 },
 button:{

 },
 btnText:{

 }
});