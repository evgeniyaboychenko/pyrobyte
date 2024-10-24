import { ReactNode } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface Props {
  tabListInner: ReactNode[],
  tabPanelListInner: ReactNode[]
}

function TabComponent ({tabListInner, tabPanelListInner} :Props) {
  return (
    <Tabs>
      <TabList>
        {tabListInner.map((item, index) => <Tab key={index}>{item}</Tab>)}
      </TabList>
        {tabPanelListInner.map((item, index) => <TabPanel key={index}>{item}</TabPanel>)}
  </Tabs>
  );
};

export default TabComponent;