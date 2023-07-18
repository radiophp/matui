
import MainLayout from "./components/layouts/MainLayout";
import {useState} from "react";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import RecipeReviewCard from "./components/RecipeReviewCard";
import TabPanel from "./components/TabPanel";
import { Typography } from "@mui/material";
import MediaControlCard from "./components/MediaControlCard";
import MediaCard from "./components/MediaCard";
import CustomizedSteppers from "./components/CustomizedSteppers";
import TransitionGroupExample from "./components/TransitionGroupExample";
import BasicDateRangePicker from "./components/BasicDateRangePicker";
import PieArcLabel from "./components/PieArcLabel";





function App() {
  const [value,setValue] = useState(0);
  const handleChange = (event,newValue)=>{
      setValue(newValue);
  }


 
  return (
    <MainLayout> 
            <Sidebar value={value} handleChange={handleChange} />
            <ContentContainer > 
              <TabPanel value={value} index={0}>
                <RecipeReviewCard></RecipeReviewCard>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <MediaControlCard></MediaControlCard>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <MediaCard></MediaCard>
              </TabPanel>
              <TabPanel value={value} index={3}>
              <CustomizedSteppers></CustomizedSteppers>
              </TabPanel>
              <TabPanel value={value} index={4}><TransitionGroupExample></TransitionGroupExample> </TabPanel>
              <TabPanel value={value} index={5}  ><BasicDateRangePicker  localeText={{ start: 'Check-in', end: 'Check-out' }} /></TabPanel>
              <TabPanel value={value} index={6}><PieArcLabel></PieArcLabel></TabPanel>
            </ContentContainer>
    </MainLayout>

  );
}

export default App;
