import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  ScrollView,
} from 'react-native';
import { extendedEuclid } from '../algorithms';

const ExtendedEuclideanAlgorithm = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [steps, setSteps] = useState([]);
  const [result, setResult] = useState([]);

  function handleClick() {
    const calculations = extendedEuclid(Number(a), Number(b));
    setResult(calculations);
    setSteps(calculations.stepsArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Der erweiterte euklidische Algorithmus kann zwei Zahlen x und y
        berechnen, sodass ggt(a, b) = ax + by. Gib zwei natürliche Zahlen ein
        und drücke auf berechnen, um dir die Schritte des Algorithmus zeigen zu
        lassen.
      </Text>
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
      <Button
        onPress={handleClick}
        title="Berechne Zahlen x und y zu a und b"
      />
      <ScrollView>
        <Text style={styles.output}>Schritte:</Text>
        {steps.map((step, index) => (
          <Text style={styles.output} key={index}>
            {step}
          </Text>
        ))}
        <Text style={styles.output}>
          Der ggT(a, b) lautet: {result.a}, x ist: {result.x} und y ist:{' '}
          {result.y}
        </Text>
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

export default ExtendedEuclideanAlgorithm;
