import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

function Comidas() {
    const comidasFavoritas = [
        { id: '1', nombre: 'Pizza', descripcion: 'Deliciosa pizza con queso derretido y pepperoni' },
        { id: '2', nombre: 'Sushi', descripcion: 'Variado sushi con arroz y pescado fresco' },
        { id: '3', nombre: 'Tacos', descripcion: 'Tacos mexicanos con tortilla de maíz, carne y guacamole' },
        { id: '4', nombre: 'Pasta', descripcion: 'Pasta italiana con salsa de tomate y albóndigas' },
        { id: '5', nombre: 'Hamburguesa', descripcion: 'Hamburguesa jugosa con lechuga, tomate y queso cheddar' },
        { id: '6', nombre: 'Pollo', descripcion: 'Pollo a la parrilla con verduras asadas' },
        { id: '7', nombre: 'Sopa', descripcion: 'Sopa caliente con vegetales frescos y fideos' },
        { id: '8', nombre: 'Ensalada', descripcion: 'Ensalada fresca con una variedad de verduras y aderezos' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comidas favoritas</Text>
            <FlatList
                data={comidasFavoritas}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatlistContainer}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.imagen} style={styles.cardImage} />
                        <Text style={styles.cardText}>{item.nombre}</Text>
                        <Text style={styles.cardDescription}>{item.descripcion}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    flatlistContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        marginBottom: 20,
        marginRight: 20,
        width: '45%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    cardImage: {
        width: '100%',
        height: 150,
        marginBottom: 10,
        borderRadius: 8,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 16,
    },
});

export default Comidas;
