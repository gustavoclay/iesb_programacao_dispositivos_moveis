import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function FormPessoas({ navigation, route }) {

  const acao = route.params.acao
  const pessoaAntiga = route.params.pessoaAntiga

  function salvar(pessoa) {

    if(pessoaAntiga) {
      acao(pessoa, pessoaAntiga)
    } else {
      acao(pessoa)
    }
    
    navigation.goBack()
  }


  return (
    <View>

      <Formik
        initialValues={{
          nome: pessoaAntiga ? pessoaAntiga.nome : '',
          cpf: pessoaAntiga ? pessoaAntiga.cpf : '',
          idade: pessoaAntiga ? pessoaAntiga.idade : '',
          email: pessoaAntiga ? pessoaAntiga.email : '',
        }}
        onSubmit={values => salvar(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>


            <TextInput
              style={styles.input}
              mode='outlined'
              label='Nome'
              value={values.nome}
              onChangeText={handleChange('nome')}
              onBlur={handleBlur('nome')}
            />

            <TextInput
              style={styles.input}
              mode='outlined'
              label='CPF'
              value={values.cpf}
              onChangeText={handleChange('cpf')}
              onBlur={handleBlur('cpf')}
            />

            <TextInput
              style={styles.input}
              mode='outlined'
              label='Idade'
              value={values.idade}
              onChangeText={handleChange('idade')}
              onBlur={handleBlur('idade')}
            />

            <TextInput
              style={styles.input}
              mode='outlined'
              label='Email'
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />


            <Button mode='contained' onPress={handleSubmit} >Cadastrar</Button>
          </View>
        )}
      </Formik>





    </View>
  )
}

const styles = StyleSheet.create({})