import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  Pressable,
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
      <Text style={styles.description}>
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

      <Pressable style={styles.button} onPress={handleClick}>
        <Text style={styles.buttontext}>{'Berechne den ggT(a, b)'}</Text>
      </Pressable>

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

export default EuclideanAlgorithm;
