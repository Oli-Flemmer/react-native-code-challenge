import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,

} from 'react-native';

import { Controller, useForm } from 'react-hook-form';

import SizedBox from '../../components/SizedBox';
import DatePicker from 'react-native-date-picker';

import { Credentials } from './SignInContainer'

import styles from './style';
import Primary from 'app/src/components/Button/primary';
interface FormData {
  username: string;
  password: string;
  dateOfBirth: Date;
}


interface Props {
  authenticate: (credentials: Credentials) => boolean
}


const SignInView = ({ authenticate }: Props): JSX.Element => {
  const usernameInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);

  const [open, setOpen] = useState<boolean>(false)

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      username: '',
      password: '',
      dateOfBirth: new Date(),
    },
  });

  const onSubmit = handleSubmit(({ username, password, dateOfBirth }) => {
    const credentials: Credentials = {
      username,
      password,
      dateOfBirth
    };
    const result = authenticate(credentials);
    if (!result) {
      Alert.alert("Error", 'one or more fileds are wrong!');
    }
  });



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <SafeAreaView style={styles.safeAreaView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.content}
          >
            <Text style={styles.title}>Resturant App</Text>

            <SizedBox height={8} />

            <Text style={styles.subtitle}>Login in to your account</Text>

            <SizedBox height={32} />

            <Pressable onPress={() => usernameInput.current?.focus()}>
              <View style={styles.form}>
                <Text style={styles.label}>Username</Text>

                <Controller
                  control={control}
                  name="username"
                  render={({ field: { onBlur, onChange, value } }) => (
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      onSubmitEditing={() => passwordInput.current?.focus()}
                      ref={usernameInput}
                      returnKeyType="next"
                      style={styles.textInput}
                      textContentType="username"
                      value={value}
                      testID={"username"}
                    />
                  )}
                />
              </View>
            </Pressable>

            <SizedBox height={16} />

            <Pressable onPress={() => passwordInput.current?.focus()}>
              <View style={styles.form}>
                <Text style={styles.label}>Password</Text>

                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onBlur, onChange, value } }) => (
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      onSubmitEditing={onSubmit}
                      ref={passwordInput}
                      returnKeyType="done"
                      secureTextEntry
                      style={styles.textInput}
                      textContentType="password"
                      value={value}
                      testID={"password"}
                    />
                  )}
                />
              </View>
            </Pressable>

            <SizedBox height={16} />

            <Pressable onPress={() => setOpen(true)}>
              <View style={styles.form}>
                <Text style={styles.label}>Select DOB</Text>

                <Controller
                  control={control}
                  name="dateOfBirth"
                  render={({ field: { onBlur, onChange, value } }) => (

                    <DatePicker modal open={open} date={value}
                      onConfirm={(date) => {
                        console.log(date);
                        onChange(date);
                        setOpen(false);
                      }}
                      onCancel={() => {
                        setOpen(false)
                      }}
                      mode={"date"}
                      testID={"dob"}
                    />

                  )}
                />

                <Text style={[{ ...styles.textInput, marginLeft: 20 }]}>{control._formValues.dateOfBirth.toLocaleDateString()}</Text>
              </View>
            </Pressable>

            <SizedBox height={16} />

            <Primary testID="Go" style={{ width: "100%" }} text='Go' onPress={onSubmit} />

          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};



export default SignInView;
