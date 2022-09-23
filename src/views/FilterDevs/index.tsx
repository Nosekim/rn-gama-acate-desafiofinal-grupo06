import { TouchableHighlight, TouchableOpacity, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import { 
    stylesActionButton, 
    TextButton,
    TextContent, 
    Label,
    ContainerLink } from '../../global/GlobalStyles';

import styles, { 
    Container, 
    AddedFilteredStacks, 
    FilteredStack, 
    TopLineFiltered, 
    RemoveFilteredStack, 
    BottomLineFiltered, 
    ExpStackPill, 
    TextExpPill } from './styles';

import { IAppState } from '../../types';

import TopBarNav from '../../components/TopBarNav';
 
import { 
    addFilter, 
    removeFilter,
    manageExpFilter,
    listFilteredDevs } from '../../store/modules/devsData/reducer';

export default function FilterDevs() {

    const dispatch = useDispatch();

    const nav = useNavigation();

    const [stacks, setStacks] = useState([]);

    const { devsList, filters, filteredDevs } = useSelector((state: IAppState) => state.devs);

    useEffect(() => {

        let uniqueStacks = [];

        devsList.forEach(item => {

            item.stack.forEach(tech => {

                const { name } = tech;

                if(!uniqueStacks.includes(name))
                    uniqueStacks.push(name);
            })
        })

        setStacks(uniqueStacks.sort());
    }, [])

    useEffect(() => {

        const filtered = devsList.filter(item => {

            const { stack } = item;

            if(filters.length < 1) return item;

            if(stack.length > 0) {

                let filterMatches = 0;

                stack.forEach(tech => {

                    const { name, xp } = tech;
    
                    const stackMatched = filters.find(filter => filter.stack === name);

                    if(stackMatched) {

                        const { junior, middle, senior } = stackMatched;

                        const exp = parseInt(xp);

                        if(exp < 2 && junior) filterMatches++;
                        else if(exp >= 2 && exp < 5 && middle) filterMatches++;
                        else if(exp >= 5 && senior) filterMatches++;
                    }
                })

                if(filterMatches === filters.length) return item

                return false;
            }
        })

        dispatch(listFilteredDevs(filtered))

    }, [filters])

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <TopBarNav 
                title="Filtrar Devs"
            />

            <Container>

                <Label>tecnologias / experiência</Label>

                <Picker
                    style={styles.picker}
                    selectedValue=""
                    onValueChange={(itemValue, itemIndex) =>
                        dispatch(addFilter(
                            { 
                                stack: itemValue, 
                                junior: true,
                                middle: true,
                                senior: true 
                            }
                        ))
                    }>

                        <Picker.Item 
                            label="Selecione a tecnologia"
                            value="" 
                        />
                    {
                        stacks.map((item: any) => {

                            if(!filters.find(tech => tech.stack === item))
                                return(
                                    <Picker.Item 
                                        key={item}
                                        label={item} 
                                        value={item} 
                                    />
                                )

                            return false;
                        })
                    }

                </Picker>

                <AddedFilteredStacks>
                
                    <Label>Filtros selecionados</Label>

                    {
                        filters.length > 0 ?
                        filters.map(item => (

                            <FilteredStack key={item.stack}>

                                <TopLineFiltered>

                                    <TextContent>{ item.stack }</TextContent>

                                    <TouchableOpacity 
                                        onPress={() => dispatch(removeFilter(item.stack))}
                                    >
                                        <RemoveFilteredStack>x</RemoveFilteredStack>
                                    </TouchableOpacity>
                                    
                                </TopLineFiltered>

                                <BottomLineFiltered>

                                    <ExpStackPill
                                        onPress={() => dispatch(manageExpFilter({ ...item, junior: !item.junior }))}
                                        style={item.junior && styles.activePill}
                                    >
                                        <TextExpPill 
                                            style={item.junior && styles.activeTextPill}
                                        >Até 2 anos</TextExpPill>
                                    </ExpStackPill>

                                    <ExpStackPill
                                        onPress={() => dispatch(manageExpFilter({ ...item, middle: !item.middle }))}
                                        style={item.middle && styles.activePill}
                                    >
                                        <TextExpPill 
                                            style={item.middle && styles.activeTextPill}
                                        >2 a 5 anos</TextExpPill>
                                    </ExpStackPill>

                                    <ExpStackPill
                                        onPress={() => dispatch(manageExpFilter({ ...item, senior: !item.senior }))}
                                        style={item.senior && styles.activePill}
                                    >
                                        <TextExpPill 
                                            style={item.senior && styles.activeTextPill}
                                        >+ de 5 anos</TextExpPill>
                                    </ExpStackPill>

                                </BottomLineFiltered>

                            </FilteredStack>

                        )) : (<TextContent>Nenhuma tecnologia selecionada</TextContent>)
                    }

                </AddedFilteredStacks>    

            </Container>

            <ContainerLink>

                {
                    filteredDevs.length > 0 ?
                    (
                        <LinearGradient
                            colors={['#2BC0E0', '#2382B8']}
                            style={stylesActionButton.container}
                        >

                            <TouchableHighlight
                                style={stylesActionButton.content}
                                activeOpacity={.7}
                                onPress={() => nav.goBack()}
                                underlayColor='#2BC0E0'
                            >
                                <TextButton>Ver {filteredDevs.length} desenvolvedor(es)</TextButton>
                            </TouchableHighlight>

                        </LinearGradient>
                    ) : (<TextContent>Não há desenvolvedores com esses parâmetros</TextContent>)
                }

            </ContainerLink>

        </SafeAreaView>    
    )
}