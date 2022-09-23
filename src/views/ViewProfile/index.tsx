import { ScrollView, Modal, View } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { IDevsState, IDev } from '../../types';

import {
  ContainerTextTop,
  TextTop,
  StyledButtons,
  StyledBackButtons,
  ContainerImageProfile,
  ImageProfile,
  TextStackMainDev,
  TextDescriptionDev,
  ContainerStacks,
  ContainerTitleAndExperience,
  TitleStacksAndExperience,
  TextStacksAndExperience,
  TextButton,
  Footer,
  ModalOption,
  TextOption
} from './styles';

import { ModalFrame, ModalBody } from '../../components/ShowError/styles';

import {
  AntDesign, MaterialIcons, FontAwesome
} from '@expo/vector-icons';

import {
  addFavorite,
  removeFavorite,
} from "../../store/modules/devsData/reducer";

export default function ViewProfile() {

  const dispatch = useDispatch();

  const [data, setData] = useState<IDev>();
  const [firstName, setFirstName] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  const { devsList, selectedDevId, favorites } = useSelector((state: IDevsState) => state.devs)

  useEffect(() => {

    const dev = devsList.find(item => item.id === selectedDevId);

    const separatedName: string[] | undefined = dev?.name.split(" ");

    setData(dev)

    if(separatedName)
      setFirstName(separatedName[0]);
  }, [])

  const nav = useNavigation();

  const closeModal = () => setModalVisible(false);

  const modal = () => (
    <Modal
        animationType='fade'
        visible={modalVisible}
        onRequestClose={() => closeModal()}
        transparent={true}
    >

      <ModalFrame
          onPress={() => closeModal()}
      >

          <ModalBody style={{ width: 270, paddingTop: 0 }}>

              <ModalOption>

                  <MaterialIcons
                      name="email" 
                      size={20} 
                      color="rgba(255,255,255,.7)" 
                  />

                  <TextOption>{ data?.email }</TextOption>

              </ModalOption>

              <ModalOption>

                  <FontAwesome 
                      name="mobile-phone" 
                      size={28} 
                      color="rgba(255,255,255,.7)" 
                  />

                  <TextOption>{ data?.phone }</TextOption>

              </ModalOption>

              <ModalOption
                  onPress={() => closeModal()}
              >

                  <FontAwesome 
                      name="close" 
                      size={20} 
                      color="rgba(255,255,255,.5)"
                  />

                  <TextOption style={{ opacity: .7 }}>Fechar</TextOption>

              </ModalOption>

          </ModalBody>

      </ModalFrame>

    </Modal>
  )

  const manageFavorites = (id: string) => {
    if (favorites.includes(id)) dispatch(removeFavorite(id));
    else dispatch(addFavorite(id));
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 15 }}>

      { modal() }

      <ContainerTextTop>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <StyledBackButtons
            onPress={() => nav.goBack()}
          >
            <AntDesign
              name="left"
              size={20}
              color="rgba(255, 255, 255, 0.50)"
            />
          </StyledBackButtons>
          
          <TextTop>
              Perfil de { data?.name }
          </TextTop>

        </View>

        <StyledButtons
          onPress={() => manageFavorites(data?.id)}
          activeOpacity={0.3}
        >
          <FontAwesome
            name={favorites.includes(data?.id) ? "heart" : "heart-o"}
            size={22}
            color={favorites.includes(data?.id) ? "#f14a41" : "#bfbfbf"}
          />
        </StyledButtons>
      </ContainerTextTop>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
      >

        <ContainerImageProfile>
          <ImageProfile
            source={{ uri: data?.photo }}
          />
          <TextStackMainDev>
            { data?.job }
          </TextStackMainDev>
          <TextDescriptionDev>
            { data?.description }
          </TextDescriptionDev>
        </ContainerImageProfile>
        <ContainerStacks>
          <ContainerTitleAndExperience
            style={
              {
                borderBottomWidth: 0,
                paddingBottom: 0
              }}
          >
            <TitleStacksAndExperience>
              TECNOLOGIAS
            </TitleStacksAndExperience>
            <TitleStacksAndExperience>
              EXPERIÊNCIA
            </TitleStacksAndExperience>
          </ContainerTitleAndExperience>
          
          {
              data?.stack.map((item, i) => (
                <ContainerTitleAndExperience key={`${item.name}${i}`}>
                  <TextStacksAndExperience>
                    { item.name }
                  </TextStacksAndExperience>
                  <TextStacksAndExperience>
                    { item.xp } { parseInt(item.xp) > 1 ? "anos" : "ano" }
                  </TextStacksAndExperience>
                </ContainerTitleAndExperience>
              ))
          }

        </ContainerStacks>

      </ScrollView>

      <Footer>
        <StyledButtons>
          <LinearGradient
            style={{
              paddingVertical: 14,
              paddingHorizontal: 8,
              borderRadius: 8,
              shadowColor: "#2BC0E0",
              shadowOffset: {
                width: 15,
                height: 12,
              },
              shadowOpacity: 0.4,
              shadowRadius: 15,
              elevation: 10
            }}
            colors={['#2BC0E0', '#2382B8']}
          >
            <TextButton
              onPress={() => setModalVisible(true)}
            >
              Falar com { firstName }
            </TextButton>
          </LinearGradient>
        </StyledButtons>
      </Footer>        
      
    </SafeAreaView>
  );
}
