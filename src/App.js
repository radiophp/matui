
import MainLayout from "./components/layouts/MainLayout";
import {useState} from "react";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";





function App() {
  const [value,setValue] = useState(1);
  const handleChange = (event,newValue)=>{
      setValue(newValue);
  }

  return (
    <MainLayout>


            <Sidebar value={value} handleChange={handleChange} />
            <ContentContainer ></ContentContainer>

    </MainLayout>

  );
}

export default App;
