import React from 'react';
import {
    Appearance,
    View,
    Text,
    Button,
    Switch,
} from 'react-native';

import styles from 'Styles';
import config from 'Tenant';
import { lightTheme, darkTheme } from 'Theme';
import { randomStrings } from 'Strings';

const HomeScreen: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(Appearance.getColorScheme() === 'dark');
    const [randomString, setRandomString] = React.useState<string>('');

    // Determine current theme based on state.
    const theme = isDarkMode ? darkTheme : lightTheme;

    // Toggle theme between light and dark.
    const handleToggleTheme = () => {
        setIsDarkMode((prevState) => !prevState);
    };

    // Select a random string from the list.
    const generateRandomString = () => {
        const randomIndex = Math.floor(Math.random() * randomStrings.length);
        setRandomString(randomStrings[randomIndex]);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.title, { color: theme.text }]}>
                Welcome to {config.brandName}
            </Text>
            {/* Random String Generator Section */}
            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>
                    Random String Generator
                </Text>
                <Button
                    title="Generate Random String"
                    onPress={generateRandomString}
                    color={config.primaryColor}
                />
                {randomString !== '' && (
                    <Text style={[styles.randomString, { color: theme.text }]}>
                        {randomString}
                    </Text>
                )}
            </View>
            {/* Theme Toggler Section */}
            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>
                    Theme Toggler
                </Text>
                <View style={styles.switchContainer}>
                    <Text style={{ color: theme.text }}>Light</Text>
                    <Switch
                        value={isDarkMode}
                        onValueChange={handleToggleTheme}
                        thumbColor={theme.switchThumbColor}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                    />
                    <Text style={{ color: theme.text }}>Dark</Text>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;