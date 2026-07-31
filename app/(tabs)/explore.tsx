import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type Curso = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: ImageSourcePropType | undefined;
}

const cursos: Curso[]= [
  {
    id: '1',
    titulo: 'Automação Industrial',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis, consectetur voluptates voluptatem beatae vero odit nisi tempore doloremque laudantium doloribus aperiam repellat quas omnis corrupti quam quia aliquam magni!',
    imagem: require('../../assets/01.jpg')
  },
  {
    id: '2',
    titulo: 'Eletroeletronica',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, minus laudantium alias deleniti et animi qui expedita, debitis quia illum blanditiis! Nam quo dicta porro adipisci est eum fugit assumenda!',
    imagem: require('../../assets/02.jpg')
  },
  {
    id: '3',
    titulo: 'Desenvolvimento de Sistema',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, minus laudantium alias deleniti et animi qui expedita, debitis quia illum blanditiis! Nam quo dicta porro adipisci est eum fugit assumenda!',
    imagem: require('../../assets/03.jpg')
  },
  {
    id: '4',
    titulo: 'Mecatrônica Industrial',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, minus laudantium alias deleniti et animi qui expedita, debitis quia illum blanditiis! Nam quo dicta porro adipisci est eum fugit assumenda!',
    imagem: require('../../assets/04.jpg')
  },
  {
    id: '5',
    titulo: 'Logística',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, minus laudantium alias deleniti et animi qui expedita, debitis quia illum blanditiis! Nam quo dicta porro adipisci est eum fugit assumenda!',
    imagem: require('../../assets/05.jpg')
  },
]



export default function TabTwoScreen() {
  return (
      <View>
        <Text>explore</Text>
      </View>
  );
}

const s = StyleSheet.create({
 
});
