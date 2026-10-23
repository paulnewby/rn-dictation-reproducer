/**
 * iOS dictation duplicates text in a controlled single-line TextInput (new architecture).
 *
 * @format
 */

import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        Tap the field, tap the keyboard mic, say a sentence, tap the mic again:
        the text appears twice.
      </Text>

      <Text style={styles.label}>Controlled (value + onChangeText)</Text>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Button title="Clear" onPress={() => setText('')} />

      <Text style={styles.label}>Control: uncontrolled (defaultValue only)</Text>
      <TextInput style={styles.input} defaultValue="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 80, backgroundColor: 'white' },
  instructions: { fontSize: 18, marginBottom: 24, color: 'black' },
  label: { fontSize: 16, fontWeight: '600', marginTop: 24, marginBottom: 8, color: 'black' },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    fontSize: 18,
    color: 'black',
  },
});

export default App;
