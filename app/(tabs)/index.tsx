import { router } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
       <ScrollView contentContainerStyle={s.container}>
          <Image source={require('../../assets/bg.jpg')} style={s.image} resizeMode='cover'/>
       
        <View style={s.content}>
          <Text  style={s.title}>SENAI Curitiba</Text>

          <Text style={s.paragraph}>Lorem ipsum dolor,
             sit amet consectetur adipisicing elit.
              Aperiam voluptatem sint molestias delectus,
               est aliquid veritatis. Impedit, earum ut ad
                sapiente magni aliquam placeat reprehenderit
                 voluptas minima, quidem aut minus.</Text>
          <TouchableOpacity  style={s.button} onPress={() => router.push('/explore')}>
              <Text  style={s.buttonText}>Lista de cursos</Text>
          </TouchableOpacity>
        </View>
       </ScrollView>
  );
}

const s = StyleSheet.create({
  container:{
      flex: 1
  },
  image:{
    width: '100%',
    height: 220
  },
  content:{
    padding: 30
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c4b88',
    marginBottom: 12
  },
  paragraph:{
    fontSize: 16,
    lineHeight: 22,
    color: '#090909',
    marginBottom: 30
  },
  button:{
    backgroundColor: '#004a94',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-end'
  },
  buttonText:{
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
