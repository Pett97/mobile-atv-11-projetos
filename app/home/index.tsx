import { faker } from "@faker-js/faker";
import { Stack } from "expo-router";
import { Alert, FlatList, Text, View } from "react-native";

import HeaderRight from "../../components/HeaderRight";
import Loading from "../../components/Loading";
import StyledButton from "../../components/StyledButton";
import useCollection from "../../firebase/hooks/useCollection";
import globalStyles from "../../styles/globalStyles";
import Project from "../../types/Project";
import ViewProject from "../../components/ViewProject";

export default function Home() {
  const { data, create, remove, refreshData, loading } =
    useCollection<Project>("projects");

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: "Home",
          headerRight: () => <HeaderRight />,
        }}
      />

      <Text style={globalStyles.title}>Projetos</Text>

      <StyledButton
        title="Criar Projeto"
        onPress={async () => {
          try {
            await create({
              nomeProjeto: faker.lorem.words(2),
              responsavel: faker.name.fullName(),
              contato: faker.phone.number(),
              endereco: faker.address.streetAddress(),
            });

            await refreshData();
          } catch (error: any) {
            Alert.alert("Create Projecto error", error.toString());
          }
        }}
      />

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ViewProject
              project={item}
              onDelete={async () => {
                await remove(item.id!);
                await refreshData();
              }}
            />
          )}
          style={{ width: "100%" }}
        />
      )}
    </View>
  );
}
