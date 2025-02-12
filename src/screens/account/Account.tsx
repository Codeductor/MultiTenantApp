import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from 'Styles';
import config from 'Tenant';

// Account Screen: Displays app version (expandable for more account info).
const AccountScreen: React.FC = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Account</Text>
        <Text>App Version: {config.appVersion}</Text>
    </View>
);

export default AccountScreen;