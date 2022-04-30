import React from 'react';
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/foto_perfil.jpeg'
import Card from './components/Card'

const App = () => {

  function handleRedeSocial(redeSocial){
    switch(redeSocial){
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/lucas-cester-863095217/')
      break

      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/LucasCester')
      break

      case 'facebook':
        Alert.alert('Meu Facebook','https://www.facebook.com/LucasCester')
      break
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.containerCabecalho}>
          <Image source={foto} style = {style.foto}/>
          <Text style={style.nome}>Lucas Cester</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redesSociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name='github' size={30} style={style.preto}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name='facebook' size={30} style={style.preto}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name='linkedin' size={30} style={style.preto}/>
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Formação Academica">
          <Text style={style.cardContentText}>Cotuca</Text>
          <Text style={style.cardContentText}>Anhanguera</Text>
        </Card>
        <Card titulo="Experiencia Profissional">
          <Text style={style.cardContentText}>Ibrace IPDA</Text>
        </Card>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1
  },
  containerCabecalho: {
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: 70
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 30
  },
  preto: {
    color: '#000'
  },
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  
  cardContentText: {
    color: '#939393',
    marginBottom: 10
  }
})

export default App;