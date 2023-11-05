import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';

const Start = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.headertext}>
            Wähle ein Thema aus, um mehr zu erfahren!
          </Text>
          <Text style={styles.topictext}>Modulare Arithmetik</Text>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('EuclideanAlgorithm')}>
            <Text style={styles.buttontext}>{'Euklidischer Algorithmus'}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('ExtendedEuclideanAlgorithm')}>
            <Text style={styles.buttontext}>
              {'Erweiterter Euklidischer Algorithmus'}
            </Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('ChineseRemainderTheorem')}>
            <Text style={styles.buttontext}>{'Chinesischer Restsatz'}</Text>
          </Pressable>
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Grundlegende Konzepte der Kryptographie lernen und verstehen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Start;

const styles = StyleSheet.create({
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
  topictext: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5,
  },
  headertext: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
  },
});
