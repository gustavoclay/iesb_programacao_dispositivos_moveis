import { Formik } from 'formik'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import * as Yup from 'yup'
import { TextInputMask } from 'react-native-masked-text'

export default function Cadastro() {

  const validationSchema = Yup.object().shape({
    cpf: Yup
      .string()
      .required('Campo obrigatório'),
    telefone: Yup
      .string()
      .required('Campo obrigatório'),
    nome: Yup
      .string()
      .min(5, 'deve conter pelo menos 5 caracteres')
      .max(50, 'deve conter no máximo 50 caracteres')
      .required('Campo obrigatório'),
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    senha: Yup
      .string()
      .min(8, 'deve conter pelo menos 8 caracteres')
      .max(12, 'deve conter no máximo 12 caracteres')
      .required('Campo obrigatório'),
  });


  function cadastrar(values) {
    console.log('usuario: ', values)
    alert(JSON.stringify(values))
  }


  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Bem vindo ao Cadastro</Text>

      <Formik
        initialValues={{
          cpf: '',
          telefone: '',
          nome: '',
          email: '',
          senha: ''
        }}
        validationSchema={validationSchema}
        onSubmit={values => cadastrar(values)}
      >

        {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (

          <>

            <View style={styles.inputContainer}>

              <TextInput
                style={styles.input}
                mode='outlined'
                label={'CPF'}
                placeholder='000.000.000-00'
                value={values.cpf}
                onChangeText={handleChange('cpf')}
                onBlur={handleBlur('cpf')}
                error={touched.cpf && errors.cpf}
                keyboardType='numeric'
                render={props => 
                  <TextInputMask 
                    {...props}
                    type={'cpf'}
                  />
                }
              />

              {(touched.cpf && errors.cpf) && <Text style={{ color: 'red' }}>{errors.cpf}</Text>}

              <TextInput
                style={styles.input}
                mode='outlined'
                label={'Telefone'}
                // placeholder='000.000.000-00'
                value={values.telefone}
                onChangeText={handleChange('telefone')}
                onBlur={handleBlur('telefone')}
                error={touched.telefone && errors.telefone}
                keyboardType='numeric'
                render={props =>
                  <TextInputMask
                    {...props}
                    type={'cel-phone'}
                  />
                }
              />

              {(touched.telefone && errors.telefone) && <Text style={{ color: 'red' }}>{errors.telefone}</Text>}

              <TextInput
                style={styles.input}
                mode='outlined'
                label={'Nome'}
                value={values.nome}
                onChangeText={handleChange('nome')}
                onBlur={handleBlur('nome')}
                error={touched.nome && errors.nome}
              />

              {(touched.nome && errors.nome) && <Text style={{ color: 'red' }}>{errors.nome}</Text>}

              <TextInput
                style={styles.input}
                mode='outlined'
                label={'Email'}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType='email-address'
                error={touched.email && errors.email}
              />

              {(touched.email && errors.email) && <Text style={{ color: 'red' }}>{errors.email}</Text>}

              <TextInput
                style={styles.input}
                mode='outlined'
                label={'Senha'}
                value={values.senha}
                onChangeText={handleChange('senha')}
                onBlur={handleBlur('senha')}
                secureTextEntry
                error={touched.senha && errors.senha}
              />

              {(touched.senha && errors.senha) && <Text style={{ color: 'red' }}>{errors.senha}</Text>}


            </View>

            <Button mode='contained' onPress={handleSubmit}>Cadastrar</Button>

          </>


        )}

      </Formik>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '85%',
    marginTop: 15,
    marginBottom: 20,
  },
  input: {
    marginTop: 20
  }
})