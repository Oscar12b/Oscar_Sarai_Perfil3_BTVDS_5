import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

function Comidas() {
    const comidasFavoritas = [
        { id: '1', nombre: 'Pizza', descripcion: 'Deliciosa pizza con queso derretido y pepperoni', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7J6mSjH7-0HxAAg-MsxoCcr9YUF94FGAQpg&s' },
        { id: '2', nombre: 'Sushi', descripcion: 'Variado sushi con arroz y pescado fresco', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBaM7fMo7YNcCfIBQZVKSwdf_GOc3YMNq2g&s' },
        { id: '3', nombre: 'Tacos', descripcion: 'Tacos mexicanos con tortilla de maíz, carne y guacamole', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRSykTwcG150H249PAZ1mZiaincUKIMX18w&s' },
        { id: '4', nombre: 'Pasta', descripcion: 'Pasta italiana con salsa de tomate y albóndigas', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IrgDep9jUgKjpBcy88WkFWMWNgntor_3og&s' },
        { id: '5', nombre: 'Hamburguesa', descripcion: 'Hamburguesa jugosa con lechuga, tomate y queso cheddar', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9oFe2yW9jYggHprCqfjoyxFz38rfLlYj3g&s' },
        { id: '6', nombre: 'Pollo', descripcion: 'Pollo a la parrilla con verduras asadas', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVLLxMiFQPAMVh_xcE2LEwwHozbW92z-7zg&s' },
        { id: '7', nombre: 'Sopa', descripcion: 'Sopa caliente con vegetales frescos y fideos', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGscTclibMH2TlX5JNZpGf27s1mPi0r_qVw&s' },
        { id: '8', nombre: 'Ensalada', descripcion: 'Ensalada fresca con una variedad de verduras y aderezos', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjNqoN34oDFMILijcYx2Y0n5xZYKOApKKbw&s' },
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
                        <Image source={{ uri: item.imagen }} style={styles.cardImage} />
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
