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

const EuclideanAlgorithm = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [steps, setSteps] = useState([]);
  const [result, setResult] = useState();

  function Euclid(a: number, b: number) {
    let stepsArray = [];
    let i = 1;
    while (b != 0) {
      const r = a % b;
      stepsArray.push(
        `Schritt ${i}: ${a} = ${Math.floor(a / b)} * ${b} + ${r}`
      );
      a = b;
      b = r;
      i += 1;
    }
    setSteps(stepsArray);
    return a;
  }

  function handleClick() {
    setResult(Euclid(Number(a), Number(b)));
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setA}
        placeholder="Nenne eine Zahl a"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setB}
        placeholder="Nenne eine Zahl b"
        keyboardType="numeric"
      />
      <Button onPress={handleClick} title="Berechne den ggT(a, b)" />
      <ScrollView>
        <Text style={styles.output}>Schritte:</Text>
        {steps.map((step, index) => (
          <Text style={styles.output} key={index}>
            {step}
          </Text>
        ))}
        <Text style={styles.output}>Der ggT(a, b) lautet: {result} </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default EuclideanAlgorithm;
