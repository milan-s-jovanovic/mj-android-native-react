/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AppCenter from 'appcenter';
import Analytics from 'appcenter-analytics';
import Crashes, { ErrorAttachmentLog, UserConfirmation } from 'appcenter-crashes';

//const imageAsBase64string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABHNCSVQICAgIfAhkiAAAAbFJREFUeJzt3LEuQ2EAhuGvKpUyYJVqDAYxMEhchdgNVrG5BZtVegVuwA0Y3IBRGIxi0KHEINIENTWh62nyv0feZ/vP9CVvzvm30xiNchphzJQeoL8MAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBKb2QZ5OsnPbzdHdRg4HF1ktvaeq2dIDqng+y0a/l73x+fE4nfnd9NqbeS+5q4pavyFvV1n/ff4epvV6mW6pPdNQ6yBzaxlMPlvYzkuJLdNS6yCd89y0t/KQJGnma/kg14v76ReeVUnjP/zi7+M+C82lfLZWMiy9papaX+pjdb7EJ9X6k/UfGQTGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAvMDjUAlRoSOTPsAAAAASUVORK5CYII=';
const imageAsBase64string = 'iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABHNCSVQICAgIfAhkiAAAAbFJREFUeJzt3LEuQ2EAhuGvKpUyYJVqDAYxMEhchdgNVrG5BZtVegVuwA0Y3IBRGIxi0KHEINIENTWh62nyv0feZ/vP9CVvzvm30xiNchphzJQeoL8MAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBKb2QZ5OsnPbzdHdRg4HF1ktvaeq2dIDqng+y0a/l73x+fE4nfnd9NqbeS+5q4pavyFvV1n/ff4epvV6mW6pPdNQ6yBzaxlMPlvYzkuJLdNS6yCd89y0t/KQJGnma/kg14v76ReeVUnjP/zi7+M+C82lfLZWMiy9papaX+pjdb7EJ9X6k/UfGQTGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAvMDjUAlRoSOTPsAAAAASUVORK5CYII=';

AppCenter.setUserId("Milan::Pop!_OS");

Crashes.setListener({
    shouldAwaitUserConfirmation: function (report) {

        // Build your own UI to ask for user consent here. SDK does not provide one by default.

        Crashes.notifyUserConfirmation(UserConfirmation.ALWAYS_SEND);
        // Return true if you just built a UI for user consent and are waiting for user input on that custom UI, otherwise false.
        return true;
    },
    getErrorAttachments(report) {
        const textAttachment = ErrorAttachmentLog.attachmentWithText('Hello text attachment!', 'hello.txt');
        const binaryAttachment = ErrorAttachmentLog.attachmentWithBinary(`${imageAsBase64string}`, 'logo.png', 'image/png');
        return [textAttachment, binaryAttachment];
    }

    // Other callbacks must also be defined at the same time if used.
    // Default values are used if a method with return parameter is not defined.
});

const createCrash:void = () => {
    throw new Error('This is 1st javascript crash!');
};

const createCrash2:void = () => {
    throw new Error('This is 2nd javascript crash!');
};

const App: () => React$Node = () => {
    const [log,setLog] = React.useState('Application log2:\n\napplication starting...\n');

const createCrash3:void = () => {
    // throw new Error('This is 3rd javascript crash!');
    setLog(log + 'Event: Video clicked triggered...\n')
    Analytics.trackEvent('Video clicked', { Category: 'Music', FileName: 'favorite.avi' });
};

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/*<Header />*/}
          {/*global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )*/}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
                <TextInput
                      multiline={true}
                      editable={false}
                      numberOfLines={7}
                      style={{ borderColor: 'gray', borderWidth: 1 }}
                      value={log}
                    />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Click <Button style={styles.highlight} onPress={createCrash} title='here'></Button> to generate a crash case.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step Two</Text>
              <Text style={styles.sectionDescription}>
                Click <Button style={styles.highlight} onPress={createCrash2} title='here'></Button> to generate a NEW crash case.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step Three</Text>
              <Text style={styles.sectionDescription}>
                Click <Button style={styles.highlight} onPress={createCrash3} title='here'></Button> to generate a NEW Event case.
              </Text>
            </View>
            {/*<View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />*/}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
