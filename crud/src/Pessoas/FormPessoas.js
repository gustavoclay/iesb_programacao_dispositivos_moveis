import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Button, Text, TextInput } from 'react-native-paper';
import * as Yup from 'yup';



export default function FormPessoas({ navigation, route }) {

  const acao = route.params.acao
  const pessoaAntiga = route.params.pessoaAntiga

  const validationSchema = Yup.object().shape({
    nome: Yup.string().min(5, 'Nome curto').max(50, 'Nome grande').required('Campo obrigatório'),
    cpf: Yup.string().min(14, 'cpf inválido').max(14, 'cpf inválido').required('Campo obrigatório'),
    idade: Yup.number().integer('numero inteiro').positive('numero positivo').required('Campo obrigatório'),
    email: Yup.string().email('email inválido').required('Campo obrigatório')
  })

  function salvar(pessoa) {

    if (pessoaAntiga) {
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
        validationSchema={validationSchema}
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
              error={errors.nome && touched.nome}
            />

            {(errors.nome && touched.nome) && <Text style={{ textAlign: 'center' }}>{errors.nome}</Text>}

            <TextInput
              style={styles.input}
              mode='outlined'
              label='CPF'
              value={values.cpf}
              onChangeText={handleChange('cpf')}
              onBlur={handleBlur('cpf')}
              error={errors.cpf && touched.cpf}
              keyboardType='numeric'
              render={props =>
                <TextInputMask
                  {...props}
                  type={'cpf'}
                />
              }
            />

            {(errors.cpf && touched.cpf) && <Text style={{ textAlign: 'center' }}>{errors.cpf}</Text>}

            <TextInput
              style={styles.input}
              mode='outlined'
              label='Idade'
              value={values.idade}
              onChangeText={handleChange('idade')}
              onBlur={handleBlur('idade')}
              error={errors.idade && touched.idade}
              keyboardType='numeric'
            />

            {(errors.idade && touched.idade) && <Text style={{ textAlign: 'center' }}>{errors.idade}</Text>}

            <TextInput
              style={styles.input}
              mode='outlined'
              label='Email'
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email && touched.email}
            />

            {(errors.email && touched.email) && <Text style={{ textAlign: 'center' }}>{errors.email}</Text>}


            <Button mode='contained' onPress={handleSubmit} >Cadastrar</Button>
          </View>
        )}
      </Formik>





    </View>
  )
}

const styles = StyleSheet.create({})