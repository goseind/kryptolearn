import { Button, View, Text, SafeAreaView } from 'react-native';

const Start = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Wähle ein Thema aus:
          </Text>
          <Button
            onPress={() => navigation.navigate('EuclideanAlgorithm')}
            title="Euklidischer Algorithmus"
          />
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Grundlegende Konzepte der Kryptographie lernen und verstehen
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Start;