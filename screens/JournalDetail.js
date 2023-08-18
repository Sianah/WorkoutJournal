import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { JournalContext } from '../JournalContext';

const JournalDetail = ({ route, navigation }) => {
    const { journals = [] } = useContext(JournalContext);
    const journal = journals.find(j => j.id === route.params.id);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24 }}>My</Text>
                    <View style={{ 
                        backgroundColor: '#FFF', 
                        borderRadius: 8,
                        paddingLeft: 5, 
                        paddingRight: 5, 
                        marginLeft: 1,
                        overflow: 'hidden' 
                    }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 24 }}>Grind</Text>
                    </View>
                </View>
            ),
            headerTransparent: true,   
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
            },
        });
    }, [navigation]);

    if (!journal) {
        return (
            <View style={styles.container}>
                <Text>Error: Journal not found.</Text>
            </View>
        );
    }

    return (
        <ImageBackground source={require('./smoke.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.contentCentered}>
                    <Text style={styles.subtitle}>Day: {journal.day}</Text>
                    <View style={styles.underline} />
                    <View style={styles.detailBox}>
                        <Text style={styles.detailLabel}>Details:</Text>
                        <Text style={styles.detailText}>{journal.detail}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 70,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    contentCentered: {
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 0,
        marginTop: 30,
        color: 'white',
    },
    underline: {
        height: 2,
        width: '60%',
        backgroundColor: '#FFF',
        marginTop: 1,
        marginBottom: 10,
    },
    detailLabel: {
        fontSize: 18,
        color: 'white',
        padding: 10,
        textAlign: 'center',
    },
    detailText: {
        fontSize: 18,
        color: 'white',
        padding: 10, 
        textAlign: 'center',
    },
    detailBox: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        marginTop: 10,
        padding: 10,
    },
});

export default JournalDetail;





