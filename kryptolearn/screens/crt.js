import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import { crt } from '../algorithms';

const ChineseRemainderTheorem = () => {
  const [m, setM] = useState('');
  const [a, setA] = useState('');
  const [steps, setSteps] = useState([]);
  const [result, setResult] = useState([]);

  function handleClick() {
    let mm = m.split(',').map(Number);
    let aa = a.split(',').map(Number);
    console.log(mm, aa);
    const calculations = crt(mm, aa);
    setResult(calculations);
    setSteps(calculations.stepsArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>
        Chinesischer Restsatz als Lösungsverfahren bei gleichzeitiger Kongruenz.
        Gib mehrere durch Komma getrennte Module und die zugehörigen Reste ein,
        um die unbekannte Summe zu berechnen.
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setM}
        placeholder="Nenne die Module m1, m2, .., mn (kommagetrennt)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setA}
        placeholder="Nenne die Reste a1, a2, .., an (kommagetrennt)"
        keyboardType="numeric"
      />

      <Pressable style={styles.button} onPress={handleClick}>
        <Text style={styles.buttontext}>{'Berechne die Summe'}</Text>
      </Pressable>

      <ScrollView>
        <Text style={styles.output}>Schritte:</Text>
        {steps.map((step, index) => (
          <Text style={styles.output} key={index}>
            {step}
          </Text>
        ))}
        <Text style={styles.output}>
          Die kleinste mögliche Summe lautet: {result.x}{' '}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'royalblue',
    margin: 3,
  },
  buttontext: {
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  description: {
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  output: {
    backgroundColor: '#F5FEFD',
    margin: 10,
  },
});

export default ChineseRemainderTheorem;
