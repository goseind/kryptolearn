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
import { Euclid } from '../algorithms';

const EuclideanAlgorithm = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [steps, setSteps] = useState([]);
  const [result, setResult] = useState();

  function handleClick() {
    const calculations = Euclid(Number(a), Number(b));

    setResult(calculations[0]);
    setSteps(calculations[1]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Der euklidische Algorithmus dient zur Berechnung des größten gemeinsamen
        Teilers zweier natürlicher Zahlen und gilt als sehr effizient. Gib zwei
        natürliche Zahlen ein und drücke auf berechnen, um dir die Schritte des
        Algorithmus zeigen zu lassen.
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
