import { Formik } from 'formik'
import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { Button, Text, TextInput } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import * as Yup from 'yup'

export default function FormPessoasFormularioAltoNivel({ navigation, route }) {

    const { acao, pessoa: pessoaAntiga } = route.params

    const validationSchema = Yup.object().shape({
        cpf: Yup
            .string()
            .required('Campo obrigatório!'),
        nome: Yup
            .string()
            .min(5, 'deve conter pelo menos 5 caracteres')
            .max(50, 'deve conter no máximo 50 caracteres')
            .required('Campo obrigatório'),
        idade: Yup
            .number('deve ser um número')
            .positive('deve ser um número positivo')
            .typeError('deve ser um número')
            .integer('deve ser um número inteiro')
            .required('Campo obrigatório'),
        peso: Yup
            .number('deve ser um número')
            .positive('deve ser um número positivo')
            .typeError('deve ser um número')
            .required('Campo obrigatório'),
        altura: Yup
            .number('deve ser um número')
            .typeError('deve ser um número')
            .positive('deve ser um número positivo')
            .integer('deve ser um número inteiro')
            .required('Campo obrigatório'),
    })

    useEffect(() => {
        console.log('pessoa -> ', pessoaAntiga)
    }, [])


    function salvar(novaPessoa) {
        console.log('SALVAR DADOS NOVA PESSOA -> ', novaPessoa)

        if (pessoaAntiga) {
            acao(pessoaAntiga, novaPessoa)
        } else {
            acao(novaPessoa)
        }

        Toast.show({
            type: 'success',
            text1: 'Pessoa salva com sucesso!'
        })

        navigation.goBack()
    }


    return (
        <ScrollView style={styles.container}>

            <Text variant='titleLarge' style={styles.title} >{pessoaAntiga ? 'Editar Pessoa' : 'Adicionar Pessoa'}</Text>


            <Formik
                initialValues={{
                    cpf: pessoaAntiga ? pessoaAntiga.cpf : '',
                    nome: pessoaAntiga ? pessoaAntiga.nome : '',
                    idade: pessoaAntiga ? pessoaAntiga.idade : '',
                    peso: pessoaAntiga ? pessoaAntiga.peso : '',
                    altura: pessoaAntiga ? pessoaAntiga.altura : ''
                }}
                validationSchema={validationSchema}
                onSubmit={values => salvar(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
                    <View style={styles.formContainer}>

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

                            {touched.cpf && errors.cpf && (
                                <Text style={{ color: 'red', textAlign: 'center' }}>{errors.cpf}</Text>
                            )}

                            <TextInput
                                style={styles.input}
                                mode='outlined'
                                label='Nome'
                                value={values.nome}
                                onChangeText={handleChange('nome')}
                                onBlur={handleBlur('nome')}
                            />

                            {touched.nome && errors.nome && (
                                <Text style={{ color: 'red', textAlign: 'center' }}>{errors.nome}</Text>
                            )}

                            <TextInput
                                style={styles.input}
                                mode='outlined'
                                label='Idade'
                                value={values.idade}
                                onChangeText={handleChange('idade')}
                                onBlur={handleBlur('idade')}
                                keyboardType='numeric'
                            />

                            {touched.idade && errors.idade && (
                                <Text style={{ color: 'red', textAlign: 'center' }}>{errors.idade}</Text>
                            )}

                            <TextInput
                                style={styles.input}
                                mode='outlined'
                                label='Peso | Kg'
                                value={values.peso}
                                onChangeText={handleChange('peso')}
                                onBlur={handleBlur('peso')}
                                keyboardType='numeric'
                            />

                            {touched.peso && errors.peso && (
                                <Text style={{ color: 'red', textAlign: 'center' }}>{errors.peso}</Text>
                            )}

                            <TextInput
                                style={styles.input}
                                mode='outlined'
                                label='Altura | cm'
                                value={values.altura}
                                onChangeText={handleChange('altura')}
                                onBlur={handleBlur('altura')}
                                keyboardType='numeric'
                            />

                            {touched.altura && errors.altura && (
                                <Text style={{ color: 'red', textAlign: 'center' }}>{errors.altura}</Text>
                            )}

                        </View>

                        <View style={styles.buttonContainer}>

                            <Button
                                style={styles.button}
                                mode='contained-tonal'
                                onPress={() => navigation.goBack()}
                            >
                                Voltar
                            </Button>

                            <Button
                                style={styles.button}
                                mode='contained'
                                onPress={handleSubmit}
                            >
                                Salvar
                            </Button>

                        </View>

                    </View>

                )}
            </Formik>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff'
    },
    title: {
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '90%',
        flex: 1
    },
    input: {
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '90%',
        gap: 10,
        marginBottom: 10,
        marginTop: 10
    },
    button: {
        flex: 1
    }
})