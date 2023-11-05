import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  ScrollView,
  StatusBar,
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
      <SafeAreaView style={styles.containerr}>
        <Text>
          Chinesischer Restsatz als Lösungsverfahren bei gleichzeitiger
          Kongruenz. Gib mehrere durch Komma getrennte Module und die
          zugehörigen Reste ein, um die unbekannte Summe zu berechnen.
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
      </SafeAreaView>

      <Button onPress={handleClick} title="Berechne die Summe" />
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
  containerr: {
    flex: 1,
    //flexDirection: 'row',
  },
  input: {
    flex: 1,
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
